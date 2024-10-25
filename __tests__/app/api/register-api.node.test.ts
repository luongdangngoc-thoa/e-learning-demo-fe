import { type AuthResponse } from '@supabase/supabase-js'
import { testApiHandler } from 'next-test-api-route-handler'

import * as appHandler from '@/app/api/auth/register/route'

import { signUpFailedDataMock, signUpFailedWithoutStatusDataMock, signUpSuccessDataMock } from './dump-data'

let mockedRegisterData: AuthResponse | null = null
let mockedRateLimit = false

jest.mock('@/shared/lib/supabase/services/auth.service', () => ({
  register: jest.fn(() => Promise.resolve(mockedRegisterData))
}))

jest.mock('@/shared/utils/rate-limit.util', () => ({
  __esModule: true,
  default: jest.fn(() => ({
    check: jest.fn(() => mockedRateLimit)
  }))
}))

afterEach(() => {
  mockedRegisterData = null
  mockedRateLimit = false
  jest.clearAllMocks()
})

describe('register-api', () => {
  it('returns 429 when rate limit is exceeded', async () => {
    const data = {
      email: 'user@gmail.com',
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

  it('returns 200 when user sign up successfully', async () => {
    const data = {
      email: 'user@gmail.com',
      username: 'khoadev',
      password: "R[FZskb!;bS'fSfhdaFC"
    }

    mockedRegisterData = signUpSuccessDataMock

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

  it('returns 422 when email is missing', async () => {
    const data = {
      username: 'khoadev',
      password: "R[FZskb!;bS'fSfhdFAC"
    }

    await testApiHandler({
      appHandler,
      async test({ fetch }) {
        const res = await fetch({
          method: 'POST',
          body: JSON.stringify(data)
        })

        expect(res.status).toBe(422)
      }
    })
  })

  it('returns 422 when username is missing', async () => {
    const data = {
      email: 'khoadev@gmail.com',
      password: "R[FZskb!;bS'fSfhdFAC"
    }

    await testApiHandler({
      appHandler,
      async test({ fetch }) {
        const res = await fetch({
          method: 'POST',
          body: JSON.stringify(data)
        })

        expect(res.status).toBe(422)
      }
    })
  })

  it('returns 422 when password is missing', async () => {
    const data = {
      email: 'khoadev@gmail.com',
      username: 'khoadev'
    }

    await testApiHandler({
      appHandler,
      async test({ fetch }) {
        const res = await fetch({
          method: 'POST',
          body: JSON.stringify(data)
        })

        expect(res.status).toBe(422)
      }
    })
  })

  it('returns error status when user sign up failed and Supabase throw error has status', async () => {
    const data = {
      email: 'user@gmail.com',
      username: 'khoadev',
      password: "R[FZskb!;bS'fSfhdaFC"
    }

    mockedRegisterData = signUpFailedDataMock

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

  it('returns 401 when user sign up failed and Supabase throw error has not status', async () => {
    const data = {
      email: 'user@gmail.com',
      username: 'khoadev',
      password: "R[FZskb!;bS'fSfhdaFC"
    }

    mockedRegisterData = signUpFailedWithoutStatusDataMock

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
})
