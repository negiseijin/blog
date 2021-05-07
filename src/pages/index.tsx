import { LandingPost } from '@/components/molecules/LandingPost'
import { MoreStories } from '@/components/molecules/MoreStories'
import { Layout } from '@/components/templates/Layout'
import { getAllPosts } from '@/lib/api'
import { CMS_NAME } from '@/lib/constants'
import Post from '@/types/post'

import { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'

type Props = {
  allPosts?: Post[]
}

export const Home: NextPage<Props> = ({ allPosts }) => {
  const landingPost = allPosts ? allPosts[0] : null
  const morePosts = allPosts ? allPosts.slice(1) : null

  return (
    <>
      {landingPost && (
        <Layout title={landingPost.title} description={landingPost.excerpt}>
          <Head>
            <title> Home | {CMS_NAME}</title>
          </Head>
          {landingPost && (
            <LandingPost
              title={landingPost.title}
              coverImage={landingPost.coverImage}
              date={landingPost.date}
              author={landingPost.author}
              slug={landingPost.slug}
              excerpt={landingPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Layout>
      )}
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}

export default Home
