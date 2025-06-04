// src/components/ThemeToggle.tsx
'use client'
import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  useEffect(() => {
    // On mount, check the current theme from html class
    if (document.documentElement.classList.contains('dark')) {
      setTheme('dark')
    }
  }, [])

  const toggleTheme = () => {
    if (theme === 'light') {
      document.documentElement.classList.add('dark')
      setTheme('dark')
    } else {
      document.documentElement.classList.remove('dark')
      setTheme('light')
    }
  }

  return (
    <button
      aria-label="Toggle dark mode"
      onClick={toggleTheme}
      className="p-2 rounded focus:outline-none focus:ring focus:ring-blue-500"
    >
      {theme === 'light' ? '🌞' : '🌙'}
    </button>
  )
}
