import React from 'react'

type Props = {
  children: React.ReactNode
}

export const PostTitle: React.VFC<Props> = React.memo(({ children }) => {
  return (
    <h1 className="mb-12 text-6xl font-bold leading-tight tracking-tighter text-center md:text-7xl lg:text-8xl md:leading-none md:text-left">
      {children}
    </h1>
  )
})
