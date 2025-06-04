import ThemeToggle from './ThemeToggle'

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4 bg-gray-100 dark:bg-gray-900">
      <h1 className="text-xl font-bold text-gray-900 dark:text-white">DecodeAir</h1>
      <ThemeToggle />
    </header>
  )
}
