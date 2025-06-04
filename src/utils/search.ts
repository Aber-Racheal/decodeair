// src/utils/search.ts

import { countries } from '@/data/countries'
import { airlines } from '@/data/airlines'
import { airports } from '@/data/airports'
import { cities } from '@/data/cities'
import { aviationAlphabet } from '@/data/alphabet'

export function searchQuery(query: string) {
  const q = query.trim().toLowerCase()

  const find = (arr: any[], fields: string[]) =>
    arr.find(item => fields.some(field =>
      item[field]?.toLowerCase?.() === q || item[field]?.toLowerCase?.().includes(q)
    ))

  // Match full country data
  const country = find(countries, ['code', 'name', 'fullName', 'capital', 'callingCode', 'region', 'subregion'])
  if (country) return { ...country, extra: 'Country' }

  // Match airline
  const airline = find(airlines, ['iata', 'icao', 'name'])
  if (airline) return { ...airline, extra: 'Airline' }

  // Match airport
  const airport = find(airports, ['code', 'name'])
  if (airport) return { ...airport, extra: 'Airport' }

  // Match city
  const city = find(cities, ['name'])
  if (city) return { ...city, extra: 'City' }

  // Match aviation alphabet
  const alpha = find(aviationAlphabet, ['letter', 'word'])
  if (alpha) return { ...alpha, extra: 'Aviation Alphabet' }

  return null
}

export function getSuggestions(input: string): string[] {
  const q = input.trim().toLowerCase()

  const all = [
    ...countries.map(c => c.name),
    ...countries.map(c => c.code),
    ...airlines.map(a => a.name),
    ...airlines.map(a => a.iata),
    ...airports.map(a => a.name),
    ...airports.map(a => a.code),
    ...cities.map(c => c.name),
    ...aviationAlphabet.map(a => a.word),
    ...aviationAlphabet.map(a => a.letter),
  ]

  const unique = [...new Set(all)]
  return unique
    .filter(item => item.toLowerCase().includes(q))
    .slice(0, 6) // limit to 6 suggestions
}
