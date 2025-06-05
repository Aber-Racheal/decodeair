'use client'
import { useEffect, useState } from 'react'
import { getHistory, clearHistory } from '@/utils/history'

type Props = {
  onSelect: (query: string) => void
}

export default function SearchHistory({ onSelect }: Props) {
  const [history, setHistory] = useState<string[]>([])

  useEffect(() => {
    setHistory(getHistory())
  }, [])

  const handleClear = () => {
    clearHistory()
    setHistory([])
  }

  if (history.length === 0) return null

  return (
    <div className="mt-6">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-md font-semibold">Recent Searches</h3>
        <button
          onClick={handleClear}
          className="text-sm text-red-500 hover:underline"
        >
          Clear
        </button>
      </div>
      <ul className="flex flex-wrap gap-2 text-sm">
        {history.map((q, idx) => (
          <li key={idx}>
            <button
              onClick={() => onSelect(q)}
              className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded hover:bg-gray-300 dark:hover:bg-gray-600"
            >
              {q}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
