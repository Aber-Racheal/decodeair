// src/components/resultCards/CityCard.tsx
'use client'

import { useState, useEffect } from 'react'

type Props = {
  data: any
}

export default function CityCard({ data }: Props) {
  const [isHovered, setIsHovered] = useState(false)
  const [animationPhase, setAnimationPhase] = useState(0)

  useEffect(() => {
    if (isHovered) {
      const timer = setTimeout(() => setAnimationPhase(1), 200)
      return () => clearTimeout(timer)
    } else {
      setAnimationPhase(0)
    }
  }, [isHovered])

  return (
    <div 
      className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white via-gray-50/50 to-blue-50/30 border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 ease-out transform hover:scale-[1.02] hover:-translate-y-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated mesh background */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-all duration-1000">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 via-purple-400/10 to-orange-400/20"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #007BFF20 0%, transparent 50%), 
                           radial-gradient(circle at 75% 75%, #FF6B3520 0%, transparent 50%)`
        }}></div>
      </div>
      
      {/* City badge */}
      <div className="absolute top-4 right-4 z-10">
        <div 
          className="text-white text-xs px-4 py-2 rounded-full font-semibold tracking-wider shadow-lg flex items-center space-x-2 transition-all duration-300"
          style={{ 
            background: isHovered 
              ? 'linear-gradient(135deg, #FF6B35, #FF8A65)' 
              : 'linear-gradient(135deg, #007BFF, #0056CC)'
          }}
        >
          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
          </svg>
          <span>CITY</span>
        </div>
      </div>

      <div className="relative p-6 space-y-6">
        {/* City name display */}
        <div className="flex items-center space-x-5">
          <div 
            className="w-16 h-16 rounded-full flex items-center justify-center text-white shadow-xl transition-all duration-500 relative overflow-hidden"
            style={{ 
              background: isHovered 
                ? 'linear-gradient(135deg, #FF6B35, #FF8A65)' 
                : 'linear-gradient(135deg, #002C5F, #004085)',
              transform: isHovered ? 'rotate(10deg) scale(1.1)' : 'rotate(0deg) scale(1)'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent"></div>
            <span className="relative z-10 text-xl font-bold">
              {data.name.charAt(0)}
            </span>
            {/* Floating particles */}
            <div 
              className="absolute w-1 h-1 bg-white rounded-full transition-all duration-700"
              style={{
                top: '20%',
                right: '25%',
                opacity: isHovered ? 1 : 0,
                transform: isHovered ? 'translate(8px, -8px)' : 'translate(0, 0)'
              }}
            ></div>
            <div 
              className="absolute w-1 h-1 bg-white rounded-full transition-all duration-700 delay-100"
              style={{
                bottom: '30%',
                left: '20%',
                opacity: isHovered ? 1 : 0,
                transform: isHovered ? 'translate(-6px, 6px)' : 'translate(0, 0)'
              }}
            ></div>
          </div>
          
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
              {data.name}
            </h3>
            <div className="flex items-center space-x-2">
              <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-orange-500 rounded-full"></div>
              <p className="text-sm text-gray-600 font-medium">Metropolitan Area</p>
            </div>
          </div>
        </div>

        {/* Country information */}
        <div className="relative">
          <div 
            className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-5 border-l-4 transition-all duration-300 transform"
            style={{ 
              borderColor: isHovered ? '#FF6B35' : '#007BFF',
              transform: animationPhase ? 'translateX(8px)' : 'translateX(0)'
            }}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-gray-600 mb-2 uppercase tracking-wide">
                  Located in
                </p>
                <p className="text-2xl font-bold transition-colors duration-300" 
                   style={{ color: isHovered ? '#FF6B35' : '#002C5F' }}>
                  {data.country}
                </p>
              </div>
              
              {/* Animated icon */}
              <div 
                className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300"
                style={{ 
                  backgroundColor: isHovered ? '#FF6B35' : '#007BFF',
                  transform: isHovered ? 'rotate(360deg) scale(1.1)' : 'rotate(0deg) scale(1)'
                }}
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                </svg>
              </div>
            </div>
          </div>
          
          {/* Connecting line animation */}
          <div 
            className="absolute left-6 -bottom-2 w-0.5 h-4 bg-gradient-to-b from-gray-300 to-transparent transition-all duration-500"
            style={{ 
              backgroundColor: isHovered ? '#FF6B35' : '#007BFF',
              transform: isHovered ? 'scaleY(1)' : 'scaleY(0)',
              transformOrigin: 'top'
            }}
          ></div>
        </div>

        {/* Interactive wave animation */}
        <div className="relative h-2 bg-gray-100 rounded-full overflow-hidden">
          <div 
            className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 rounded-full transition-all duration-1000 ease-out"
            style={{ 
              transform: isHovered ? 'translateX(0%)' : 'translateX(-100%)',
              background: isHovered 
                ? 'linear-gradient(90deg, #007BFF, #8A2BE2, #FF6B35)' 
                : 'linear-gradient(90deg, #007BFF, #0056CC)'
            }}
          ></div>
        </div>
      </div>
    </div>
  )
}

// // src/components/resultCards/CityCard.tsx
// type Props = {
//   data: any
// }

// export default function CityCard({ data }: Props) {
//   return (
//     <div className="text-sm space-y-1">
//       <p><strong>Name:</strong> {data.name}</p>
//       <p><strong>Country:</strong> {data.country}</p>
//     </div>
//   )
// }
