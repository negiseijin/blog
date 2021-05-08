import Author from './author'
import Category from './category'
import Image from './image'

type Contents = {
  id: string
  title: string
  category: Category[]
  date: string
  coverImage: Image
  author: Author
  createdAt: string
  description: string
  ogImage: Image
  content: string
  publishedAt: string
  revisedAt: string
  updatedAt: string
}

export default Contents
