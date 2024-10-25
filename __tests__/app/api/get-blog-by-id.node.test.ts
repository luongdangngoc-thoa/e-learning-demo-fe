import { testApiHandler } from 'next-test-api-route-handler' // ◄ Must be first import

import * as appHandler from '@/app/api/blogs/[id]/route'

import { mockBlogDataError, mockBlogDataSuccess } from './dump/blog_data'

let mockedRateLimit = false
let mockBlogData: any | null = null
let mockSentryCaptureMessage: string | null = ''

jest.mock('@/shared/lib/supabase/services/blog.service', () => ({
  getBlogById: jest.fn(() => mockBlogData)
}))

jest.mock('@/shared/utils/rate-limit.util', () => ({
  __esModule: true,
  default: jest.fn(() => ({
    check: jest.fn(() => mockedRateLimit)
  }))
}))

jest.mock('@sentry/nextjs', () => ({
  captureMessage: jest.fn(() => mockSentryCaptureMessage)
}))

afterEach(() => {
  mockBlogData = false
  mockedRateLimit = false
  mockSentryCaptureMessage = ''
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
    mockBlogData = mockBlogDataSuccess
    await testApiHandler({
      appHandler,
      params: { id: '1' },
      url: '/api/blogs/1',
      async test({ fetch }) {
        const res = await fetch({
          method: 'GET'
        })

        const jsonResponse = await res.json()

        expect(res.status).toBe(200)
        expect(jsonResponse.data).toEqual(mockBlogDataSuccess.data)
      }
    })
  })

  it('returns 500 when can not get the Blog data', async () => {
    mockBlogData = mockBlogDataError
    mockSentryCaptureMessage = mockBlogDataError.error.message
    await testApiHandler({
      appHandler,
      params: { id: '1' },
      url: '/api/blogs/1',
      async test({ fetch }) {
        const res = await fetch({
          method: 'GET'
        })

        const jsonResponse = await res.json()

        expect(res.status).toBe(500)
        expect(jsonResponse.data).toEqual(null)
      }
    })
  })
})
