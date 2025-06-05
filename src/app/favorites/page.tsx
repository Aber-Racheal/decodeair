'use client'

import { useEffect, useState } from 'react'
import ResultCard from '@/components/ResultCard'
import { getFavorites, removeFavorite } from '@/utils/favorites'

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState<any[]>([])

  // Load favorites on mount
  useEffect(() => {
    try {
      setFavorites(getFavorites())
    } catch (error) {
      console.error('Could not load favorites from localStorage', error)
    }
  }, [])

  // Handle removal and refresh state
  const handleRemove = (code: string) => {
    removeFavorite(code)
    setFavorites(getFavorites())
  }

  const handleClearAll = () => {
    localStorage.removeItem('decodeair_favorites')
    setFavorites([])
  }

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">⭐ Your Favorites</h1>

      {favorites.length > 0 ? (
        <>
          <button
            onClick={handleClearAll}
            className="mb-4 text-sm text-red-600 hover:underline"
          >
            Clear All
          </button>

          <div className="space-y-4">
           {favorites.map((item, idx) => (
  <ResultCard
    key={`${item.code || item.name || idx}-${item.extra || 'Unknown'}`}
    data={item}
  />
))}

          </div>
        </>
      ) : (
        <p className="text-gray-600 dark:text-gray-400">
          You haven't added anything yet. Search and star results to save them here.
        </p>
      )}
    </div>
  )
}
