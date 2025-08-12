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
            <div className="rainbow-border">
              <input
                type="text"
                placeholder={displayText}
                className="w-full px-8 lg:px-10 py-4 lg:py-5 text-lg lg:text-xl border-2 border-transparent rounded-full focus:outline-none focus:border-transparent transition-colors pr-32 bg-white"
              />
              <button className="absolute right-6 top-1/2 transform -translate-y-1/2 w-14 h-14 bg-black text-white rounded-full hover:bg-gray-800 transition-colors flex items-center justify-center z-10">
                <svg className="w-6 h-6 transform rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
            
            {/* Image white-wool en bas à droite de la searchbar */}
            <div className="absolute -bottom-16 -right-16 sm:-bottom-24 sm:-right-24 md:-bottom-32 md:-right-48 lg:-bottom-48 lg:-right-80 xl:-right-96">
              <img src="/white-wool.png" alt="White wool" className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-64 xl:h-64 opacity-70" />
            </div>
            
            {/* Image du hook en dessous de la pelote, à gauche */}
            <div className="absolute -bottom-80 -right-16 sm:-bottom-88 sm:-right-20 md:-bottom-96 md:-right-24 lg:-bottom-104 lg:-right-32 xl:-bottom-112 xl:-right-40">
              <img src="/grey-wool.png" alt="Grey wool" className="w-auto h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 opacity-70" />
            </div>
            
            {/* Image heart-wool à gauche de grey-wool */}
            <div className="absolute -bottom-80 -right-4 sm:-bottom-88 sm:right-0 md:-bottom-96 md:right-4 lg:-bottom-104 lg:right-8 xl:-bottom-112 xl:right-12">
              <img src="/heart-wool.png" alt="Heart wool" className="w-auto h-40 sm:h-48 md:h-56 lg:h-64 xl:h-72 opacity-70" />
            </div>
            
            {/* Image pliers à gauche de heart-wool */}
            <div className="absolute -bottom-80 right-48 sm:-bottom-88 sm:right-56 md:-bottom-96 md:right-64 lg:-bottom-104 lg:right-72 xl:-bottom-112 xl:right-80">
              <img src="/pliers.png" alt="Pliers" className="w-auto h-32 sm:h-40 md:h-48 lg:h-56 xl:h-64 opacity-70" />
            </div>
            
            {/* Image logo-bis1 à gauche de l'écran en dessous de la search bar */}
            <div className="absolute -bottom-80 -left-2 sm:-bottom-88 sm:-left-4 md:-bottom-96 md:-left-6 lg:-bottom-104 lg:-left-8 xl:-bottom-112 xl:-left-10">
              <img src="/logo-bis1.png" alt="Logo bis1" className="w-auto h-56 sm:h-64 md:h-72 lg:h-80 xl:h-88 opacity-70" />
            </div>
            
            {/* Image needle tout à gauche de la page */}
            <div className="absolute -bottom-80 -left-48 sm:-bottom-88 sm:-left-56 md:-bottom-96 md:-left-64 lg:-bottom-104 lg:-left-72 xl:-bottom-112 xl:-left-80">
              <img src="/needle.png" alt="Needle" className="w-auto h-40 sm:h-48 md:h-56 lg:h-64 xl:h-72 opacity-70" />
            </div>
            
                        {/* Grande pelotte grise dans le cercle rouge en bas à gauche - FLÈCHE ROUGE POINTE VERS LE BAS À GAUCHE */}
            <div className="absolute -bottom-16 -left-32 sm:-bottom-20 sm:-left-48 md:-bottom-24 md:-left-64 lg:-bottom-28 lg:-left-80 xl:-bottom-32 xl:-left-96">
              <img src="/blue-wool.png" alt="Blue wool" className="w-auto h-40 sm:h-48 md:h-56 lg:h-64 xl:h-72 opacity-70" />
            </div>

            
          </div>
        </div>
      </main>

      {/* Our Features - juste au-dessus de la footer section */}
      <div className="mt-96 mb-16 text-center relative">
        {/* Image balls-of-wool.png à gauche */}
        <div className="absolute left-64 top-3/4 transform -translate-y-1/2">
          <img src="/balls-of-wool.png" alt="Balls of wool" className="w-auto h-80 sm:h-88 md:h-96 lg:h-104 xl:h-112 opacity-80" />
        </div>
        
        <h2 className="text-6xl font-medium text-black mb-16" style={{ fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif' }}>
          Our Features
        </h2>
        
        {/* Grand espace blanc vide */}
        <div className="min-h-96"></div>
      </div>

        {/* Pricing Section */}
        <div className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-6xl font-medium text-black mb-4" style={{ fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif' }}>Pricing</h2>
              <p className="text-xl text-gray-600">Choose the plan that works best for you</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* Free Plan */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                <h3 className="text-2xl font-bold text-black mb-4">Free</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-black">$0</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Basic networking
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Limited connections
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Community access
                  </li>
                </ul>
                <button className="w-full bg-white border-2 border-black text-black font-semibold py-3 px-6 rounded-full hover:bg-gray-50 transition-colors">
                  Get Started
                </button>
              </div>

              {/* Pro Plan - Highlighted */}
              <div className="bg-black rounded-2xl p-8 shadow-lg transform scale-105">
                <h3 className="text-2xl font-bold text-white mb-4">Pro</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">$29</span>
                  <span className="text-gray-300">/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-white">Unlimited connections</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-white">Advanced analytics</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-white">Priority support</span>
                  </li>
                </ul>
                <button className="w-full bg-white text-black font-semibold py-3 px-6 rounded-full hover:bg-gray-100 transition-colors">
                  Get Started
                </button>
              </div>

              {/* Enterprise Plan */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                <h3 className="text-2xl font-bold text-black mb-4">Enterprise</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-black">$99</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Team management
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Custom integrations
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Dedicated support
                  </li>
                </ul>
                <button className="w-full bg-white border-2 border-black text-black font-semibold py-3 px-6 rounded-full hover:bg-gray-50 transition-colors">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </div>



        {/* Footer Section */}
        <footer className="bg-black text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Logo et nom */}
              <div className="col-span-1 md:col-span-2">
                <div className="flex items-center mb-4">
                  <img src="/logo-bis.png" alt="LinkedLoom Logo" className="w-8 h-8 mr-3" />
                  <span className="text-2xl font-bold">LinkedLoom</span>
                </div>
                <p className="text-gray-300 max-w-md">
                  Weave your network, thread by thread. Professional LinkedIn profile scraping made simple.
                </p>
              </div>

              {/* Navigation */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Product</h3>
                <ul className="space-y-2 text-gray-300">
                  <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">API</a></li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Company</h3>
                <ul className="space-y-2 text-gray-300">
                  <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                </ul>
              </div>
            </div>

            {/* Séparateur */}
            <div className="border-t border-gray-800 mt-12 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <p className="text-gray-400 text-sm">
                  © 2025 LinkedLoom. All rights reserved.
                </p>
                <div className="flex space-x-6 mt-4 md:mt-0">
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
                </div>
              </div>
            </div>
          </div>
        </footer>
    </div>
  )
}
