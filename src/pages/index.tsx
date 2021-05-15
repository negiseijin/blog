import { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'

import { MoreStories } from '@/components/molecules/MoreStories'
import { Layout } from '@/components/templates/Layout'
import { CMS_NAME, BLOG_END_POINT } from '@/lib/constants'
import Contents from '@/types/contents'
import Post from '@/types/post'

type Props = {
  allPosts?: Post[]
}

export const Home: NextPage<Props> = ({ allPosts }) => {
  const landingPost = allPosts[0]
  const morePosts = allPosts.slice(1)

  return (
    <>
      {landingPost && (
        <Layout post={landingPost} home>
          <Head>
            <title>Home | {CMS_NAME}</title>
          </Head>
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Layout>
      )}
    </>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async () => {
  const key = {
    headers: { 'X-API-KEY': process.env.NEXT_PUBLIC_API_KEY },
  }

  const data = await fetch(BLOG_END_POINT, key)
    .then((res) => res.json())
    .catch(() => console.error(console.error()))

  // コンテンツを取得
  const contents: Contents[] = data.contents

  // 投稿を取得
  const allPosts = contents.map((content) => {
    const post: Post = {
      id: content.id,
      title: content.title,
      category: content.category,
      date: content.publishedAt,
      coverImage: content.coverImage.url,
      description: content.description,
      author: content.author,
      ogImage: {
        url: content.ogImage.url,
      },
      content: content.content,
    }

    return post
  })

  return {
    props: { allPosts },
  }
}
