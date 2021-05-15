import React from 'react'

type Props = {
  children: React.ReactNode
}

const SafeHydrate: React.VFC<Props> = React.memo(({ children }) => {
  return <>{children}</>
})

export default SafeHydrate
