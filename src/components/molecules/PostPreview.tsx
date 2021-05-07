import { Avatar } from '@/components/atoms/Avatar'
import { DateFormatter } from '@/components/atoms/DateFormatter'
import Author from '@/types/author'

import Link from 'next/link'
import React from 'react'

type Props = {
  title: string
  coverImage: string
  date: string
  excerpt: string
  author: Author
  slug: string
}

export const PostPreview: React.VFC<Props> = React.memo(
  ({ title, coverImage, date, excerpt, author, slug }) => {
    return (
      <div className="w-full px-4">
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a className="hover:underline">
            <div className="relative flex h-96 mb-8 overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src={coverImage}
                alt={title}
              />
            </div>
            <h2 className="mb-4 text-2xl font-semibold font-heading text-blue-800">
              {title}
            </h2>
            <div className="mb-4">
              <DateFormatter dateString={date} />
            </div>
            <Avatar name={author.name} picture={author.picture} />
            <p className="my-3 text-base text-gray-500 leading-loose">
              {excerpt}
            </p>
          </a>
        </Link>
      </div>
    )
  }
)
