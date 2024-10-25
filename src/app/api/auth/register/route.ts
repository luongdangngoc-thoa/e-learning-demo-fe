import * as Sentry from '@sentry/nextjs'
import { type AuthResponse } from '@supabase/supabase-js'
import { type NextRequest, NextResponse } from 'next/server'

import { HttpStatus } from '@/shared/enums/http-status.enum'
import { register } from '@/shared/lib/supabase/services/auth.service'
import { type TApiResponse } from '@/shared/types'
import rateLimit from '@/shared/utils/rate-limit.util'

/**
 * Limit max 10 requests per minute
 */
const limiter = rateLimit({
  interval: 60 * 1000,
  uniqueTokenPerInterval: 500
})

export const POST = async (req: NextRequest) => {
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

  const { email, username, password } = await req.json()

  if (!email || !password || !username) {
    response = {
      status: HttpStatus.UNPROCESSABLE_ENTITY,
      message: 'Email or password or username is missing',
      data: null
    }

    return NextResponse.json(response, { status: response.status })
  }

  const { data, error }: AuthResponse = await register(email, username, password)

  if (error) {
    Sentry.captureMessage(error.message ?? 'Failed to register')
    response = {
      status: error.status ?? HttpStatus.UNAUTHORIZED,
      message: error.message,
      data: null
    }

    return NextResponse.json(response, { status: response.status })
  }

  response = {
    status: HttpStatus.OK,
    message: 'Registration successfully',
    data: data.user
  }

  return NextResponse.json(response, { status: response.status })
}
