import { CMS_NAME } from '@/lib/constants'

import Head from 'next/head'
import React from 'react'

type Props = {
  title: string
  description: string
}

export const Meta: React.VFC<Props> = React.memo(({ title, description }) => {
  return (
    <Head>
      <title>
        {title} | {CMS_NAME}
      </title>
      <meta name="Description" content={description}></meta>
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
})
