import Author from './author'
import Category from './category'

type PostType = {
  id: string
  title: string
  category: Category[]
  date: string
  coverImage: string
  description: string
  author: Author
  ogImage: {
    url: string
  }
  content: string
}

export default PostType
