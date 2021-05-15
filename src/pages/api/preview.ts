import { NextApiRequest, NextApiResponse } from 'next'

import { BLOG_END_POINT } from '@/lib/constants'

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  if (!req.query.slug) {
    return res.status(404).end()
  }

  const post = await fetch(
    `${BLOG_END_POINT}${req.query.slug}?fields=id&draftKey=${req.query.draftKey}`,
    { headers: { 'X-API-KEY': process.env.NEXT_PUBLIC_API_KEY || '' } }
  )
    .then((res) => res.json())
    .catch((error) => console.error(error))

  if (!post) {
    return res.status(401).json({ message: 'Invalid slug' })
  }

  res.setPreviewData({
    slug: post.id,
    draftKey: req.query.draftKey,
  })

  res.writeHead(307, { Location: `/${post.id}` })
  res.end('Preview mode enabled')
}

export default handler
