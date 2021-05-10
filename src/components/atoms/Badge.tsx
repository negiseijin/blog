import cn from 'classnames'
import React from 'react'

type Props = {
  bgColor: string
  color: string
  name: string
}

export const Badge: React.VFC<Props> = React.memo(
  ({ bgColor, color, name }) => {
    return (
      <span
        className={cn(
          'text-xs font-semibold inline-block py-1 px-2 uppercase rounded last:mr-0 mr-1',
          bgColor,
          color
        )}
      >
        {name}
      </span>
    )
  }
)
