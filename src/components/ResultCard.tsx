// src/components/ResultCard.tsx
import CountryCard from './resultCards/CountryCard'
import AirlineCard from './resultCards/AirlineCard'
import AirportCard from './resultCards/AirportCard'
import CityCard from './resultCards/CityCard'
import AlphabetCard from './resultCards/AlphabetCard'

type ResultProps = {
  data: any
}

function MapLink({ placeName }: { placeName: string }) {
  const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(placeName)}`
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-600 underline mt-2 inline-block"
    >
      📍 View "{placeName}" on Google Maps
    </a>
  )
}


export default function ResultCard({ data }: ResultProps) {
  if (data.notFound) {
    return (
      <div className="p-4 bg-red-100 text-red-800 rounded">
        No results found for "<strong>{data.query}</strong>"
      </div>
    )
  }

 const renderDetail = () => {
    switch (data.extra) {
      case 'Country':
        return <CountryCard data={data} />
      case 'Airline':
        return <AirlineCard data={data} />
      case 'Airport':
        return <AirportCard data={data} />
      case 'City':
        return <CityCard data={data} />
      case 'Aviation Alphabet':
        return <AlphabetCard data={data} />
      default:
        return <div className="text-sm">No details available.</div>
    }
  }

  // Pick a place name to use in the map link
  // (fallback to data.name if no better option)
  const placeName =
    data.name ||
    data.city ||
    data.airportName || // example, depends on your data shape
    data.officialName ||
    ''

  return (
    <div className="p-4 border rounded-md shadow bg-white dark:bg-gray-800">
      <h2 className="text-xl font-semibold mb-2">
        {data.flag ? `${data.flag} ` : ''}{data.name}
      </h2>
      <p className="text-sm text-gray-500 mb-2">{data.extra}</p>
      {renderDetail()}

      {placeName && <MapLink placeName={placeName} />}
    </div>
  )
}
