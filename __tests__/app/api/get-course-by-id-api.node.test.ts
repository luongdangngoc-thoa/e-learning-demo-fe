import { testApiHandler } from 'next-test-api-route-handler' // ◄ Must be first import

import * as appHandler from '@/app/api/courses/[id]/route'

import { mockCourseDataError, mockCourseDataSuccess } from './dump/course_data'

let mockedRateLimit = false
let mockCoursesData: any | null = null
let mockSentryCaptureMessage: string | null = ''

jest.mock('@/shared/lib/supabase/services/course.service', () => ({
  getCourseById: jest.fn(() => mockCoursesData)
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
  mockCoursesData = false
  mockedRateLimit = false
  mockSentryCaptureMessage = ''
  jest.clearAllMocks()
})

describe('course-api', () => {
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

  it('returns 200 and Course data on success', async () => {
    mockCoursesData = mockCourseDataSuccess
    await testApiHandler({
      appHandler,
      params: { id: '1' },
      url: '/api/courses/1',
      async test({ fetch }) {
        const res = await fetch({
          method: 'GET'
        })

        const jsonResponse = await res.json()

        expect(res.status).toBe(200)
        expect(jsonResponse.data).toEqual(mockCourseDataSuccess.data)
      }
    })
  })

  it('returns 500 when can not get the Course data', async () => {
    mockCoursesData = mockCourseDataError
    mockSentryCaptureMessage = mockCourseDataError.error.message
    await testApiHandler({
      appHandler,
      params: { id: '1' },
      url: '/api/courses/1',
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
