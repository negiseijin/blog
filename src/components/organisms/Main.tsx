import React from 'react'

type Props = {
  children: React.ReactNode
}

export const Main: React.VFC<Props> = React.memo(({ children }) => {
  return <main className="container px-4 mx-auto">{children}</main>
})
