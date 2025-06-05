// src/components/resultCards/CountryCard.tsx
'use client'

import { useState, useEffect } from 'react'

type Props = {
  data: any
}

export default function CountryCard({ data }: Props) {
  const [isHovered, setIsHovered] = useState(false)
  const [expandedDetail, setExpandedDetail] = useState<string | null>(null)

  const details = [
    { key: 'capital', label: 'Capital', value: data.capital, icon: '🏛️' },
    { key: 'region', label: 'Region', value: `${data.region} (${data.subregion})`, icon: '🌍' },
    { key: 'currency', label: 'Currency', value: data.currency, icon: '💰' },
    { key: 'language', label: 'Language', value: data.language, icon: '🗣️' },
    { key: 'callingCode', label: 'Calling Code', value: data.callingCode, icon: '📞' },
    { key: 'demonym', label: 'Demonym', value: data.demonym, icon: '👥' }
  ]

  return (
    <div 
      className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white via-blue-50/30 to-orange-50/20 border border-blue-100 shadow-xl hover:shadow-2xl transition-all duration-700 ease-out transform hover:scale-[1.01] hover:-translate-y-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated background overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-purple-600/5 to-orange-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
      
      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-32 h-32 rounded-full bg-gradient-to-br from-blue-400/10 to-transparent transition-all duration-1000"
          style={{
            top: '-10%',
            right: '-5%',
            transform: isHovered ? 'translate(-20px, 20px) rotate(45deg)' : 'translate(0, 0) rotate(0deg)'
          }}
        ></div>
        <div 
          className="absolute w-24 h-24 rounded-full bg-gradient-to-br from-orange-400/10 to-transparent transition-all duration-1000 delay-200"
          style={{
            bottom: '-5%',
            left: '-5%',
            transform: isHovered ? 'translate(15px, -15px) rotate(-30deg)' : 'translate(0, 0) rotate(0deg)'
          }}
        ></div>
      </div>

      {/* Country badge */}
      <div className="absolute top-4 right-4 z-20">
        <div 
          className="text-white text-xs px-4 py-2 rounded-full font-bold tracking-wider shadow-lg flex items-center space-x-2 transition-all duration-300"
          style={{ 
            background: isHovered 
              ? 'linear-gradient(135deg, #FF6B35, #FF8A65)' 
              : 'linear-gradient(135deg, #002C5F, #004085)'
          }}
        >
          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" clipRule="evenodd"/>
          </svg>
          <span>COUNTRY</span>
        </div>
      </div>

      <div className="relative p-6 space-y-6">
        {/* Country header */}
        <div className="flex items-center space-x-5">
          <div 
            className="w-20 h-20 rounded-2xl flex items-center justify-center text-white shadow-2xl transition-all duration-500 relative overflow-hidden"
            style={{ 
              background: isHovered 
                ? 'linear-gradient(135deg, #FF6B35, #FF8A65, #FFB74D)' 
                : 'linear-gradient(135deg, #002C5F, #004085, #007BFF)',
              transform: isHovered ? 'rotate(-10deg) scale(1.05)' : 'rotate(0deg) scale(1)'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-white/10 to-transparent"></div>
            <span className="relative z-10 text-2xl font-black">
              {data.fullName.charAt(0)}
            </span>
          </div>
          
          <div className="flex-1">
            <h3 className="text-2xl font-black text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300 leading-tight">
              {data.fullName}
            </h3>
            <div className="flex items-center space-x-3">
              <div className="h-1 w-16 bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 rounded-full"></div>
              <p className="text-sm text-gray-600 font-semibold">Nation Profile</p>
            </div>
          </div>
        </div>

        {/* Details grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {details.map((detail, index) => (
            <div 
              key={detail.key}
              className="group/detail relative bg-gradient-to-br from-white to-gray-50/80 rounded-2xl p-4 border border-gray-100 hover:border-blue-300 transition-all duration-300 cursor-pointer transform hover:scale-[1.02]"
              onClick={() => setExpandedDetail(expandedDetail === detail.key ? null : detail.key)}
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              <div className="flex items-center space-x-3">
                <div 
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-lg transition-all duration-300"
                  style={{ 
                    backgroundColor: expandedDetail === detail.key ? '#FF6B35' : '#007BFF',
                    transform: expandedDetail === detail.key ? 'rotate(180deg) scale(1.1)' : 'rotate(0deg) scale(1)'
                  }}
                >
                  <span className="text-white font-bold text-sm">
                    {detail.icon}
                  </span>
                </div>
                
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-bold text-gray-600 uppercase tracking-wider mb-1">
                    {detail.label}
                  </p>
                  <p 
                    className="text-sm font-bold transition-colors duration-300 truncate"
                    style={{ 
                      color: expandedDetail === detail.key ? '#FF6B35' : '#002C5F'
                    }}
                  >
                    {detail.value}
                  </p>
                </div>

                <div 
                  className="w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300"
                  style={{ 
                    backgroundColor: expandedDetail === detail.key ? '#FF6B35' : '#007BFF',
                    transform: expandedDetail === detail.key ? 'rotate(180deg)' : 'rotate(0deg)'
                  }}
                >
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>

              {/* Expanded state animation */}
              <div 
                className="overflow-hidden transition-all duration-300"
                style={{ 
                  maxHeight: expandedDetail === detail.key ? '100px' : '0px',
                  opacity: expandedDetail === detail.key ? 1 : 0
                }}
              >
                <div className="pt-3 mt-3 border-t border-gray-200">
                  <p className="text-xs text-gray-600">
                    Detailed information about {detail.label.toLowerCase()} of {data.fullName}
                  </p>
                </div>
              </div>

              {/* Hover effect line */}
              <div 
                className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-orange-500 rounded-full transform origin-left scale-x-0 group-hover/detail:scale-x-100 transition-transform duration-300"
              ></div>
            </div>
          ))}
        </div>

        {/* Interactive status bar */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-xs font-semibold text-gray-600">Active Nation</span>
            </div>
            <div className="text-xs text-gray-500">
              {details.length} data points
            </div>
          </div>
          
          <div 
            className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer shadow-lg"
            style={{ 
              backgroundColor: isHovered ? '#FF6B35' : '#007BFF',
              transform: isHovered ? 'rotate(360deg) scale(1.1)' : 'rotate(0deg) scale(1)'
            }}
          >
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </div>
        </div>

        {/* Progress indicator */}
        <div className="relative h-2 bg-gray-100 rounded-full overflow-hidden">
          <div 
            className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 rounded-full transition-all duration-1000 ease-out"
            style={{ 
              transform: isHovered ? 'translateX(0%)' : 'translateX(-100%)'
            }}
          ></div>
          {/* Shimmer effect */}
          <div 
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 transition-all duration-1000"
            style={{ 
              transform: isHovered ? 'translateX(200%)' : 'translateX(-100%) skew(-12deg)'
            }}
          ></div>
        </div>
      </div>
    </div>
  )
}

// // src/components/resultCards/CountryCard.tsx
// type Props = {
//   data: any
// }

// export default function CountryCard({ data }: Props) {
//   return (
//     <div className="space-y-1 text-sm">
//       <p><strong>Full Name:</strong> {data.fullName}</p>
//       <p><strong>Capital:</strong> {data.capital}</p>
//       <p><strong>Region:</strong> {data.region} ({data.subregion})</p>
//       <p><strong>Currency:</strong> {data.currency}</p>
//       <p><strong>Language:</strong> {data.language}</p>
//       <p><strong>Calling Code:</strong> {data.callingCode}</p>
//       <p><strong>Demonym:</strong> {data.demonym}</p>
//     </div>
//   )
// }
