// src/components/glossary/GlossaryFilter.tsx
type Props = {
  query: string
  setQuery: (q: string) => void
}

export default function GlossaryFilter({ query, setQuery }: Props) {
  return (
    <input
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      placeholder="Filter by name, code..."
      className="w-full border border-gray-300 dark:border-gray-700 px-3 py-1 rounded-md"
    />
  )
}
