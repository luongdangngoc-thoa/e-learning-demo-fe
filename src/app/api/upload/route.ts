import { v2 as cloudinary } from 'cloudinary'
import * as dateFn from 'date-fns'
import { rm } from 'fs'
import { mkdir, stat, writeFile } from 'fs/promises'
import { type NextRequest, NextResponse } from 'next/server'
import { extname, join } from 'path'

import { HttpStatus } from '@/shared/enums'
import { type IUploadApiErrorResponse, type IUploadApiResponse, type TApiResponse } from '@/shared/types'
import rateLimit from '@/shared/utils/rate-limit.util'

const limiter = rateLimit({
  interval: 60 * 1000,
  uniqueTokenPerInterval: 500
})

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
})

export const POST = async (req: NextRequest) => {
  let response: TApiResponse

  const rateLimitCheck = limiter.check(10, 'CACHE_TOKEN')
  if (rateLimitCheck) {
    response = {
      status: HttpStatus.TOO_MANY_REQUEST,
      message: 'Too many requests',
      data: null
    }

    return NextResponse.json(response, { status: HttpStatus.TOO_MANY_REQUEST })
  }

  const formData = await req.formData()
  const file = formData.get('file') as File | null
  if (!file) {
    response = {
      status: HttpStatus.BAD_REQUEST,
      message: 'File blob is required.',
      data: null
    }
    return NextResponse.json(response, { status: 400 })
  }

  const buffer = Buffer.from(await file.arrayBuffer())
  const pathDist: string = join(process.cwd(), '/public/uploads')
  const relativeUploadDir = dateFn.format(Date.now(), 'dd-MM-yyyy')
  const uploadDir = join(pathDist, relativeUploadDir)

  // Create upload directory if not exists
  try {
    await stat(uploadDir)
  } catch (error) {
    await mkdir(uploadDir, { recursive: true })
  }

  const ext = extname(file.name)
  const filename = `${file.name}${ext}`
  const filePath = join(uploadDir, filename)

  try {
    await writeFile(filePath, buffer)

    const cloudinaryUploadResponse = await cloudinary.uploader.upload(filePath, {
      folder: process.env.CLOUDINARY_STORAGE_FOLDER
    })

    // Remove temp file after upload to cloudinary
    rm(pathDist, { recursive: true }, (err) => {
      if (err) {
        console.error('Failed to remove file', err)
      }
    })

    response = {
      status: HttpStatus.OK,
      message: 'Upload success',
      data: {
        url: cloudinaryUploadResponse.secure_url
      } as IUploadApiResponse
    }

    return NextResponse.json(response, { status: response.status })
  } catch (error: unknown) {
    const errorParsed = error as IUploadApiErrorResponse
    response = {
      status: errorParsed.http_code,
      message: errorParsed.message,
      data: null
    }

    return NextResponse.json(response, { status: response.status })
  }
}
