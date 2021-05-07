import { parseISO, format } from 'date-fns'
import React from 'react'

type Props = {
  dateString: string
}

export const DateFormatter: React.VFC<Props> = React.memo(({ dateString }) => {
  const date = parseISO(dateString)
  return <time dateTime={dateString}>{format(date, 'LLLL	d, yyyy')}</time>
})
