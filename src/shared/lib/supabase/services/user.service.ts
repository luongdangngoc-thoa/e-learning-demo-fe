import { type SupabaseQueryResponse } from '@/shared/types'

import supabaseServiceInstance from '../client'

/**
 * Get user information by access token
 * @param accessToken
 * @returns SupabaseQueryResponse
 */
export const getUserInfo = async (accessToken: string): Promise<SupabaseQueryResponse> => {
  const supabaseClient = supabaseServiceInstance.getClient()

  const {
    data: { user },
    error
  } = await supabaseClient.auth.getUser(accessToken)

  if (error) {
    return {
      data: null,
      error
    } as SupabaseQueryResponse
  }

  return {
    data: user,
    error: null
  } as SupabaseQueryResponse
}
