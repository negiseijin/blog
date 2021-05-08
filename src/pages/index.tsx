import { LandingPost } from '@/components/molecules/LandingPost'
import { MoreStories } from '@/components/molecules/MoreStories'
import { Layout } from '@/components/templates/Layout'
import { CMS_NAME } from '@/lib/constants'
import Post from '@/types/post'

import { NextPage } from 'next'
import Head from 'next/head'
import useSwr from 'swr'

const fetcher = (url: RequestInfo) => fetch(url).then((res) => res.json())

export const Home: NextPage = () => {
  const { data, error } = useSwr<Post[], Error>('/api/blog', fetcher)

  const landingPost = data ? data[0] : null
  const morePosts = data ? data.slice(1) : null

  if (error) return <div>Failed to load blog</div>
  if (!data) return <div>Loading...</div>

  return (
    <>
      {landingPost && (
        <Layout title={landingPost.title} description={landingPost.description}>
          <Head>
            <title>Home | {CMS_NAME}</title>
          </Head>
          {landingPost && <LandingPost post={landingPost} />}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Layout>
      )}
    </>
  )
}

export default Home
