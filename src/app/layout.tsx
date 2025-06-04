// src/app/layout.tsx
import './globals.css'
import { ReactNode } from 'react'
import ThemeToggle from '@/components/ThemeToggle'  // Make sure path is correct

export const metadata = {
  title: 'DecodeAir — Understand Airport Codes',
  description: 'A handy tool for decoding airline, airport, and country codes easily',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-800 dark:bg-gray-900 dark:text-white">
        <header className="flex justify-between items-center px-6 py-4 border-b bg-white dark:bg-gray-800">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">DecodeAir</h1>
          <ThemeToggle />
        </header>
        <main className="p-6 max-w-4xl mx-auto">{children}</main>
        <footer className="text-center text-sm py-4 text-gray-500">
          © {new Date().getFullYear()} DecodeAir. Built for learners.
        </footer>
      </body>
    </html>
  )
}
