import Link from 'next/link'
import React from 'react'

export const Header: React.VFC = React.memo(() => {
  return (
    <header className="container px-4 mx-auto">
      <nav className="flex items-center py-6">
        <Link href="/">
          <a className="block mx-auto text-3xl font-semibold leading-none">
            Blog
          </a>
        </Link>
      </nav>
    </header>
  )
})
