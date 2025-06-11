'use client'

import { useState, useEffect, useRef } from 'react'
import { searchQuery, getSuggestions } from '@/utils/search'
import { addToHistory } from '@/utils/history'

type SearchBarProps = {
  onResult?: (data: any) => void
}

export default function SearchBar({ onResult }: SearchBarProps) {
  const [query, setQuery] = useState('')
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
        <span className="font-semibold bg-blue-100 dark:bg-blue-900 text-blue-900 dark:text-blue-100 px-1 rounded">
          {text.slice(i, i + q.length)}
        </span>
        {text.slice(i + q.length)}
      </>
    )
  }

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Search Card */}
      <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-xl border border-gray-200 dark:border-slate-700 p-8 sm:p-10">
        <div className="relative">
          {/* Search Input */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
              <svg className="h-6 w-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value)
                setActiveIndex(-1)
              }}
              placeholder="Search aviation codes, airports, airlines... or ask a question"
              className="block w-full pl-14 pr-16 py-5 text-lg border-2 border-gray-200 dark:border-slate-600 rounded-2xl bg-gray-50 dark:bg-slate-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              onKeyDown={handleKeyDown}
            />
            
            {/* Loading Spinner */}
            {loading && (
              <div className="absolute inset-y-0 right-0 pr-6 flex items-center">
                <div className="animate-spin rounded-full h-6 w-6 border-2 border-blue-600 border-t-transparent"></div>
              </div>
            )}
            
            {/* Search Button */}
            {!loading && (
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                <button
                  onClick={() => handleSearch()}
                  className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl px-4 py-2 font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Search
                </button>
              </div>
            )}
          </div>

          {/* Suggestions Dropdown */}
          {suggestions.length > 0 && (
            <div className="absolute z-20 w-full mt-2">
              <div className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-600 rounded-2xl shadow-xl max-h-64 overflow-y-auto">
                {suggestions.map((sugg, idx) => (
                  <button
                    key={idx}
                    className={`w-full text-left px-6 py-4 text-sm border-b border-gray-100 dark:border-slate-700 last:border-b-0 transition-colors duration-150 ${
                      idx === activeIndex
                        ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-900 dark:text-blue-100'
                        : 'hover:bg-gray-50 dark:hover:bg-slate-700 text-gray-700 dark:text-gray-300'
                    }`}
                    onClick={() => {
                      setQuery(sugg)
                      handleSearch(sugg)
                    }}
                  >
                    <div className="flex items-center space-x-3">
                      <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                      <span>{highlight(sugg)}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Search Tips */}
        <div className="mt-6 flex flex-wrap gap-2">
          <span className="text-sm text-gray-500 dark:text-gray-400 mr-2">Try:</span>
          {['LAX', 'Emirates', 'USA', 'NYC', 'Alpha'].map((tip) => (
            <button
              key={tip}
              onClick={() => {
                setQuery(tip)
                handleSearch(tip)
              }}
              className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-600 transition-colors duration-200"
            >
              {tip}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}