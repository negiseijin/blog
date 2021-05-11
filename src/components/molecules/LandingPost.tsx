import Link from 'next/link'
import React from 'react'

import { Badge } from '@/components/atoms/Badge'
import { CoverImage } from '@/components/atoms/CoverImage'
import { DateFormatter } from '@/components/atoms/DateFormatter'
import Post from '@/types/post'

type Props = {
  post: Post
}

export const LandingPost: React.VFC<Props> = React.memo(({ post }) => {
  return (
    <div className="md:flex bg-gray-100 rounded-xl p-8 md:p-0 shadow-lg">
      <section className="bg-white rounded-lg">
        <div className="mb-4 md:mb-8">
          <CoverImage title={post.title} src={post.coverImage} id={post.id} />
        </div>
        <div className="grid gap-4 pb-8 mx-4">
          <h3 className="mx-4 text-4xl lg:text-6xl leading-tight">
            {post.title}
          </h3>
          <div className="mx-4">
            {post.category.map((category) => (
              <Badge
                key={category.id}
                bgColor="bg-indigo-700"
                color="text-indigo-100"
                name={category.name}
              />
            ))}
          </div>
          <div className="flex flex-row mx-4 text-lg">
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
          <div className="mx-4">
            <p className="text-lg leading-relaxed">{post.description}</p>
          </div>
          <div className="mx-4">
            <Link as={`/blog/${post.id}`} href="/blog/[id]">
              <a className="text-lg font-medium text-red-500 underline hover:no-underline">
                Read more
              </a>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
})
