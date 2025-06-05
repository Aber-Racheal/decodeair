'use client'

import { useState, useEffect, useRef } from 'react'
import { searchQuery, getSuggestions } from '@/utils/search'
import { addToHistory } from '@/utils/history'
import ResultCard from './ResultCard'

type SearchBarProps = {
  onResult?: (data: any) => void
}

export default function SearchBar({ onResult }: SearchBarProps) {
  const [query, setQuery] = useState('')
  const [result, setResult] = useState<any | null>(null)
  const [suggestions, setSuggestions] = useState<string[]>([])
  const [loading, setLoading] = useState(false)
  const [activeIndex, setActiveIndex] = useState(-1)
  const inputRef = useRef<HTMLInputElement>(null)

  // Suggestion handling with debounce
  useEffect(() => {
    if (!query.trim()) {
      setSuggestions([])
      setActiveIndex(-1)
      return
    }

    const timeout = setTimeout(() => {
      const sugg = getSuggestions(query)
      setSuggestions(sugg)
    }, 200)

    return () => clearTimeout(timeout)
  }, [query])

  // Extract meaningful keyword from sentence
  const extractKeyword = (input: string) => {
    const clean = input
      .toLowerCase()
      .replace(/[^a-zA-Z0-9 ]/g, '')
      .split(' ')
      .filter(
        (w) =>
          w.length > 2 &&
          !['what', 'the', 'for', 'i', 'am', 'to', 'is', 'does', 'mean', 'of'].includes(w)
      )

    return clean[clean.length - 1] || input // fallback
  }

  const handleSearch = async (value?: string) => {
    setLoading(true)
    const actualQuery = extractKeyword(value ?? query)

    setTimeout(() => {
      const res = searchQuery(actualQuery)
      const payload = res || { notFound: true, query: actualQuery }

      setResult(payload)
      setSuggestions([])
      setLoading(false)

      if (onResult) onResult(payload)
      addToHistory(actualQuery) // ✅ Log to history
    }, 400)
  }

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setActiveIndex((prev) => (prev + 1) % suggestions.length)
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setActiveIndex((prev) => (prev - 1 + suggestions.length) % suggestions.length)
    } else if (e.key === 'Enter') {
      if (activeIndex >= 0 && activeIndex < suggestions.length) {
        const selected = suggestions[activeIndex]
        setQuery(selected)
        handleSearch(selected)
      } else {
        handleSearch()
      }
    }
  }

  // Highlight matched text in suggestions
  const highlight = (text: string) => {
    const q = query.trim().toLowerCase()
    const i = text.toLowerCase().indexOf(q)
    if (i === -1) return text

    return (
      <>
        {text.slice(0, i)}
        <span className="font-semibold bg-yellow-200 dark:bg-yellow-500 text-black px-1 rounded">
          {text.slice(i, i + q.length)}
        </span>
        {text.slice(i + q.length)}
      </>
    )
  }

  return (
    <div className="w-full max-w-xl mx-auto">
      <div className="relative">
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value)
            setActiveIndex(-1)
          }}
          placeholder="Search code or name... or ask a question"
          className="w-full px-4 py-2 border rounded-md dark:bg-gray-800"
          onKeyDown={handleKeyDown}
        />

        {loading && (
          <div className="absolute top-2 right-3 animate-spin text-blue-600">
            ⏳
          </div>
        )}

        {suggestions.length > 0 && (
          <ul className="absolute z-10 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 mt-1 w-full rounded-md shadow-md max-h-48 overflow-y-auto">
            {suggestions.map((sugg, idx) => (
              <li
                key={idx}
                className={`px-4 py-2 cursor-pointer ${
                  idx === activeIndex
                    ? 'bg-blue-100 dark:bg-blue-800'
                    : 'hover:bg-blue-50 dark:hover:bg-gray-700'
                }`}
                onClick={() => {
                  setQuery(sugg)
                  handleSearch(sugg)
                }}
              >
                {highlight(sugg)}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="mt-4">
        {result && <ResultCard data={result} />}
      </div>
    </div>
  )
}
