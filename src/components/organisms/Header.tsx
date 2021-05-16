import Link from 'next/link'
import React from 'react'

import { LandingPost } from '@/components/molecules/LandingPost'
import Post from '@/types/post'

type Props = {
  post: Post
  home?: boolean
}

export const Header: React.VFC<Props> = React.memo(({ post, home }) => {
  return (
    <header
      className="relative px-4 py-8 bg-center bg-cover xl:px-10"
      style={{
        backgroundImage: `url(${post.coverImage})`,
        height: '80vh',
      }}
    >
      <nav className="flex items-center justify-between">
        <Link href="/">
          <a className="block mx-auto text-3xl font-semibold leading-none text-white">
            Blog
          </a>
        </Link>
      </nav>
      {home ? <LandingPost post={post} /> : null}
    </header>
  )
})
