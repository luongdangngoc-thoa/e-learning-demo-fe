import { type UploadApiResponse } from 'cloudinary'
import * as fs from 'fs'
import * as fsPromises from 'fs/promises'
import { testApiHandler } from 'next-test-api-route-handler'

import * as appHandler from '@/app/api/upload/route'

import { cloudinaryUploadResponseSuccessMock } from './dump-data'

let mockRateLimit = false
let mockCloudinaryUploadResponse: UploadApiResponse | null = null
let mockStat: any | null = null
let mockMkdir: any | null = null
let mockRm: any | null = null
const mockFormData = new FormData()

jest.mock('cloudinary', () => ({
  v2: {
    uploader: {
      upload: jest.fn(() => mockCloudinaryUploadResponse)
    },
    config: jest.fn()
  }
}))
jest.mock('fs', () => ({
  rm: jest.fn(() => mockRm)
}))
jest.mock('fs/promises', () => ({
  writeFile: jest.fn(),
  stat: jest.fn(() => mockStat),
  mkdir: jest.fn()
}))
jest.mock('date-fns', () => ({
  format: jest.fn(() => '07-23-2024')
}))
jest.mock('@/shared/utils/rate-limit.util', () => ({
  __esModule: true,
  default: jest.fn(() => ({
    check: jest.fn(() => mockRateLimit)
  }))
}))

describe('File Upload API', () => {
  afterEach(() => {
    mockCloudinaryUploadResponse = null
    mockRateLimit = false
    mockStat = null
    mockRm = null
    jest.clearAllMocks()
  })

  it('returns 429 when rate limit is exceeded', async () => {
    mockRateLimit = true

    await testApiHandler({
      appHandler,
      async test({ fetch }) {
        const res = await fetch({
          method: 'POST',
          body: mockFormData
        })

        expect(res.status).toBe(429)
      }
    })
  })

  it('returns 400 if no file is provided', async () => {
    await testApiHandler({
      appHandler,
      test: async ({ fetch }) => {
        const res = await fetch({
          method: 'POST',
          body: mockFormData
        })

        expect(res.status).toBe(400)
        const json = await res.json()
        expect(json.message).toBe('File blob is required.')
      }
    })
  })

  it('returns 200 and uploads the file successfully', async () => {
    const formData = new FormData()
    const file = new File(['file content'], 'test.png', { type: 'image/png' })
    formData.append('file', file)

    mockCloudinaryUploadResponse = cloudinaryUploadResponseSuccessMock

    await testApiHandler({
      appHandler,
      test: async ({ fetch }) => {
        const res = await fetch({
          method: 'POST',
          body: formData
        })

        expect(res.status).toBe(200)
        const json = await res.json()
        expect(json.message).toBe('Upload success')
        expect(json.data.url).toBe('http://example.com/test.png')
      }
    })
  })

  it('should call mkdir when stat throws an error', async () => {
    // Arrange
    const formData = new FormData()
    const file = new File(['file content'], 'test.png', { type: 'image/png' })
    formData.append('file', file)

    mockStat = fsPromises.stat as jest.Mock
    mockMkdir = fsPromises.mkdir as jest.Mock

    mockStat.mockImplementationOnce(() => {
      throw new Error('Stat Error')
    })
    mockMkdir.mockResolvedValueOnce()

    await testApiHandler({
      appHandler,
      test: async ({ fetch }) => {
        // Act
        const res = await fetch({
          method: 'POST',
          body: formData
        })

        // Assert
        expect(fsPromises.stat).toHaveBeenCalled()
        expect(fsPromises.mkdir).toHaveBeenCalled()
        expect(res.status).toBe(200) // Assuming success for the rest of the upload process
      }
    })
  })

  it('should log an error if rm fails', async () => {
    const formData = new FormData()
    const file = new File(['file content'], 'test.png', { type: 'image/png' })
    formData.append('file', file)

    const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {})

    // Mock rm to call the callback with an error
    mockRm = fs.rm as unknown as jest.Mock
    mockRm.mockImplementationOnce((path: fs.PathLike, options: fs.RmOptions, callback: fs.NoParamCallback) => {
      callback(new Error('Failed to remove directory'))
    })

    await testApiHandler({
      appHandler,
      test: async ({ fetch }) => {
        const res = await fetch({
          method: 'POST',
          body: formData
        })

        expect(res.status).toBe(200)
        expect(mockRm).toHaveBeenCalledWith(expect.any(String), { recursive: true }, expect.any(Function))
        expect(consoleErrorSpy).toHaveBeenCalledWith('Failed to remove file', expect.any(Error))

        consoleErrorSpy.mockRestore()
      }
    })
  })
})
