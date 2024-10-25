import { type SupabaseQueryResponse } from '@/shared/types'

import supabaseServiceInstance from '../client'

/**
 * Get all blogs
 * @param from - start index for pagination
 * @param to - end index for pagination
 * @param categoryId - optional category ID filter
 * @returns SupabaseQueryResponse
 */
export const getAllBlog = async (
  from: number,
  to: number,
  categoryId: string | null
): Promise<SupabaseQueryResponse> => {
  const supabaseClient = supabaseServiceInstance.getClient()
  let query = supabaseClient.from('blogs').select('*, categories (id, title)', { count: 'exact' })

  if (categoryId !== null) {
    query = query.eq('category_id', +categoryId)
  }

  const { data, count, error } = await query.range(from, to)

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

/**
 * Get blogs by ID
 * @param id
 * @returns SupabaseQueryResponse
 */
export const getBlogById = async (id: number): Promise<SupabaseQueryResponse> => {
  const supabaseClient = supabaseServiceInstance.getClient()

  const { data, error } = await supabaseClient
    .from('blogs')
    .select('*, categories (id, title), users (name, avatar)')
    .eq('id', id)
    .single()

  if (error) {
    return {
      data: null,
      error
    } as SupabaseQueryResponse
  }

  return {
    data,
    error: null
  } as SupabaseQueryResponse
}
