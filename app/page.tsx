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

      {/* Espace blanc en bas */}
      <div className="min-h-screen bg-white"></div>

      {/* Footer */}
      <footer className="bg-black text-white py-16">
        <div className="max-w-6xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Logo et nom */}
            <div className="col-span-1 md:col-span-2 lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <img src="/logo-bis.png" alt="LinkedLoom Logo" className="w-10 h-10" />
                <span className="text-2xl font-bold text-white">LinkedLoom</span>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Weave your network, thread by thread. Professional LinkedIn profile scraping and networking solutions.
              </p>
            </div>

            {/* Product */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">GDPR</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom section */}
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 LinkedLoom. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
