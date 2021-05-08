import cn from 'classnames'
import Link from 'next/link'
import React from 'react'

type Props = {
  title: string
  src: string
  id?: string
}

export const CoverImage: React.VFC<Props> = React.memo(({ title, src, id }) => {
  const image = (
    <img
      src={src}
      alt={`Cover Image for ${title}`}
      className={cn('shadow-small', {
        'hover:shadow-medium transition-shadow duration-200': id,
      })}
    />
  )
  return (
    <div className="sm:mx-0">
      {id ? (
        <Link as={`/blog/${id}`} href="/blog/[id]">
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  )
})
