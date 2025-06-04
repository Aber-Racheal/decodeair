// src/components/glossary/GlossarySection.tsx
'use client'

import { useState } from 'react'
import GlossaryItem from './GlossaryItem'
import GlossaryFilter from './GlossaryFilter'

type Props = {
  title: string
  data: any[]
  type: string
}

export default function GlossarySection({ title, data, type }: Props) {
  const [query, setQuery] = useState('')

  const filtered = data.filter(item =>
    Object.values(item)
      .join(' ')
      .toLowerCase()
      .includes(query.toLowerCase())
  )

  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <GlossaryFilter query={query} setQuery={setQuery} />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
        {filtered.map((item, idx) => (
          <GlossaryItem key={idx} item={item} type={type} />
        ))}
      </div>
    </div>
  )
}
