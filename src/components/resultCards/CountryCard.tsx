// src/components/resultCards/CountryCard.tsx
type Props = {
  data: any
}

export default function CountryCard({ data }: Props) {
  return (
    <div className="space-y-1 text-sm">
      <p><strong>Full Name:</strong> {data.fullName}</p>
      <p><strong>Capital:</strong> {data.capital}</p>
      <p><strong>Region:</strong> {data.region} ({data.subregion})</p>
      <p><strong>Currency:</strong> {data.currency}</p>
      <p><strong>Language:</strong> {data.language}</p>
      <p><strong>Calling Code:</strong> {data.callingCode}</p>
      <p><strong>Demonym:</strong> {data.demonym}</p>
    </div>
  )
}
