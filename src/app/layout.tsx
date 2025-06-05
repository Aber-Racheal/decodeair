import './globals.css'
import { ReactNode } from 'react'
import Header from '@/components/Header'

export const metadata = {
  title: 'DecodeAir — Understand Airport Codes',
  description: 'A handy tool for decoding airline, airport, and country codes easily',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-800 dark:bg-gray-900 dark:text-white min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow p-6 max-w-4xl mx-auto w-full">{children}</main>
        <footer className="text-center text-sm py-4 text-gray-500">
          © {new Date().getFullYear()} DecodeAir. Built for learners.
        </footer>
      </body>
    </html>
  )
}
