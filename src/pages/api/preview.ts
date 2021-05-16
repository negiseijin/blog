import { NextApiRequest, NextApiResponse } from 'next'

import { BLOG_END_POINT } from '@/lib/constants'

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  const id = req.query.id
  const draftKey = req.query.draftKey

  if (!id || !draftKey) {
    res.status(400).json({ error: 'missing queryparamaeter' })
  }

  const post = await fetch(`${BLOG_END_POINT}?${id}?&draftKey=${draftKey}`, {
    headers: { 'X-API-KEY': process.env.NEXT_PUBLIC_API_KEY || '' },
  })
    .then((res) => res.json())
    .catch((error) => console.error(error))

  if (!post) {
    return res.status(401).json({ message: 'Invalid id' })
  }

  res.setPreviewData({
    id: post.id,
    draftKey: draftKey,
  })

  res.writeHead(307, { Location: `/${post.id}` })
  res.end('Preview mode enabled')
}

export default handler
