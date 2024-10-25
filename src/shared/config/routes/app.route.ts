import { normalizeRoutes } from '@/shared/utils/common.util'

export const APP_URL = {
  AUTH: '/auth',

  PRIVATE: {
    CHECKOUT: '/checkout',
    PROFILE: '/profile'
  }
}

export const PRIVATE_ROUTES: string[] = normalizeRoutes(Object.values(APP_URL.PRIVATE))
export const AUTH_ROUTES: string[] = normalizeRoutes([APP_URL.AUTH])
