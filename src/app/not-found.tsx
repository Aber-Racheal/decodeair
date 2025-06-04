'use client'

import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center">
      <h1 className="text-5xl font-bold mb-4 text-gray-900 dark:text-white">404</h1>
      <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
        Oops! The page you’re looking for doesn’t exist.
      </p>
      <Link
        href="/"
        className="text-blue-600 hover:underline dark:text-blue-400 font-semibold"
      >
        Go back home
      </Link>
    </div>
  )
}
