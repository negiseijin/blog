import Link from 'next/link'
import React from 'react'
import { Avatar } from '@/components/atoms/Avatar'
import { DateFormatter } from '@/components/atoms/DateFormatter'
import Post from '@/types/post'

type Props = {
  post: Post
}

export const PostPreview: React.VFC<Props> = React.memo(({ post }) => {
  return (
    <div className="w-full px-4">
      <Link as={`/blog/${post.id}`} href="/blog/[id]">
        <a className="hover:underline">
          <div className="relative flex h-96 mb-8 overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src={post.coverImage}
              alt={post.title}
            />
          </div>
          <h2 className="mb-4 text-2xl font-semibold font-heading text-blue-800">
            {post.title}
          </h2>
          <div className="mb-4">
            <DateFormatter dateString={post.date} />
          </div>
          <Avatar name={post.author.name} picture={post.author.image.url} />
          <p className="my-3 text-base text-gray-500 leading-loose">
            {post.description}
          </p>
        </a>
      </Link>
    </div>
  )
})
