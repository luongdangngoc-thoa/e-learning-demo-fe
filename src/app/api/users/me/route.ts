import { type NextRequest, NextResponse } from 'next/server'

import { HttpStatus } from '@/shared/enums'
import { getUserInfo } from '@/shared/lib/supabase/services/user.service'
import { type TApiResponse } from '@/shared/types'

export const GET = async (req: NextRequest) => {
  let response: TApiResponse

  const authorizationHeader = req.headers.get('authorization')

  // Check if the authorization header is present and starts with 'Bearer'
  if (!authorizationHeader || !authorizationHeader.startsWith('Bearer ')) {
    response = {
      status: HttpStatus.BAD_REQUEST,
      message: 'Access token not found',
      data: null
    }
  } else {
    const accessToken = authorizationHeader.split(' ')[1]

    const { data, error } = await getUserInfo(accessToken)

    if (error) {
      response = {
        status: error.status ?? HttpStatus.INTERNAL_SERVER_ERROR,
        message: error.message ?? 'Failed to get user information',
        data: null
      }
    }

    response = {
      status: HttpStatus.OK,
      message: 'Get user by ID successfully',
      data
    }
  }

  return NextResponse.json(response, { status: response.status })
}
