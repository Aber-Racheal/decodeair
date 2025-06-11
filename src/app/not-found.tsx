'use client'

import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center">
      <h1 className="text-5xl font-bold mb-4 text-gray-900 dark:text-white">404</h1>
      <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
        Oops! The page you’re looking for doesn’t exist.
      </p>
      <Link
        href="/"
        className="text-blue-600 hover:underline dark:text-blue-400 font-semibold"
      >
        Go back home
      </Link>
    </div>
  )
}





// 'use client'
// import { useState, useEffect, useRef } from 'react'
// import Link from 'next/link'

// export default function NotFound() {
//   const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
//   const [particles, setParticles] = useState([])
//   const [glitchActive, setGlitchActive] = useState(false)
//   const containerRef = useRef(null)
//   const intervalRef = useRef(null)

//   // Mouse tracking for interactive effects
//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       if (containerRef.current) {
//         const rect = containerRef.current.getBoundingClientRect()
//         setMousePos({
//           x: ((e.clientX - rect.left) / rect.width - 0.5) * 20,
//           y: ((e.clientY - rect.top) / rect.height - 0.5) * 20
//         })
//       }
//     }

//     window.addEventListener('mousemove', handleMouseMove)
//     return () => window.removeEventListener('mousemove', handleMouseMove)
//   }, [])

//   // Particle system
//   useEffect(() => {
//     const createParticle = () => ({
//       id: Math.random(),
//       x: Math.random() * 100,
//       y: Math.random() * 100,
//       size: Math.random() * 4 + 1,
//       speedX: (Math.random() - 0.5) * 0.5,
//       speedY: (Math.random() - 0.5) * 0.5,
//       opacity: Math.random() * 0.5 + 0.2,
//       life: 100
//     })

//     // Initialize particles
//     const initialParticles = Array.from({ length: 50 }, createParticle)
//     setParticles(initialParticles)

//     // Animate particles
//     intervalRef.current = setInterval(() => {
//       setParticles(prev => prev.map(particle => ({
//         ...particle,
//         x: (particle.x + particle.speedX + 100) % 100,
//         y: (particle.y + particle.speedY + 100) % 100,
//         life: particle.life - 1
//       })).filter(p => p.life > 0).concat(
//         Math.random() < 0.3 ? [createParticle()] : []
//       ))
//     }, 50)

//     return () => {
//       if (intervalRef.current) clearInterval(intervalRef.current)
//     }
//   }, [])

//   // Glitch effect trigger
//   useEffect(() => {
//     const glitchInterval = setInterval(() => {
//       if (Math.random() < 0.1) {
//         setGlitchActive(true)
//         setTimeout(() => setGlitchActive(false), 200)
//       }
//     }, 2000)

//     return () => clearInterval(glitchInterval)
//   }, [])

//   const handleExploreClick = () => {
//     // Create explosion effect
//     const explosionParticles = Array.from({ length: 30 }, () => ({
//       id: Math.random(),
//       x: 50,
//       y: 60,
//       size: Math.random() * 6 + 2,
//       speedX: (Math.random() - 0.5) * 4,
//       speedY: (Math.random() - 0.5) * 4,
//       opacity: 1,
//       life: 50,
//       color: `hsl(${Math.random() * 60 + 300}, 70%, 60%)`
//     }))
    
//     setParticles(prev => [...prev, ...explosionParticles])
//   }

//   return (
//     <div 
//       ref={containerRef}
//       className="relative min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 overflow-hidden"
//       style={{
//         background: `
//           radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
//           radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%),
//           radial-gradient(circle at 40% 40%, rgba(120, 219, 255, 0.2) 0%, transparent 50%),
//           linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #1e3a8a 100%)
//         `
//       }}
//     >
//       {/* Animated background particles */}
//       <div className="absolute inset-0 pointer-events-none">
//         {particles.map(particle => (
//           <div
//             key={particle.id}
//             className="absolute rounded-full bg-white"
//             style={{
//               left: `${particle.x}%`,
//               top: `${particle.y}%`,
//               width: `${particle.size}px`,
//               height: `${particle.size}px`,
//               opacity: particle.opacity,
//               background: particle.color || 'rgba(255, 255, 255, 0.6)',
//               boxShadow: particle.color ? `0 0 ${particle.size * 2}px ${particle.color}` : '0 0 10px rgba(255, 255, 255, 0.5)',
//               animation: particle.color ? 'pulse 0.5s ease-out' : 'none'
//             }}
//           />
//         ))}
//       </div>

