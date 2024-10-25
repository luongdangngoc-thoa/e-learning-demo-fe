import { type NextRequest, NextResponse } from 'next/server'

import { AUTH_ROUTES, PRIVATE_ROUTES } from './shared/config/routes/app.route'

const allowedOrigin = [process.env.NEXT_PUBLIC_ORIGIN_URL]

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const requestHeaders = new Headers(request.headers)
  const origin = requestHeaders.get('origin') ?? ''

  if (request.method === 'OPTIONS') {
    const response = new NextResponse(null, { status: 204 })
    response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
    response.headers.set(
      'Access-Control-Allow-Headers',
      'Content-Type, Authorization, X-Requested-With, Access-Control-Allow-Origin'
    )
    response.headers.set('Access-Control-Allow-Credentials', 'true')
    if (origin && allowedOrigin.includes(origin)) {
      response.headers.set('Access-Control-Allow-Origin', origin)
    }
    return response
  }

  const response = NextResponse.next({
    request: {
      headers: requestHeaders
    }
  })

  if (origin && allowedOrigin.includes(origin)) {
    response.headers.set('Access-Control-Allow-Origin', origin)
    response.headers.set('Access-Control-Allow-Credentials', 'true')
    response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
  }

  const accessToken = request.cookies.get('accessToken')

  if (!accessToken && PRIVATE_ROUTES.some((path) => pathname.startsWith(path))) {
    return NextResponse.redirect(new URL('/auth', request.url))
  }

  if (accessToken && AUTH_ROUTES.some((path) => pathname.startsWith(path))) {
    return NextResponse.redirect(new URL('/', request.url))
  }

  return response
}

export const config = {
  matcher: ['/((?!.+.[w]+$|_next|api).)', '/(trpc)(.)', '/api/(.*)']
}
