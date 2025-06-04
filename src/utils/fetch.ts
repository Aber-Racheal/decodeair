// // src/utils/fetch.ts
// import { CountryAPIResponse } from '@/types'

// export async function fetchCountryByCode(code: string) {
//   try {
//     const normalizedCode = code.trim().toUpperCase()
//     const url = `https://restcountries.com/v3.1/alpha/${normalizedCode}?fields=name,flags,flag,capital,region,subregion,idd,currencies,languages,demonyms,cca2`

//     console.log('Fetching country from:', url)

//     const res = await fetch(url)

//     if (!res.ok) {
//       throw new Error(`API Error: ${res.status}`)
//     }

//     const country: CountryAPIResponse = await res.json()

//     return {
//       name: country.name.common,
//       officialName: country.name.official,
//       flag: country.flag, // This is the Unicode flag emoji
//       flagUrl: country.flags.svg || country.flags.png,
//       capital: country.capital?.[0] || 'N/A',
//       region: country.region,
//       subregion: country.subregion,
//       callingCode: `${country.idd.root}${country.idd.suffixes?.[0] || ''}`,
//       currency: Object.values(country.currencies || {})[0]?.name || 'N/A',
//       language: Object.values(country.languages || {})[0] || 'N/A',
//       demonym: country.demonyms?.eng?.m || 'N/A',
//       code: country.cca2,
//     }
//   } catch (err) {
//     console.error('Failed to fetch country:', err)
//     return null
//   }
// }
