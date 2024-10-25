import * as Sentry from '@sentry/nextjs'
import { type NextRequest, NextResponse } from 'next/server'

import { HttpStatus } from '@/shared/enums/http-status.enum'
import { getBlogById } from '@/shared/lib/supabase/services/blog.service'
import { type TApiResponse } from '@/shared/types'
import rateLimit from '@/shared/utils/rate-limit.util'

/**
 * Limit max 10 requests per minute
 */
const limiter = rateLimit({
  interval: 60 * 1000,
  uniqueTokenPerInterval: 500
})

export const GET = async (req: NextRequest, { params }: { params: { id: string } }) => {
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

  const { id } = params

  const { data, error } = await getBlogById(+id)

  // Handle errors
  if (error) {
    Sentry.captureMessage(error.message)
    response = {
      status: HttpStatus.INTERNAL_SERVER_ERROR,
      message: error.message,
      data: null
    }

    return NextResponse.json(response, { status: response.status })
  }

  response = {
    status: HttpStatus.OK,
    message: 'Get blogs by ID successfully',
    data
  }

  return NextResponse.json(response, { status: response.status })
}
