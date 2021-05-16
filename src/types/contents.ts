import Category from './category'
import Image from './image'

type Contents = {
  id: string
  title: string
  category: Category[]
  date: string
  coverImage: Image
  createdAt: string
  description: string
  ogImage: Image
  body: string
  publishedAt: string
  revisedAt: string
  updatedAt: string
}

export default Contents
