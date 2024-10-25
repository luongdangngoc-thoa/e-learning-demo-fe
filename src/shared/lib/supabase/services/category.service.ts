import { type SupabaseQueryResponse } from '@/shared/types'

import supabaseServiceInstance from '../client'

const supabaseClient = supabaseServiceInstance.getClient()

/**
 * Get all categories from the database
 * @param from
 * @param to
 * @returns SupabaseQueryResponse
 */
export const getAllCategories = async (from: number, to: number): Promise<SupabaseQueryResponse> => {
  // Perform the query using the Supabase client
  const { data, error, count } = await supabaseClient.from('categories').select('*', { count: 'exact' }).range(from, to)

  if (error) {
    return {
      data: null,
      totalItems: 0,
      error
    } as SupabaseQueryResponse
  }

  return {
    data,
    totalItems: count,
    error: null
  } as SupabaseQueryResponse
}
