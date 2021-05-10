import Link from 'next/link'
import React from 'react'
import { Badge } from '@/components/atoms/Badge'
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
          <div className="relative flex h-96 mb-8ß">
            <img
              className="w-full h-full object-cover"
              src={post.coverImage}
              alt={post.title}
            />
          </div>
          <h2 className="mb-4 text-2xl font-semibold font-heading text-blue-800">
            {post.title}
          </h2>
          <div className="my-4">
            {post.category.map((category) => (
              <Badge
                key={category.id}
                bgColor="bg-indigo-700"
                color="text-indigo-100"
                name={category.name}
              />
            ))}
          </div>
          <div className="flex flex-row mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
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
          <p className="my-3 text-base text-gray-500 leading-loose">
            {post.description}
          </p>
        </a>
      </Link>
    </div>
  )
})
