import { type SupabaseQueryResponse } from '@/shared/types'

import supabaseServiceInstance from '../client'

/**
 * Get all courses
 * @param from
 * @param to
 * @returns SupabaseQueryResponse
 */
export const getAllCourses = async (from: number, to: number): Promise<SupabaseQueryResponse> => {
  const supabaseClient = supabaseServiceInstance.getClient()

  const { data, count, error } = await supabaseClient
    .from('courses')
    .select('*, categories (id, title)', { count: 'exact' })
    .range(from, to)

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
 * Get course by ID
 * @param id
 * @returns SupabaseQueryResponse
 */
export const getCourseById = async (id: number): Promise<SupabaseQueryResponse> => {
  const supabaseClient = supabaseServiceInstance.getClient()

  const { data, error } = await supabaseClient
    .from('courses')
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
