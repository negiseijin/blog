import React from 'react'

import { Avatar } from '@/components/atoms/Avatar'
import { CoverImage } from '@/components/atoms/CoverImage'
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
      <div className="hidden md:block md:mb-12">
        <Avatar name={post.author.name} picture={post.author.image.url} />
      </div>
      <div className="mb-6">
        <CoverImage title={post.title} src={post.coverImage} id={post.id} />
      </div>
      <div className="mb-8 md:mb-16 sm:mx-0">
        <div className="mb-6 text-lg">
          <DateFormatter dateString={post.date} />
        </div>
      </div>
      <div className="block max-w-2xl mb-6 mx-auto md:hidden">
        <Avatar name={post.author.name} picture={post.author.image.url} />
      </div>
    </>
  )
})
