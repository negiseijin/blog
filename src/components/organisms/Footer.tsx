import React from 'react'

export const Footer: React.VFC = React.memo(() => {
  return (
    <footer className="container p-4 mx-auto border-t border-gray-200">
      <div className="flex flex-col lg:flex-row items-center">
        <div className="w-full text-center text-gray-500">
          © 2021 satoru takahashi
        </div>
      </div>
    </footer>
  )
})
