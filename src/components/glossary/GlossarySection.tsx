'use client'

import { useState, useMemo } from 'react'
import GlossaryItem from './GlossaryItem'
import GlossaryFilter from './GlossaryFilter'

type Props = {
  title: string
  data: any[]
  type: string
}

const ITEMS_PER_PAGE = 10

export default function GlossarySection({ title, data, type }: Props) {
  const [query, setQuery] = useState('')
  const [activeLetter, setActiveLetter] = useState<string | null>(null)
  const [currentPage, setCurrentPage] = useState(1)

  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

  const filtered = useMemo(() => {
    return data.filter(item => {
      const combined = Object.values(item).join(' ').toLowerCase()
      const matchesQuery = combined.includes(query.toLowerCase())
      const matchesLetter = activeLetter
        ? item.name?.toUpperCase()?.startsWith(activeLetter)
        : true
      return matchesQuery && matchesLetter
    })
  }, [query, activeLetter, data])

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE)
  const paginated = filtered.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE)

  const handleLetterClick = (letter: string) => {
    setActiveLetter(letter === activeLetter ? null : letter)
    setCurrentPage(1)
  }

  return (
    <div className="mb-12">
      <h2 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{title}</h2>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
        You can filter this list alphabetically or by keyword. Click a letter to jump to items that start with it.
      </p>

      <GlossaryFilter query={query} setQuery={setQuery} />

      {/* Alphabet Filter */}
      <div className="flex flex-wrap gap-1 mt-3">
        {alphabet.map(letter => (
          <button
            key={letter}
            onClick={() => handleLetterClick(letter)}
            className={`px-2 py-1 text-sm border rounded transition-colors ${
              activeLetter === letter
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white'
            }`}
            aria-pressed={activeLetter === letter}
          >
            {letter}
          </button>
        ))}
      </div>

      {/* Glossary Items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5 transition-all duration-300">
        {paginated.length > 0 ? (
          paginated.map((item, idx) => (
            <GlossaryItem key={idx} item={item} type={type} />
          ))
        ) : (
          <p className="text-center text-gray-600 dark:text-gray-400 mt-6">
            No results found{query ? ` for "${query}"` : ''}. Try a different search or pick another letter.
          </p>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="mt-6 flex justify-center space-x-2">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-3 py-1 border rounded text-sm ${
                currentPage === i + 1
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 dark:text-white'
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
