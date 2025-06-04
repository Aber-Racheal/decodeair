// src/components/glossary/GlossaryItem.tsx
type Props = {
  item: any
  type: string
}

export default function GlossaryItem({ item, type }: Props) {
  const renderSummary = () => {
    switch (type) {
      case 'country':
        return `${item.name} (${item.code})`
      case 'airline':
        return `${item.name} - ${item.iata || ''}`
      case 'airport':
        return `${item.name} (${item.code})`
      case 'city':
        return `${item.name}, ${item.country}`
      case 'alphabet':
        return `${item.letter} = ${item.word}`
      default:
        return 'Unknown'
    }
  }

  return (
    <div className="p-3 border rounded-md dark:border-gray-700 bg-gray-50 dark:bg-gray-800 hover:bg-blue-50 dark:hover:bg-blue-900 transition">
      <p className="text-sm">{renderSummary()}</p>
    </div>
  )
}
