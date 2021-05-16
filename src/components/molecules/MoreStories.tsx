import React from 'react'

import { PostPreview } from '@/components/molecules/PostPreview'
import Post from '@/types/post'

type Props = {
  posts: Post[]
}

export const MoreStories: React.VFC<Props> = React.memo(({ posts }) => {
  return (
    <section>
      <h2 className="my-4 text-6xl font-bold leading-tight tracking-tighter md:my-12 md:text-7xl">
        More Stories
      </h2>

      <div className="p-8 mb-32 bg-gray-100 grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 rounded-xl">
        {posts.map((post) => (
          <PostPreview key={post.id} post={post} />
        ))}
      </div>
    </section>
  )
})
