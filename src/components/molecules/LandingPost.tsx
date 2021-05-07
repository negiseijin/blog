import { Avatar } from '@/components/atoms/Avatar'
import { CoverImage } from '@/components/atoms/CoverImage'
import { DateFormatter } from '@/components/atoms/DateFormatter'
import Author from '@/types/author'

import Link from 'next/link'
import React from 'react'

type Props = {
  title: string
  coverImage: string
  date: string
  author: Author
  slug: string
  excerpt: string
}

export const LandingPost: React.VFC<Props> = React.memo(
  ({ title, coverImage, date, author, slug, excerpt }) => {
    return (
      <section>
        <div className="mb-8 md:mb-16">
          <CoverImage title={title} src={coverImage} slug={slug} />
        </div>
        <div className="md:grid md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
          <h3 className="mb-4 text-4xl lg:text-6xl leading-tight">{title}</h3>
          <div className="mb-4 md:mb-0 text-lg">
            <DateFormatter dateString={date} />
          </div>
          <div className="my-4">
            <Avatar name={author.name} picture={author.picture} />
          </div>
          <div>
            <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
            <Link as={`/posts/${slug}`} href="/posts/[slug]">
              <a className="text-lg font-medium text-red-500 underline hover:no-underline">
                Read more
              </a>
            </Link>
          </div>
        </div>
      </section>
    )
  }
)
