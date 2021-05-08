import { BLOG_END_POINT } from '@/lib/constants'
import Contents from '@/types/contents'
import Data from '@/types/data'
import Post from '@/types/post'

import { NextApiRequest, NextApiResponse } from 'next'

const handler = async (
  _req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  try {
    const key = {
      headers: { 'X-API-KEY': process.env.API_KEY },
    }
    const data: Data = await fetch(BLOG_END_POINT, key)
      .then((res) => res.json())
      .catch((error) => console.error(error))

    if (!data) {
      return res.status(401).json({ message: 'Invalid slug' })
    }

    // コンテンツを取得
    const contents: Contents[] = data.contents

    // 投稿を取得
    const posts = contents.map((content) => {
      const post: Post = {
        id: content.id,
        title: content.title,
        date: content.publishedAt,
        coverImage: content.coverImage.url,
        description: content.description,
        author: content.author,
        ogImage: {
          url: content.ogImage.url,
        },
        content: content.content,
      }

      return post
    })

    res.status(200).json(posts)
  } catch (error) {
    res.status(500).json({ statusCode: 500, message: error.message })
  }
}

export default handler
