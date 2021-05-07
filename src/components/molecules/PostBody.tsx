import markdownStyles from '@/styles/markdown-styles.module.css'

import React from 'react'

type Props = {
  content: string
}

export const PostBody: React.VFC<Props> = React.memo(({ content }) => {
  return (
    <div className="max-w-2xl mx-auto">
      <div
        className={markdownStyles['markdown']}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  )
})

export default PostBody
