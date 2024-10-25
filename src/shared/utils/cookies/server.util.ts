import { type RequestCookie, type ResponseCookie } from 'next/dist/compiled/@edge-runtime/cookies'
import { cookies } from 'next/headers'

interface ICookieStoreServer {
  get: (key: string) => RequestCookie | undefined
  set: (key: string, value: string, options?: ResponseCookie) => void
  remove: (key: string) => void
}

/**
 * A utility for handling cookies in server.
 *
 * @see https://nextjs.org/docs/app/api-reference/functions/cookies
 */
export const cookieStoreServer: ICookieStoreServer = {
  get: (key: string) => cookies().get(key),
  set: (key: string, value: string, options?: ResponseCookie) => {
    cookies().set({ name: key, value, ...options })
  },
  remove: (key: string) => {
    cookies().delete(key)
  }
}
