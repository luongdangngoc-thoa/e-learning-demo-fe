import { type StaticImageData } from 'next/image'

export interface ICategory {
  id: number
  title: string
  logo: string | StaticImageData
  description?: string
  createdAt?: string | null
  updatedAt?: string | null
}