//       {/* Floating geometric shapes */}
//       <div className="absolute inset-0 pointer-events-none">
//         <div 
//           className="absolute top-1/4 left-1/4 w-20 h-20 border-2 border-purple-400 rotate-45 opacity-20"
//           style={{
//             transform: `rotate(${45 + mousePos.x}deg) translate(${mousePos.x}px, ${mousePos.y}px)`,
//             transition: 'transform 0.1s ease-out'
//           }}
//         />
//         <div 
//           className="absolute top-3/4 right-1/4 w-16 h-16 border-2 border-blue-400 rounded-full opacity-20"
//           style={{
//             transform: `translate(${-mousePos.x}px, ${-mousePos.y}px)`,
//             transition: 'transform 0.1s ease-out'
//           }}
//         />
//         <div 
//           className="absolute top-1/2 right-1/3 w-12 h-12 bg-pink-400 opacity-10 rotate-12"
//           style={{
//             transform: `rotate(${12 + mousePos.x * 2}deg) translate(${mousePos.x * 0.5}px, ${mousePos.y * 0.5}px)`,
//             transition: 'transform 0.1s ease-out'
//           }}
//         />
//       </div>

//       {/* Main content */}
//       <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4 text-center">
        
//         {/* Glitch effect overlay */}
//         {glitchActive && (
//           <div className="absolute inset-0 bg-red-500 opacity-10 animate-pulse pointer-events-none" />
//         )}

//         {/* Main 404 number with parallax effect */}
//         <div 
//           className="relative mb-8"
//           style={{
//             transform: `translate(${mousePos.x * 0.5}px, ${mousePos.y * 0.5}px)`,
//             transition: 'transform 0.1s ease-out'
//           }}
//         >
//           <h1 
//             className={`text-8xl md:text-9xl font-black mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent select-none ${
//               glitchActive ? 'animate-bounce' : ''
//             }`}
//             style={{
//               textShadow: '0 0 30px rgba(168, 85, 247, 0.5), 0 0 60px rgba(168, 85, 247, 0.3)',
//               filter: glitchActive ? 'hue-rotate(180deg) saturate(2)' : 'none'
//             }}
//           >
//             404
//           </h1>
          
//           {/* Floating text elements */}
//           <div className="absolute -top-4 -right-4 text-sm text-purple-300 opacity-60 animate-pulse">
//             ERROR
//           </div>
//           <div className="absolute -bottom-2 -left-4 text-xs text-blue-300 opacity-40 animate-pulse delay-500">
//             NOT_FOUND
//           </div>
//         </div>

//         {/* Animated subtitle */}
//         <div 
//           className="relative mb-8 max-w-2xl"
//           style={{
//             transform: `translate(${-mousePos.x * 0.3}px, ${-mousePos.y * 0.3}px)`,
//             transition: 'transform 0.1s ease-out'
//           }}
//         >
//           <p className="text-xl md:text-2xl mb-4 text-gray-200 leading-relaxed">
//             <span className="inline-block animate-pulse delay-100">🚀</span>
//             {" "}Oops! You've drifted into the void of cyberspace
//           </p>
//           <p className="text-lg text-gray-300 opacity-80">
//             The page you're searching for has vanished into the digital ether
//           </p>
//         </div>

//         {/* Interactive buttons */}
//         <div className="flex flex-col sm:flex-row gap-4 items-center">
//           <Link
//             href="/"
//             className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-purple-300"
//             style={{
//               boxShadow: '0 0 20px rgba(168, 85, 247, 0.3)'
//             }}
//           >
//             <span className="relative z-10 flex items-center gap-2">
//               🏠 Return Home
//             </span>
//             <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//           </Link>

//           <button
//             onClick={handleExploreClick}
//             className="group relative px-8 py-4 border-2 border-purple-400 text-purple-300 font-semibold rounded-full transition-all duration-300 hover:bg-purple-400 hover:text-white hover:scale-105 focus:outline-none focus:ring-4 focus:ring-purple-300"
//           >
//             <span className="flex items-center gap-2">
//               ✨ Create Magic
//             </span>
//           </button>
//         </div>

//         {/* Fun interactive elements */}
//         <div className="mt-12 text-sm text-gray-400 max-w-md text-center">
//           <p className="mb-2">💡 Move your mouse around to interact with the environment</p>
//           <p className="opacity-60">Watch for glitch effects and particle explosions!</p>
//         </div>

//         {/* Status indicators */}
//         <div className="absolute bottom-8 left-8 flex flex-col gap-2 text-xs text-gray-500">
//           <div className="flex items-center gap-2">
//             <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
//             <span>STATUS: PAGE_NOT_FOUND</span>
//           </div>
//           <div className="flex items-center gap-2">
//             <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse delay-500" />
//             <span>SYSTEM: OPERATIONAL</span>
//           </div>
//         </div>

//         {/* Mouse coordinates display */}
//         <div className="absolute bottom-8 right-8 text-xs text-gray-500 font-mono">
//           <div>X: {Math.round(mousePos.x)}</div>
//           <div>Y: {Math.round(mousePos.y)}</div>
//         </div>
//       </div>

//       {/* Custom styles for animations */}
//       <style jsx>{`
//         @keyframes pulse {
//           0% { transform: scale(1); opacity: 1; }
//           50% { transform: scale(1.2); opacity: 0.8; }
//           100% { transform: scale(1); opacity: 0.4; }
//         }
//       `}</style>
//     </div>
//   )
// }