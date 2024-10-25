import Cookies from 'js-cookie'

interface ICookieStoreClient {
  get: (key: string) => string | undefined
  set: (key: string, value: string, options?: Cookies.CookieAttributes) => void
  remove: (key: string) => void
}

/**
 * A utility for handling cookies in client.
 */
export const cookieStoreClient: ICookieStoreClient = {
  get: (key: string): string | undefined => Cookies.get(key),
  set: (key: string, value: string, options?: Cookies.CookieAttributes) => {
    Cookies.set(key, value, { secure: process.env.NODE_ENV !== 'development', path: '/', sameSite: 'lax', ...options })
  },
  remove: (key: string) => {
    Cookies.remove(key, { path: '/' })
  }
}
