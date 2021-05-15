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
      className="relative py-8 px-4 xl:px-10 bg-cover bg-center"
      style={{
        backgroundImage: `url(${post.coverImage})`,
        height: '80vh',
      }}
    >
      <nav className="flex justify-between items-center">
        <Link href="/">
          <a className="block mx-auto text-3xl text-white font-semibold leading-none">
            Blog
          </a>
        </Link>
      </nav>
      {home ? <LandingPost post={post} /> : null}
    </header>
  )
})
