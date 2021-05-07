import { Meta } from '@/components/atoms/Meta'
import { Footer } from '@/components/organisms/Footer'
import { Header } from '@/components/organisms/Header'
import { Main } from '@/components/organisms/Main'
import React from 'react'

type Props = {
  title: string
  description: string
  children: React.ReactNode
}

export const Layout: React.VFC<Props> = React.memo(
  ({ title, description, children }) => {
    return (
      <>
        <Meta title={title} description={description} />
        <Header />
        <div className="min-h-screen py-12">
          <Main>{children}</Main>
        </div>
        <Footer />
      </>
    )
  }
)
