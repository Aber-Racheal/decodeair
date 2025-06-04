// src/components/resultCards/CityCard.tsx
type Props = {
  data: any
}

export default function CityCard({ data }: Props) {
  return (
    <div className="text-sm space-y-1">
      <p><strong>Name:</strong> {data.name}</p>
      <p><strong>Country:</strong> {data.country}</p>
    </div>
  )
}
