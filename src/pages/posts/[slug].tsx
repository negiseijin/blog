import { PostTitle } from '@/components/atoms/PostTitle'
import { PostBody } from '@/components/molecules/PostBody'
import { PostHeader } from '@/components/molecules/PostHeader'
import { Layout } from '@/components/templates/Layout'
import { getPostBySlug, getAllPosts } from '@/lib/api'
import markdownToHtml from '@/lib/markdownToHtml'
import PostType from '@/types/post'

import { NextPage, GetStaticProps, GetStaticPaths } from 'next'
import ErrorPage from 'next/error'
import Head from 'next/head'
import { useRouter } from 'next/router'

type Props = {
  post: PostType
  morePosts: PostType[]
}

export const Post: NextPage<Props> = ({ post, morePosts }) => {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <>
      {router.isFallback ? (
        <PostTitle>Loading…</PostTitle>
      ) : (
        <>
          <Layout title={post.title} description={post.excerpt}>
            <article className="mb-32">
              <Head>
                <meta property="og:image" content={post.ogImage.url} />
              </Head>
              <PostHeader
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
                author={post.author}
              />
              <PostBody content={post.content} />

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
    slug: string
  }
}

export const getStaticProps: GetStaticProps = async ({ params }: Params) => {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
  ])
  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((posts) => {
      return {
        params: {
          slug: posts.slug,
        },
      }
    }),
    fallback: false,
  }
}
