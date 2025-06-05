'use client'

import GlossarySection from '@/components/glossary/GlossarySection'
import { countries } from '@/data/countries'
import { airlines } from '@/data/airlines'
import { airports } from '@/data/airports'
import { cities } from '@/data/cities'
import { aviationAlphabet } from '@/data/alphabet'

export default function GlossaryPage() {
  return (
    <div className="max-w-4xl mx-auto p-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded">
      {/* Navigation */}
     

      <h1 className="text-2xl font-bold mb-6">Glossary</h1>

      <GlossarySection title="Countries" data={countries} type="country" />
      <GlossarySection title="Airlines" data={airlines} type="airline" />
      <GlossarySection title="Airports" data={airports} type="airport" />
      <GlossarySection title="Cities" data={cities} type="city" />
      <GlossarySection title="Aviation Alphabet" data={aviationAlphabet} type="alphabet" />
    </div>
  )
}
