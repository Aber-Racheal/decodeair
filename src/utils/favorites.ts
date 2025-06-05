// src/utils/favorites.ts
const FAVORITES_KEY = 'decodeair_favorites'

export function getFavorites(): any[] {
  if (typeof window === 'undefined') return []
  const fav = localStorage.getItem(FAVORITES_KEY)
  return fav ? JSON.parse(fav) : []
}

export function addFavorite(item: any) {
  const favs = getFavorites()
  if (!favs.find((f) => f.code === item.code)) {
    favs.push(item)
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favs))
  }
}

export function removeFavorite(code: string) {
  let favs = getFavorites()
  favs = favs.filter((c) => c.code !== code)
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(favs))
}

export function isFavorite(code: string): boolean {
  return getFavorites().some((item) => item.code === code)
}
