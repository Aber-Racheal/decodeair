// src/components/resultCards/AlphabetCard.tsx
type Props = {
  data: any
}

export default function AlphabetCard({ data }: Props) {
  return (
    <div className="text-sm space-y-1">
      <p><strong>Letter:</strong> {data.letter}</p>
      <p><strong>Word:</strong> {data.word}</p>
    </div>
  )
}
