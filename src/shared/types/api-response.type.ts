import { type TPagination } from './pagination.type'

export interface TApiResponse {
  status: number
  message: string
  data: any
  pagination?: TPagination
}
