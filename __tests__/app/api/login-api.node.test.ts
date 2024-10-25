import { type AuthTokenResponsePassword } from '@supabase/supabase-js'
import { testApiHandler } from 'next-test-api-route-handler' // ◄ Must be first import

import * as appHandler from '@/app/api/auth/login/route'
import { cookieStoreServer } from '@/shared/utils/cookies/server.util'

import { loginDataErrorMock, loginDataErrorWithoutStatusMock, loginDataSuccessMock } from './dump-data'

let mockedLoginData: AuthTokenResponsePassword | null = null
let mockedRateLimit = false

jest.mock('@/shared/lib/supabase/services/auth.service', () => ({
  login: jest.fn(() => Promise.resolve(mockedLoginData))
}))

jest.mock('@/shared/utils/cookies/server.util', () => ({
  cookieStoreServer: {
    set: jest.fn()
  }
}))

jest.mock('@/shared/utils/rate-limit.util', () => ({
  __esModule: true,
  default: jest.fn(() => ({
    check: jest.fn(() => mockedRateLimit)
  }))
}))

afterEach(() => {
  mockedLoginData = null
  mockedRateLimit = false
  jest.clearAllMocks()
})

describe('login-api', () => {
  it('returns 429 when rate limit is exceeded', async () => {
    const data = {
      email: 'admin@gmail.com',
      password: "R[FZskb!;bS'fSfhd$.g"
    }

    mockedRateLimit = true

    await testApiHandler({
      appHandler,
      async test({ fetch }) {
        const res = await fetch({
          method: 'POST',
          body: JSON.stringify(data)
        })

        expect(res.status).toBe(429)
      }
    })
  })

  it('returns 200 when user logs in', async () => {
    const data = {
      email: 'admin@gmail.com',
      password: "R[FZskb!;bS'fSfhd$.g"
    }

    mockedLoginData = loginDataSuccessMock

    await testApiHandler({
      appHandler,
      async test({ fetch }) {
        const res = await fetch({
          method: 'POST',
          body: JSON.stringify(data)
        })

        expect(res.status).toBe(200)
      }
    })
  })

  it('returns 400 when user logs in with invalid credentials', async () => {
    const data = {
      email: 'admin@gmail.com',
      password: "R[FZskb!;bS'fSfhd$.g"
    }

    mockedLoginData = loginDataErrorMock

    await testApiHandler({
      appHandler,
      async test({ fetch }) {
        const res = await fetch({
          method: 'POST',
          body: JSON.stringify(data)
        })

        expect(res.status).toBe(400)
      }
    })
  })

  it('returns 401 when user logs in fail & Supbase not return status', async () => {
    const data = {
      email: 'admin@gmail.com',
      password: "R[FZskb!;bS'fSfhd$.g"
    }

    mockedLoginData = loginDataErrorWithoutStatusMock

    await testApiHandler({
      appHandler,
      async test({ fetch }) {
        const res = await fetch({
          method: 'POST',
          body: JSON.stringify(data)
        })

        expect(res.status).toBe(401)
      }
    })
  })

  it('returns 400 when email is missing', async () => {
    const data = {
      password: "R[FZskb!;bS'fSfhd$.g"
    }

    await testApiHandler({
      appHandler,
      async test({ fetch }) {
        const res = await fetch({
          method: 'POST',
          body: JSON.stringify(data)
        })

        expect(res.status).toBe(400)
      }
    })
  })

  it('returns 400 when password is missing', async () => {
    const data = {
      email: 'admin@gmail.com'
    }

    await testApiHandler({
      appHandler,
      async test({ fetch }) {
        const res = await fetch({
          method: 'POST',
          body: JSON.stringify(data)
        })

        expect(res.status).toBe(400)
      }
    })
  })

  it('sets isLoggedIn cookie correctly', async () => {
    const data = {
      email: 'admin@gmail.com',
      password: "R[FZskb!;bS'fSfhd$.g"
    }

    mockedLoginData = loginDataSuccessMock

    await testApiHandler({
      appHandler,
      async test({ fetch }) {
        const res = await fetch({
          method: 'POST',
          body: JSON.stringify(data)
        })
        expect(res.status).toBe(200)
        expect(cookieStoreServer.set).toHaveBeenCalledWith('isLoggedIn', 'true')
      }
    })
  })

  it('sets accessToken cookie from session', async () => {
    const data = {
      email: 'admin@gmail.com',
      password: "R[FZskb!;bS'fSfhd$.g"
    }

    mockedLoginData = loginDataSuccessMock

    await testApiHandler({
      appHandler,
      async test({ fetch }) {
        const res = await fetch({
          method: 'POST',
          body: JSON.stringify(data)
        })
        expect(res.status).toBe(200)
        expect(cookieStoreServer.set).toHaveBeenCalledWith('accessToken', 'some-access-token')
      }
    })
  })

  it('sets refreshToken cookie from session', async () => {
    const data = {
      email: 'admin@gmail.com',
      password: "R[FZskb!;bS'fSfhd$.g"
    }

    mockedLoginData = loginDataSuccessMock

    await testApiHandler({
      appHandler,
      async test({ fetch }) {
        const res = await fetch({
          method: 'POST',
          body: JSON.stringify(data)
        })
        expect(res.status).toBe(200)
        expect(cookieStoreServer.set).toHaveBeenCalledWith('refreshToken', 'some-refresh-token')
      }
    })
  })

  it('sets user cookie correctly', async () => {
    const data = {
      email: 'admin@gmail.com',
      password: "R[FZskb!;bS'fSfhd$.g"
    }

    mockedLoginData = loginDataSuccessMock

    await testApiHandler({
      appHandler,
      async test({ fetch }) {
        const res = await fetch({
          method: 'POST',
          body: JSON.stringify(data)
        })
        expect(res.status).toBe(200)
        expect(cookieStoreServer.set).toHaveBeenCalledWith('user', JSON.stringify(mockedLoginData?.data?.user))
      }
    })
  })
})
