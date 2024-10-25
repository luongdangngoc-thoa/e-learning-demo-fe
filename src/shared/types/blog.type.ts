import { type ICategory } from './category.type'

export interface IBlog {
  id: number
  userId: string
  categoryId: number
  logo: string
  title: string
  description: string
  content: string
  view: number
  tags: string | null
  createdAt: string
  updatedAt: string | null
  categories: ICategory
}
