import Link from 'next/link'
import React from 'react'

import { DateFormatter } from '@/components/atoms/DateFormatter'
import Post from '@/types/post'

type Props = {
  post: Post
}

export const LandingPost: React.VFC<Props> = React.memo(({ post }) => {
  return (
    <div className="absolute bottom-0 left-0 w-full">
      <div className="relative max-w-4xl px-4 py-8 mx-auto md:py-16">
        <h2 className="my-8 text-4xl font-bold text-white uppercase lg:text-6xl">
          {post.title}
        </h2>
        <p className="flex flex-row my-8 text-lg font-bold text-white uppercase lg:text-xl">
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
        </p>
        <p className="my-8 text-2xl font-bold text-white uppercase lg:text-4xl">
          {post.description}
        </p>
        <Link as={`/blog/${post.id}`} href="/blog/[id]">
          <a className="inline-block w-full px-8 py-5 text-sm font-bold text-white uppercase bg-pink-500 rounded-lg md:w-auto hover:bg-pink-400 transition duration-200">
            Read more
          </a>
        </Link>
      </div>
    </div>
  )
})
