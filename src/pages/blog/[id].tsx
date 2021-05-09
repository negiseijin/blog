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
  morePosts: PostType[]
}

export const Post: NextPage<Props> = ({ post, morePosts }) => {
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
          <Layout
            title={post['post'].title}
            description={post['post'].description}
          >
            <article className="mb-32">
              <Head>
                <meta property="og:image" content={post['post'].ogImage.url} />
              </Head>
              <PostHeader post={post['post']} />
              <PostBody content={post['post'].content} />

              {morePosts && (
                <>{/* <div className="container mx-auto"></div> */}</>
              )}
            </article>
          </Layout>
        </>
      )}
    </>
  )
}

export default Post

type Params = {
  params: {
    id: string
  }
}

export const getStaticProps: GetStaticProps = async ({ params }: Params) => {
  const id = params.id
  const key = {
    headers: { 'X-API-KEY': process.env.API_KEY },
  }

  const data = await fetch(BLOG_END_POINT + '/' + id, key)
    .then((res) => res.json())
    .catch(() => console.error(console.error()))

  const post = {
    id: data.id,
    title: data.title,
    date: data.publishedAt,
    coverImage: data.coverImage.url,
    description: data.description,
    author: data.author,
    ogImage: {
      url: data.ogImage.url,
    },
    content: data.content,
  }

  return {
    props: {
      post: { ...data, post },
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const key = {
    headers: { 'X-API-KEY': process.env.API_KEY },
  }
  const data = await fetch(BLOG_END_POINT, key)
    .then((res) => res.json())
    .catch(() => console.error(console.error()))

  return {
    paths: data.contents.map((content) => {
      return {
        params: {
          id: content.id,
        },
      }
    }),
    fallback: false,
  }
}
