// src/components/resultCards/AlphabetCard.tsx
'use client'

import { useState } from 'react'

type Props = {
  data: any
}

export default function AlphabetCard({ data }: Props) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div 
      className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-blue-50 border border-blue-100 shadow-lg hover:shadow-2xl transition-all duration-500 ease-out transform hover:scale-[1.02] hover:-translate-y-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        '--sky-blue': '#007BFF',
        '--navy-blue': '#002C5F',
        '--sunset-orange': '#FF6B35'
      } as React.CSSProperties}
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 transform translate-x-[-100%] group-hover:translate-x-[100%] animation-duration-1000"></div>
      
      {/* Aviation badge */}
      <div className="absolute top-3 right-3">
        <div className="bg-gradient-to-r from-sky-500 to-blue-600 text-white text-xs px-3 py-1 rounded-full font-semibold tracking-wide shadow-md">
          AVIATION
        </div>
      </div>

      <div className="relative p-6 space-y-4">
        {/* Letter display */}
        <div className="flex items-center space-x-4">
          <div 
            className="w-16 h-16 rounded-xl flex items-center justify-center text-2xl font-bold text-white shadow-lg transition-all duration-300"
            style={{ 
              backgroundColor: isHovered ? '#FF6B35' : '#007BFF',
              transform: isHovered ? 'rotate(5deg) scale(1.1)' : 'rotate(0deg) scale(1)'
            }}
          >
            {data.letter}
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-bold text-gray-800 mb-1 group-hover:text-blue-600 transition-colors duration-300">
              Letter Code
            </h3>
            <p className="text-sm text-gray-600">Aviation Alphabet</p>
          </div>
        </div>

        {/* Word display */}
        <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-4 border-l-4 border-blue-500 group-hover:border-orange-500 transition-all duration-300">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 mb-1">Phonetic Word</p>
              <p className="text-xl font-bold text-gray-800 group-hover:text-orange-600 transition-colors duration-300">
                {data.word}
              </p>
            </div>
            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center group-hover:bg-orange-100 transition-all duration-300">
              <svg className="w-4 h-4 text-blue-600 group-hover:text-orange-600 transition-colors duration-300" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Animated underline */}
        <div className="h-1 bg-gradient-to-r from-blue-500 to-orange-500 rounded-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"></div>
      </div>
    </div>
  )
}

// // src/components/resultCards/AlphabetCard.tsx
// type Props = {
//   data: any
// }

// export default function AlphabetCard({ data }: Props) {
//   return (
//     <div className="text-sm space-y-1">
//       <p><strong>Letter:</strong> {data.letter}</p>
//       <p><strong>Word:</strong> {data.word}</p>
//     </div>
//   )
// }
