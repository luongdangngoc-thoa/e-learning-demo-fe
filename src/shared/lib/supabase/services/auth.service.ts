import {
  type AuthError,
  type AuthResponse,
  type AuthTokenResponsePassword,
  type Session,
  type User
} from '@supabase/supabase-js'

import supabaseServiceInstance from '../client'

/**
 * Login user with email and password
 * @param email
 * @param password
 * @returns
 */
export const login = async (email: string, password: string): Promise<AuthTokenResponsePassword> => {
  const supabaseClient = supabaseServiceInstance.getClient()

  const { data, error }: AuthTokenResponsePassword = await supabaseClient.auth.signInWithPassword({
    email,
    password
  })

  return { data, error } as AuthTokenResponsePassword
}

/**
 * Regiter user with email and password
 * @param email
 * @param password
 * @param username
 * @returns
 */
export const register = async (email: string, username: string, password: string): Promise<AuthResponse> => {
  const supabaseClient = supabaseServiceInstance.getClient()

  const { data, error } = await supabaseClient.auth.signUp({
    email,
    password,
    options: {
      data: { username }
    }
  })

  if (error) {
    return {
      data: {
        user: null,
        session: null
      },
      error: {
        message: error.message
      } as AuthError
    } as AuthResponse
  }

  return {
    data: {
      user: data.user as User,
      session: data.session as Session
    },
    error: null
  } as AuthResponse
}
