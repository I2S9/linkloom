'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="relative flex flex-col lg:flex-row items-center justify-center px-4 lg:px-8 py-4 lg:py-6 border-b border-gray-200">
      {/* Logo - Mobile: centré, Desktop: encore plus proche du centre */}
      <div className="lg:absolute lg:left-40 flex items-center space-x-2 mb-4 lg:mb-0">
        <Link 
          href="/"
          className="flex items-center space-x-2 hover:opacity-80 transition-opacity cursor-pointer"
        >
          <img src="/logo-bis.png" alt="LinkedLoom Logo" className="w-12 h-12" />
          <span className="text-lg lg:text-xl font-semibold text-black">LinkedLoom</span>
        </Link>
      </div>
      
      {/* Menu principal - Mobile: colonne, Desktop: ligne */}
      <div className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-8 lg:space-x-12 mb-4 lg:mb-0">
        <Link href="/how-it-works" className="text-gray-600 hover:text-black transition-colors text-center">How it works</Link>
        <Link href="/pricing" className="text-gray-600 hover:text-black transition-colors text-center">Pricing</Link>
        <Link href="/compliance" className="text-gray-600 hover:text-black transition-colors text-center">Compliance</Link>
        <Link href="/about-us" className="text-gray-600 hover:text-black transition-colors text-center">About Us</Link>
      </div>
      
      {/* Boutons - Mobile: centrés, Desktop: encore plus proche du centre */}
      <div className="lg:absolute lg:right-40 flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
        <button className="px-5 py-2.5 bg-black text-white rounded-full hover:bg-gray-800 transition-colors text-sm">Log in</button>
        <button className="px-5 py-2.5 bg-black text-white rounded-full hover:bg-gray-800 transition-colors text-sm">Sign up</button>
      </div>
    </nav>
  );
}
