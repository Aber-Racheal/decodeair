// // src/components/RandomCodes.tsx
// 'use client'

// import { useEffect, useState } from 'react'
// import { countries } from '@/data/countries'
// import { airlines } from '@/data/airlines'
// import { airports } from '@/data/airports'
// import { cities } from '@/data/cities'
// import { aviationAlphabet } from '@/data/alphabet'
// import ResultCard from './ResultCard'

// const allData = [
//   ...countries.map(c => ({ ...c, extra: 'Country' })),
//   ...airlines.map(a => ({ ...a, extra: 'Airline' })),
//   ...airports.map(a => ({ ...a, extra: 'Airport' })),
//   ...cities.map(c => ({ ...c, extra: 'City' })),
//   ...aviationAlphabet.map(a => ({ ...a, extra: 'Aviation Alphabet' })),
// ]

// function getRandomItems<T>(arr: T[], count: number): T[] {
//   const shuffled = arr.slice().sort(() => 0.5 - Math.random())
//   return shuffled.slice(0, count)
// }

// export default function RandomCodes() {
//   const [codes, setCodes] = useState<typeof allData>([])

//   useEffect(() => {
//     setCodes(getRandomItems(allData, 3))
//   }, [])

//   return (
//     <section className="randomcodes max-w-4xl mx-auto p-4">
//       <h2 className="text-2xl font-bold mb-4">Random 5 Codes of the Day</h2>
//       <div className="space-y-6 flex flex-row">
//         {codes.map((code, idx) => (
//           <ResultCard key={idx} data={code} />
//         ))}
//       </div>
//     </section>
//   )
// }
