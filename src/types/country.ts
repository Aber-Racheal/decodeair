// src/types/country.ts
export interface Country {
  name: string            // Common name e.g. "Uganda"
  fullName: string        // Official name e.g. "Republic of Uganda"
  code: string            // Alpha-2 (UG)
  codes?: string[]        // Optionally include cca3, cioc etc.
  currency: string        // Name of currency e.g. "Ugandan Shilling"
  demonym: string         // e.g. "Ugandan"
  language: string        // e.g. "English"
  capital: string         // e.g. "Kampala"
  callingCode: string     // e.g. "+256"
  region: string          // e.g. "Africa"
  subregion: string       // e.g. "Eastern Africa"
  flag: string            // Emoji 🇺🇬
  flagUrl?: string        // Optional SVG if you want a visual flag
}
