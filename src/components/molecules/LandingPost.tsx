import Link from 'next/link'
import React from 'react'

import { Avatar } from '@/components/atoms/Avatar'
import { CoverImage } from '@/components/atoms/CoverImage'
import { DateFormatter } from '@/components/atoms/DateFormatter'
import Post from '@/types/post'

type Props = {
  post: Post
}

export const LandingPost: React.VFC<Props> = React.memo(({ post }) => {
  return (
    <section>
      <div className="mb-8 md:mb-16">
        <CoverImage title={post.title} src={post.coverImage} id={post.id} />
      </div>
      <div className="md:grid md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
        <h3 className="mb-4 text-4xl lg:text-6xl leading-tight">
          {post.title}
        </h3>
        <div className="mb-4 md:mb-0 text-lg">
          <DateFormatter dateString={post.date} />
        </div>
        <div className="my-4">
          <Avatar name={post.author.name} picture={post.author.image.url} />
        </div>
        <div>
          <p className="text-lg leading-relaxed mb-4">{post.description}</p>
          <Link as={`/blog/${post.id}`} href="/blog/[id]">
            <a className="text-lg font-medium text-red-500 underline hover:no-underline">
              Read more
            </a>
          </Link>
        </div>
      </div>
    </section>
  )
})
