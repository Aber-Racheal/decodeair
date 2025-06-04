// src/types/index.ts

export type Country = {
  code: string
  name: string
  flag: string
}

export type Airline = {
  iata: string
  icao: string
  name: string
}

export type Airport = {
  code: string
  name: string
  country: string
}

export type City = {
  name: string
  countryCode: string
  airportCode: string
}

export type Alphabet = {
  letter: string
  word: string
}
// src/types/index.ts

export interface CountryAPIResponse {
  nativeName: any
  callingCodes: any
  alpha2Code: any
  name: {
    common: string
    official: string
  }
  flags: {
    svg: string
    png: string
  }
  flag: string
  capital: string[]
  region: string
  subregion: string
  idd: {
    root: string
    suffixes: string[]
  }
  currencies: {
    [key: string]: {
      name: string
      symbol: string
    }
  }
  languages: {
    [key: string]: string
  }
  demonyms: {
    eng: {
      f: string
      m: string
    }
  }
  cca2: string
}
