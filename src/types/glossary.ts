// types/glossary.ts
export type CountryItem = { name: string; code: string }
export type AirlineItem = { name: string; iata?: string }
export type AirportItem = { name: string; code: string }
export type CityItem = { name: string; country: string }
export type AlphabetItem = { letter: string; word: string }

export type GlossaryItemType =
  | { type: 'country'; item: CountryItem }
  | { type: 'airline'; item: AirlineItem }
  | { type: 'airport'; item: AirportItem }
  | { type: 'city'; item: CityItem }
  | { type: 'alphabet'; item: AlphabetItem }
