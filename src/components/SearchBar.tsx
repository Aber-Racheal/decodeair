import { useState, useEffect } from 'react'
import { searchQuery, getSuggestions } from '@/utils/search'
import ResultCard from './ResultCard'

type SearchBarProps = {
  onResult?: (data: any) => void
}

export default function SearchBar({ onResult }: SearchBarProps) {
  const [query, setQuery] = useState('')
  const [result, setResult] = useState<any | null>(null)
  const [suggestions, setSuggestions] = useState<string[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (!query.trim()) {
      setSuggestions([])
      return
    }

    const timeout = setTimeout(() => {
      const sugg = getSuggestions(query)
      setSuggestions(sugg)
    }, 200)

    return () => clearTimeout(timeout)
  }, [query])

  const handleSearch = async (value?: string) => {
    setLoading(true)
    const actualQuery = value ?? query

    setTimeout(() => {
      const res = searchQuery(actualQuery)
      setResult(res || { notFound: true, query: actualQuery })
      setSuggestions([])
      setLoading(false)
      
      // Call the parent callback with the new result
      if (onResult) {
        onResult(res || { notFound: true, query: actualQuery })
      }
    }, 400)
  }

  return (
    <div className="w-full max-w-xl mx-auto">
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search code or name..."
          className="w-full px-4 py-2 border rounded-md dark:bg-gray-800"
          onKeyDown={(e) => {
            if (e.key === 'Enter') handleSearch()
          }}
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
                className="px-4 py-2 hover:bg-blue-100 dark:hover:bg-blue-800 cursor-pointer"
                onClick={() => {
                  setQuery(sugg)
                  handleSearch(sugg)
                }}
              >
                {sugg}
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
