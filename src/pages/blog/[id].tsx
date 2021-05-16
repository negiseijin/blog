import { NextPage, GetStaticProps, GetStaticPaths } from 'next'
import ErrorPage from 'next/error'
import Head from 'next/head'
import { useRouter } from 'next/router'

import { PostTitle } from '@/components/atoms/PostTitle'
import { PostBody } from '@/components/molecules/PostBody'
import { PostHeader } from '@/components/molecules/PostHeader'
import { Layout } from '@/components/templates/Layout'
import { BLOG_END_POINT } from '@/lib/constants'
import PostType from '@/types/post'

type Props = {
  post: PostType
}

export const Post: NextPage<Props> = ({ post }) => {
  const router = useRouter()

  if (!router.isFallback && !post?.id) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <>
      {router.isFallback ? (
        <PostTitle>Loading…</PostTitle>
      ) : (
        <>
          <Layout post={post}>
            <article className="mb-32">
              <Head>
                <meta property="og:image" content={post.ogImage.url} />
              </Head>
              <PostHeader post={post} />
              <PostBody content={post.body} />
            </article>
          </Layout>
        </>
      )}
    </>
  )
}

export default Post

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.id
  const key = {
    headers: { 'X-API-KEY': process.env.NEXT_PUBLIC_API_KEY },
  }

  const data = await fetch(BLOG_END_POINT + id, key)
    .then((res) => res.json())
    .catch(() => console.error(console.error()))

  const post = {
    id: data.id,
    title: data.title,
    category: data.category,
    date: data.publishedAt,
    coverImage: data.coverImage.url,
    description: data.description,
    ogImage: {
      url: data.ogImage.url,
    },
    body: data.body,
  }

  return {
    props: {
      post: post,
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const key = {
    headers: { 'X-API-KEY': process.env.NEXT_PUBLIC_API_KEY },
  }
  const data = await fetch(BLOG_END_POINT, key)
    .then((res) => res.json())
    .catch(() => console.error(console.error()))

  const paths = data.contents.map((data) => `/blog/${data.id}`)

  return {
    paths,
    fallback: false,
  }
}
