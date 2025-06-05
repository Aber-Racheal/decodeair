'use client'

import Link from 'next/link'
import { useState } from 'react'
import ThemeToggle from './ThemeToggle'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="bg-white dark:bg-gray-800 border-b px-6 py-4">
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        {/* Site title */}
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          <Link href="/" onClick={() => setMenuOpen(false)}>DecodeAir</Link>
        </h1>

        {/* Desktop nav */}
        <nav className="hidden md:flex space-x-6">
          <Link
            href="/"
            className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/glossary"
            className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
            onClick={() => setMenuOpen(false)}
          >
            Glossary
          </Link>
          <Link
            href="/favorites"
            className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-yellow-400"
            onClick={() => setMenuOpen(false)}
          >
            ⭐ Favorites
          </Link>
        </nav>

        {/* Theme toggle and hamburger */}
        <div className="flex items-center space-x-4">
          <ThemeToggle />

          <button
            className="md:hidden text-gray-700 dark:text-gray-300 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? (
              // X icon
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"
                   strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              // Hamburger icon
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"
                   strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile nav menu */}
      {menuOpen && (
        <nav className="md:hidden mt-4 space-y-2 max-w-4xl mx-auto px-2">
          <Link
            href="/"
            className="block px-3 py-2 rounded-md text-gray-700 hover:bg-blue-100 dark:text-gray-300 dark:hover:bg-blue-800"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/glossary"
            className="block px-3 py-2 rounded-md text-gray-700 hover:bg-blue-100 dark:text-gray-300 dark:hover:bg-blue-800"
            onClick={() => setMenuOpen(false)}
          >
            Glossary
          </Link>
          <Link
            href="/favorites"
            className="block px-3 py-2 rounded-md text-yellow-600 hover:bg-yellow-100 dark:text-yellow-400 dark:hover:bg-yellow-900"
            onClick={() => setMenuOpen(false)}
          >
            ⭐ Favorites
          </Link>
        </nav>
      )}
    </header>
  )
}
