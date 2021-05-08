import Author from './author'

type PostType = {
  id: string
  title: string
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
