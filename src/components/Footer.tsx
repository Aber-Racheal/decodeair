// src/components/Footer.tsx
'use client'

import { useState } from 'react'

export default function Footer() {
  const [hoveredSection, setHoveredSection] = useState<string | null>(null)

  const footerSections = [
    {
      title: 'Product',
      links: ['Search Codes', 'Aviation Database', 'Airport Lookup', 'Country Info']
    },
    {
      title: 'Resources',
      links: ['Documentation', 'API Reference', 'Help Center', 'Community']
    },
    {
      title: 'Company',
      links: ['About Us', 'Careers', 'Press', 'Contact']
    }
  ]

  const socialLinks = [
    { name: 'Twitter', icon: 'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z' },
    { name: 'GitHub', icon: 'M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22' },
    { name: 'LinkedIn', icon: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 2a2 2 0 100 4 2 2 0 000-4z' }
  ]

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-blue-900/20 to-gray-900 text-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #007BFF20 0%, transparent 50%), 
                           radial-gradient(circle at 75% 75%, #FF6B3520 0%, transparent 50%)`
        }}></div>
      </div>

      {/* Animated floating elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-64 h-64 rounded-full bg-gradient-to-r from-blue-500/10 to-transparent animate-pulse" 
             style={{ top: '-10%', left: '-5%' }}></div>
        <div className="absolute w-48 h-48 rounded-full bg-gradient-to-r from-orange-500/10 to-transparent animate-pulse" 
             style={{ bottom: '-10%', right: '-5%', animationDelay: '2s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand section */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-orange-500 flex items-center justify-center shadow-lg">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-black">DecodeAir</h3>
            </div>
            
            <p className="text-gray-400 leading-relaxed max-w-xs">
              Your comprehensive aviation code decoder. Making flight information accessible and beautiful.
            </p>

            {/* Social links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href="#"
                  className="w-10 h-10 rounded-xl bg-gray-800/50 hover:bg-gradient-to-r hover:from-blue-500 hover:to-orange-500 flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 group"
                >
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300" 
                       fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={social.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Links sections */}
          {footerSections.map((section, index) => (
            <div 
              key={section.title}
              className="space-y-6"
              onMouseEnter={() => setHoveredSection(section.title)}
              onMouseLeave={() => setHoveredSection(null)}
            >
              <h4 className="text-lg font-bold text-white mb-4 relative">
                {section.title}
                <div 
                  className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-orange-500 transition-all duration-300"
                  style={{ 
                    width: hoveredSection === section.title ? '100%' : '30%'
                  }}
                ></div>
              </h4>
              
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-all duration-300 flex items-center space-x-2 group"
                      style={{ animationDelay: `${linkIndex * 100}ms` }}
                    >
                      <div className="w-1 h-1 rounded-full bg-gray-600 group-hover:bg-orange-500 transition-all duration-300 group-hover:scale-150"></div>
                      <span className="group-hover:translate-x-1 transition-transform duration-300">{link}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter section */}
        <div className="bg-gradient-to-r from-gray-800/50 to-blue-900/30 rounded-2xl p-8 mb-12 border border-gray-700/50">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <h4 className="text-xl font-bold mb-2">Stay Updated</h4>
              <p className="text-gray-400">Get the latest aviation codes and updates delivered to your inbox.</p>
            </div>
            
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 min-w-[250px]"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-orange-500 rounded-xl font-semibold text-white hover:shadow-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-gray-700/50 space-y-4 md:space-y-0">
          <div className="flex items-center space-x-6">
            <p className="text-gray-400">© 2025 DecodeAir. All rights reserved.</p>
            <div className="flex space-x-4">
              {['Privacy', 'Terms', 'Cookies'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Version and status */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-sm text-gray-400">All systems operational</span>
            </div>
            <div className="text-sm text-gray-500">v2.1.0</div>
          </div>
        </div>
      </div>

      {/* Animated bottom border */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 animate-pulse"></div>
    </footer>
  )
}

// // src/components/Footer.tsx
// export default function Footer() {
//   return (
//     <footer className="bg-gray-200 dark:bg-gray-800 text-center py-4">
//       <p>© 2025 DecodeAir</p>
//     </footer>
//   )
// }
