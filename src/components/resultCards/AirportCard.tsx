// src/components/resultCards/AirportCard.tsx
type Props = {
  data: any
}

export default function AirportCard({ data }: Props) {
  return (
    <div className="text-sm space-y-1">
      <p><strong>Code:</strong> {data.code}</p>
      <p><strong>Name:</strong> {data.name}</p>
      <p><strong>City:</strong> {data.city}</p>
      <p><strong>Country:</strong> {data.country}</p>
    </div>
  )
}
