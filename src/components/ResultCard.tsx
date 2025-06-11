'use client'

import { useState, useEffect } from 'react'
import CountryCard from './resultCards/CountryCard'
import AirlineCard from './resultCards/AirlineCard'
import AirportCard from './resultCards/AirportCard'
import CityCard from './resultCards/CityCard'
import AlphabetCard from './resultCards/AlphabetCard'
import {
  addFavorite,
  removeFavorite,
  isFavorite,
} from '@/utils/favorites'

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
  const [fav, setFav] = useState(false)

  useEffect(() => {
    if (data?.code) {
      setFav(isFavorite(data.code))
    }
  }, [data])

  const toggleFavorite = () => {
    if (!data?.code) return
    if (fav) {
      removeFavorite(data.code)
      setFav(false)
    } else {
      addFavorite(data)
      setFav(true)
    }
  }

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

  const placeName =
    data.name || data.city || data.airportName || data.officialName || ''

  return (
   <div>
  <div className="flex justify-between items-start mb-2">
    <div>
      <h2>{data.flag ? `${data.flag} ` : ''}{data.name}</h2>
      <p>{data.extra}</p>
    </div>
    <button onClick={toggleFavorite} aria-label={fav ? 'Remove from favorites' : 'Add to favorites'}>
      {fav ? '★' : '☆'}
    </button>
  </div>

  <div>
    {renderDetail()}
  </div>

  {placeName && (
    <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(placeName)}`} target="_blank" rel="noopener noreferrer">
      📍 View "{placeName}" on Google Maps
    </a>
  )}
</div>

  )
}
