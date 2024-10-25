import * as Sentry from '@sentry/nextjs'
import { type NextRequest, NextResponse } from 'next/server'

import { HttpStatus } from '@/shared/enums'
import { getAllCourses } from '@/shared/lib/supabase/services/course.service'
import { type TApiResponse, type TPagination } from '@/shared/types'
import { getPaginationRange } from '@/shared/utils/pagination.util'

export const GET = async (req: NextRequest) => {
  let response: TApiResponse

  const { searchParams } = new URL(req.url)
  const page = searchParams.get('page') ?? '1'
  const limit = searchParams.get('limit') ?? '10'
  const { from, to } = getPaginationRange(+page, +limit)

  const { data, totalItems, error } = await getAllCourses(from, to)

  if (error) {
    Sentry.captureMessage(error.message ?? 'Failed to get courses')
    response = {
      status: error.status ?? HttpStatus.INTERNAL_SERVER_ERROR,
      message: error.message ?? 'Failed to get courses',
      data: null
    }
  }

  const pagination: TPagination = {
    currentPage: +page,
    itemsPerPage: +limit,
    totalItems: totalItems ?? 0,
    totalPages: Math.ceil(totalItems ?? 0 / +limit)
  }

  response = {
    status: HttpStatus.OK,
    message: 'Get all courses successfully',
    data,
    pagination
  }

  return NextResponse.json(response, { status: response.status })
}
