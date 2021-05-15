import React from 'react'

import markdownStyles from '@/styles/markdown-styles.module.css'

type Props = {
  content: string
}

export const PostBody: React.VFC<Props> = React.memo(({ content }) => {
  return (
    <div className="max-w-4xl mx-auto">
      <div
        className={markdownStyles['markdown']}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  )
})

export default PostBody
