import Link from 'next/link'
import React from 'react'

import { DateFormatter } from '@/components/atoms/DateFormatter'
import Post from '@/types/post'

type Props = {
  post: Post
}

export const LandingPost: React.VFC<Props> = React.memo(({ post }) => {
  return (
    <div className="absolute w-full bottom-0 left-0">
      <div className="relative max-w-4xl mx-auto py-8 px-4 md:py-16">
        <h2 className="my-8 text-white text-4xl lg:text-6xl font-bold uppercase">
          {post.title}
        </h2>
        <p className="flex flex-row my-8 text-white text-lg lg:text-xl font-bold uppercase">
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
        </p>
        <p className="my-8 text-white text-2xl lg:text-4xl font-bold uppercase">
          {post.description}
        </p>
        <Link as={`/blog/${post.id}`} href="/blog/[id]">
          <a className="inline-block w-full md:w-auto px-8 py-5 text-sm font-bold uppercase bg-pink-500 hover:bg-pink-400 transition duration-200 rounded-lg text-white">
            Read more
          </a>
        </Link>
      </div>
    </div>
  )
})
