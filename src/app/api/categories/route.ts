import * as Sentry from '@sentry/nextjs'
import { type NextRequest, NextResponse } from 'next/server'

import { HttpStatus } from '@/shared/enums'
import { getAllCategories } from '@/shared/lib/supabase/services/category.service'
import { type TApiResponse, type TPagination } from '@/shared/types'
import { getPaginationRange } from '@/shared/utils/pagination.util'
import rateLimit from '@/shared/utils/rate-limit.util'

/**
 * Limit max 10 requests per minute
 */
const limiter = rateLimit({
  interval: 60 * 1000,
  uniqueTokenPerInterval: 500
})

export const GET = async (req: NextRequest) => {
  let response: TApiResponse

  const rateLimitCheck = limiter.check(10, 'CACHE_TOKEN')
  if (rateLimitCheck) {
    response = {
      status: HttpStatus.TOO_MANY_REQUEST,
      message: 'Too many requests',
      data: null
    }

    return NextResponse.json(response, { status: HttpStatus.TOO_MANY_REQUEST })
  }

  const { searchParams } = new URL(req.url)
  const page = searchParams.get('page') ?? '1'
  const limit = searchParams.get('limit') ?? '10'
  const { from, to } = getPaginationRange(+page, +limit)

  const { data, totalItems, error } = await getAllCategories(from, to)

  if (error) {
    Sentry.captureMessage(error.message ?? 'Failed to get categories')
    response = {
      status: HttpStatus.INTERNAL_SERVER_ERROR,
      message: error.message || 'Failed to get categories',
      data: null
    }
    return NextResponse.json(response, { status: response.status })
  }

  const pagination: TPagination = {
    currentPage: +page,
    itemsPerPage: +limit,
    totalItems: totalItems ?? 0,
    totalPages: Math.ceil((totalItems ?? 0) / +limit)
  }

  response = {
    status: HttpStatus.OK,
    message: 'Get all categories successfully',
    data,
    pagination
  }

  return NextResponse.json(response, { status: response.status })
}
