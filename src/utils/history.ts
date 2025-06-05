// src/utils/history.ts

const HISTORY_KEY = 'decodeair_history'
const MAX_HISTORY_LENGTH = 20

export function getHistory(): string[] {
  if (typeof window === 'undefined') return []
  const stored = localStorage.getItem(HISTORY_KEY)
  return stored ? JSON.parse(stored) : []
}

export function addToHistory(query: string) {
  if (typeof window === 'undefined') return

  const trimmed = query.trim()
  if (!trimmed) return

  let current = getHistory().filter((q) => q.toLowerCase() !== trimmed.toLowerCase())
  current.unshift(trimmed)

  if (current.length > MAX_HISTORY_LENGTH) {
    current = current.slice(0, MAX_HISTORY_LENGTH)
  }

  localStorage.setItem(HISTORY_KEY, JSON.stringify(current))
}

export function clearHistory() {
  localStorage.removeItem(HISTORY_KEY)
}
