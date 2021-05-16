import React from 'react'

import { Badge } from '@/components/atoms/Badge'
import { DateFormatter } from '@/components/atoms/DateFormatter'
import { PostTitle } from '@/components/atoms/PostTitle'
import Post from '@/types/post'

type Props = {
  post: Post
}

export const PostHeader: React.VFC<Props> = React.memo(({ post }) => {
  return (
    <>
      <PostTitle>{post.title}</PostTitle>
      <div className="mb-4">
        {post.category.map((category) => (
          <Badge
            key={category.id}
            bgColor="bg-indigo-700"
            color="text-indigo-100"
            name={category.name}
          />
        ))}
      </div>
      <div className="flex mb-6 text-lg md:mb-12 sm:mx-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <DateFormatter dateString={post.date} />
      </div>
    </>
  )
})
