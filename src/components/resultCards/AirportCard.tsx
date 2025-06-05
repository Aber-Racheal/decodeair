// src/components/resultCards/AirportCard.tsx
'use client'

import { useState } from 'react'

type Props = {
  data: any
}

export default function AirportCard({ data }: Props) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div 
      className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white via-blue-50/30 to-orange-50/20 border border-blue-100 shadow-lg hover:shadow-2xl transition-all duration-500 ease-out transform hover:scale-[1.02] hover:-translate-y-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-transparent to-orange-500 transform rotate-12 scale-150"></div>
      </div>
      
      {/* Airport badge */}
      <div className="absolute top-3 right-3">
        <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs px-3 py-1 rounded-full font-semibold tracking-wide shadow-md flex items-center space-x-1">
          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"/>
          </svg>
          <span>AIRPORT</span>
        </div>
      </div>

      <div className="relative p-6 space-y-5">
        {/* Airport code display */}
        <div className="flex items-center space-x-4">
          <div 
            className="w-20 h-20 rounded-2xl flex items-center justify-center text-2xl font-black text-white shadow-xl transition-all duration-300 relative overflow-hidden"
            style={{ 
              backgroundColor: isHovered ? '#FF6B35' : '#002C5F',
              transform: isHovered ? 'rotate(-5deg) scale(1.05)' : 'rotate(0deg) scale(1)'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
            <span className="relative z-10">{data.code}</span>
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-800 mb-1 group-hover:text-blue-600 transition-colors duration-300">
              {data.name}
            </h3>
            <p className="text-sm text-gray-600 font-medium">Airport Code</p>
          </div>
        </div>

        {/* Location information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-4 border border-blue-100 group-hover:border-blue-300 transition-all duration-300">
            <div className="flex items-center space-x-2 mb-2">
              <div className="w-2 h-2 rounded-full bg-blue-500"></div>
              <p className="text-xs font-semibold text-gray-600 uppercase tracking-wide">City</p>
            </div>
            <p className="text-lg font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
              {data.city}
            </p>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-white rounded-xl p-4 border border-orange-100 group-hover:border-orange-300 transition-all duration-300">
            <div className="flex items-center space-x-2 mb-2">
              <div className="w-2 h-2 rounded-full bg-orange-500"></div>
              <p className="text-xs font-semibold text-gray-600 uppercase tracking-wide">Country</p>
            </div>
            <p className="text-lg font-bold text-gray-800 group-hover:text-orange-600 transition-colors duration-300">
              {data.country}
            </p>
          </div>
        </div>

        {/* Interactive footer */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <span>Active</span>
          </div>
          <div 
            className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer"
            style={{ 
              backgroundColor: isHovered ? '#FF6B35' : '#007BFF',
              transform: isHovered ? 'rotate(180deg)' : 'rotate(0deg)'
            }}
          >
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>

        {/* Progress bar animation */}
        <div className="h-1 bg-gray-100 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-blue-500 to-orange-500 rounded-full transform origin-left transition-all duration-700 ease-out"
            style={{ 
              transform: isHovered ? 'scaleX(1)' : 'scaleX(0)' 
            }}
          ></div>
        </div>
      </div>
    </div>
  )
}

// // src/components/resultCards/AirportCard.tsx
// type Props = {
//   data: any
// }

// export default function AirportCard({ data }: Props) {
//   return (
//     <div className="text-sm space-y-1">
//       <p><strong>Code:</strong> {data.code}</p>
//       <p><strong>Name:</strong> {data.name}</p>
//       <p><strong>City:</strong> {data.city}</p>
//       <p><strong>Country:</strong> {data.country}</p>
//     </div>
//   )
// }
