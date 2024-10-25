import * as Sentry from '@sentry/nextjs'
import { type AuthTokenResponsePassword } from '@supabase/supabase-js'
import { type NextRequest, NextResponse } from 'next/server'

import { HttpStatus } from '@/shared/enums'
import { login } from '@/shared/lib/supabase/services/auth.service'
import { type TApiResponse } from '@/shared/types'
import { cookieStoreServer } from '@/shared/utils/cookies/server.util'
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

  const { email, password } = await req.json()

  if (!email || !password) {
    response = {
      status: HttpStatus.BAD_REQUEST,
      message: 'Email or password is missing',
      data: null
    }

    return NextResponse.json(response, { status: HttpStatus.BAD_REQUEST })
  }

  const { data, error }: AuthTokenResponsePassword = await login(email, password)

  if (error) {
    Sentry.captureMessage(error.message ?? 'Failed to login')
    response = {
      status: error.status ?? HttpStatus.UNAUTHORIZED,
      message: error.message,
      data: null
    }

    return NextResponse.json(response, { status: response.status })
  }

  cookieStoreServer.set('isLoggedIn', 'true')
  cookieStoreServer.set('accessToken', data.session.access_token)
  cookieStoreServer.set('refreshToken', data.session.refresh_token)
  cookieStoreServer.set('user', JSON.stringify(data.user))

  response = {
    status: HttpStatus.OK,
    message: 'Login successfully',
    data: data.user
  }

  return NextResponse.json(response, { status: HttpStatus.OK })
}
