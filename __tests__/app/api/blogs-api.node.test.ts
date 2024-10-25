import { testApiHandler } from 'next-test-api-route-handler' // ◄ Must be first import

import * as appHandler from '@/app/api/blogs/route'

import { mockListBlogDataError, mockListBlogDataSuccess, mockListBlogErrorDataWithoutMessage } from './dump/blog_data'

let mockedRateLimit = false
let mockBlogData: any | null = null

jest.mock('@/shared/lib/supabase/services/blog.service', () => ({
  getAllBlog: jest.fn(() => mockBlogData)
}))

jest.mock('@/shared/utils/rate-limit.util', () => ({
  __esModule: true,
  default: jest.fn(() => ({
    check: jest.fn(() => mockedRateLimit)
  }))
}))

afterEach(() => {
  mockBlogData = false
  mockedRateLimit = false
  jest.clearAllMocks()
})

describe('blog-api', () => {
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

  it('returns 200 and Blog data on success', async () => {
    mockBlogData = mockListBlogDataSuccess
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

  it('returns error when can not get the Blog data', async () => {
    mockBlogData = mockListBlogDataError
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

  it('returns default message when can not get Blog data and Supabase does not return a status', async () => {
    mockBlogData = mockListBlogErrorDataWithoutMessage

    await testApiHandler({
      appHandler,
      async test({ fetch }) {
        const res = await fetch({
          method: 'GET'
        })

        const jsonResponse = await res.json()
        expect(jsonResponse.message).toBe('Failed to get blogs')
      }
    })
  })
})
