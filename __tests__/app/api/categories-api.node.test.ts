import { testApiHandler } from 'next-test-api-route-handler' // ◄ Must be first import

import * as appHandler from '@/app/api/categories/route'

import {
  mockCategoriesDataError,
  mockCategoriesDataSuccess,
  mockCategoriesErrorDataWithoutMessage
} from './dump/categories_data'

let mockedRateLimit = false
let mockCategoriesData: any | null = null

jest.mock('@/shared/lib/supabase/services/category.service', () => ({
  getAllCategories: jest.fn(() => mockCategoriesData)
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
  mockCategoriesData = false
  mockedRateLimit = false
  jest.clearAllMocks()
})

describe('categories-api', () => {
  it('returns 429 when rate limit is exceeded', async () => {
    mockedRateLimit = true

    await testApiHandler({
      appHandler,
      async test({ fetch }) {
        const res = await fetch({
          method: 'GET'
        })

        expect(res.status).toBe(429)
      }
    })
  })

  it('returns 200 and categories data on success', async () => {
    mockCategoriesData = mockCategoriesDataSuccess
    await testApiHandler({
      appHandler,
      async test({ fetch }) {
        const res = await fetch({
          method: 'GET'
        })

        expect(res.status).toBe(200)
      }
    })
  })

  it('returns error when can not get the categories data', async () => {
    mockCategoriesData = mockCategoriesDataError
    await testApiHandler({
      appHandler,
      async test({ fetch }) {
        const res = await fetch({
          method: 'GET'
        })

        expect(res.status).toBe(500)
      }
    })
  })

  it('returns default message when can not get categories data and Supabase does not return a status', async () => {
    mockCategoriesData = mockCategoriesErrorDataWithoutMessage

    await testApiHandler({
      appHandler,
      async test({ fetch }) {
        const res = await fetch({
          method: 'GET'
        })

        const jsonResponse = await res.json()
        expect(jsonResponse.message).toBe('Failed to get categories')
      }
    })
  })
})
