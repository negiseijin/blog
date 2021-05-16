import Category from './category'

type PostType = {
  id: string
  title: string
  category: Category[]
  date: string
  coverImage: string
  description: string
  ogImage: {
    url: string
  }
  body: string
}

export default PostType
