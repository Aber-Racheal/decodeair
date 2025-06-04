'use client'
import Link from 'next/link'
import SearchBar from '@/components/SearchBar'
import RandomCodes from '@/components/RandomCodes'
import { useState } from 'react'
import ResultCard from '@/components/ResultCard'

export default function Home() {
  const [searchResult, setSearchResult] = useState(null)

  return (
    <div className="max-w-2xl mx-auto mt-10 px-4">
      {/* Navigation */}
      <nav className="flex justify-center space-x-6 mb-8">
        <Link href="/" className="text-blue-600 hover:underline dark:text-blue-400">
          Home
        </Link>
        <Link href="/glossary" className="text-blue-600 hover:underline dark:text-blue-400">
          Glossary
        </Link>
        {/* Add more links as needed */}
      </nav>

      {/* Main content */}
      <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">DecodeAir</h1>
      <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
        Understand aviation codes like a pro.
      </p>

      {/* SearchBar with callback to set search results */}
      <SearchBar onResult={setSearchResult} />

      {/* Show search results or fallback to random codes */}
      <div className="mt-8">
        {searchResult ? (
          <ResultCard data={searchResult} />
        ) : (
          <RandomCodes />
        )}
      </div>
    </div>
  )
}
