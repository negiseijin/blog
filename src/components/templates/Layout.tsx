import React from 'react'

import { Meta } from '@/components/atoms/Meta'
import { Footer } from '@/components/organisms/Footer'
import { Header } from '@/components/organisms/Header'
import { Main } from '@/components/organisms/Main'
import Post from '@/types/post'

type Props = {
  post: Post
  home?: boolean
  children: React.ReactNode
}

export const Layout: React.VFC<Props> = React.memo(
  ({ post, home, children }) => {
    return (
      <>
        <Meta title={post.title} description={post.description} />
        <Header post={post} home={home} />
        <div className="min-h-screen py-12">
          <Main>{children}</Main>
        </div>
        <Footer />
      </>
    )
  }
)
