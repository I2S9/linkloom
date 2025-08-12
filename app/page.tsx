'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  const texts = [
    "Search for connections, opportunities, or insights...",
    "Find me all NYU student profiles who had internships at Meta",
    "Show me all startup CEOs in Massachusetts",
    "Find profiles of software engineers at Google in San Francisco",
    "Get me all marketing directors in the fintech industry",
    "Search for data scientists who worked at Netflix",
    "Find product managers in the healthcare sector"
  ];

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    if (isTyping) {
      if (displayText.length < texts[currentTextIndex].length) {
        timeout = setTimeout(() => {
          setDisplayText(texts[currentTextIndex].slice(0, displayText.length + 1));
        }, 50);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, 1500); // Réduit de 2000ms à 1500ms
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 15); // Réduit de 30ms à 15ms pour une disparition plus rapide
      } else {
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isTyping, currentTextIndex, texts]);

  return (
    <div id="top" className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="relative flex flex-col lg:flex-row items-center justify-center px-4 lg:px-8 py-4 lg:py-6 border-b border-gray-200">
        {/* Logo - Mobile: centré, Desktop: encore plus proche du centre */}
        <div className="lg:absolute lg:left-40 flex items-center space-x-2 mb-4 lg:mb-0">
          <a 
            href="#top"
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity cursor-pointer"
          >
            <img src="/logo-bis.png" alt="LinkedLoom Logo" className="w-12 h-12" />
            <span className="text-lg lg:text-xl font-semibold text-black">LinkedLoom</span>
          </a>
        </div>
        
        {/* Menu principal - Mobile: colonne, Desktop: ligne */}
        <div className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-8 lg:space-x-12 mb-4 lg:mb-0">
          <a href="#how-it-works" className="text-gray-600 hover:text-black transition-colors text-center">How it works</a>
          <a href="#pricing" className="text-gray-600 hover:text-black transition-colors text-center">Pricing</a>
          <a href="#compliance" className="text-gray-600 hover:text-black transition-colors text-center">Compliance</a>
          <a href="#about-us" className="text-gray-600 hover:text-black transition-colors text-center">About Us</a>
        </div>
        
        {/* Boutons - Mobile: centrés, Desktop: encore plus proche du centre */}
        <div className="lg:absolute lg:right-40 flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
          <button className="px-5 py-2.5 bg-black text-white rounded-full hover:bg-gray-800 transition-colors text-sm">Log in</button>
          <button className="px-5 py-2.5 bg-black text-white rounded-full hover:bg-gray-800 transition-colors text-sm">Sign up</button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex flex-col items-center justify-center px-4 lg:px-8 py-12 lg:py-24 text-center">
        <div className="max-w-4xl mx-auto w-full">
          {/* Tag au-dessus du titre */}
          <div className="inline-block px-3 py-1 bg-white border border-gray-300 rounded-full text-xs text-black mb-6">
            Professional LinkedIn Profile Scraping
          </div>
          
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-medium text-black mb-4 lg:mb-6 px-4">
            Discover LinkedLoom
          </h1>
          <p className="text-lg lg:text-xl text-gray-600 mb-8 lg:mb-12 max-w-2xl mx-auto px-4">
            Weave your network, thread by thread
          </p>
          
          {/* Barre de recherche géante avec bords complètement arrondis */}
          <div className="relative w-full max-w-3xl mx-auto mb-12 lg:mb-16 px-4">
            <div className="relative">
              {/* Contour gris clair simple */}
              <div className="absolute inset-0 rounded-full border-2 border-gray-300 bg-white"></div>
              
              <input
                type="text"
                placeholder={displayText}
                className="relative w-full px-8 lg:px-10 py-4 lg:py-5 text-lg lg:text-xl border-2 border-gray-300 rounded-full focus:outline-none focus:border-gray-300 transition-colors pr-32 bg-white"
              />
              <button className="absolute right-4 top-1/2 transform -translate-y-1/2 w-14 h-14 bg-black text-white rounded-full hover:bg-gray-800 transition-colors flex items-center justify-center z-10">
                <svg className="w-6 h-6 transform rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Espace blanc en bas */}
      <div className="min-h-screen bg-white"></div>
    </div>
  )
}
