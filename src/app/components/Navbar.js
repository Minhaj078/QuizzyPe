
// src/app/components/Navbar.js
"use client"; // IMPORTANT: ye line jruri hai 

import Link from 'next/link';
import Image from 'next/image'; 
import { usePathname } from 'next/navigation'; 

export default function Navbar() {
  const pathname = usePathname(); // For active link styling

  return (
    <nav className="bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between shadow-sm sticky top-0 z-50">
      {/* Left: Kwizi Logo / QuizzyPe */}
      <div className="flex items-center">
        <Link href="/" className="flex items-center text-blue-600 hover:text-blue-800 text-2xl font-bold">
          {/* If you have a logo image, uncomment and provide the correct path/dimensions */}
          {/* For example: <Image src="/images/kwizi-logo.png" alt="Kwizi Logo" width={30} height={30} className="mr-2" /> */}
          <span className="text-blue-600">QuizzyPe</span> {/* Explicitly blue for visibility */}
        </Link>
      </div>

      {/* Middle: Home and My Stats Buttons */}
      <div className="flex space-x-4">
        <Link
          href="/"
          className={`px-4 py-2 rounded-lg flex items-center justify-center font-semibold text-sm transition-colors duration-200
            ${pathname === '/' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
        >
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V18a2 2 0 002 2h3a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h3a2 2 0 002-2v-7.586l.293-.293a1 1 0 00-1.414-1.414L10.707 2.293z"/></svg>
          HOME
        </Link>
        <Link
          href="/mystats"
          className={`px-4 py-2 rounded-lg flex items-center justify-center font-semibold text-sm transition-colors duration-200
            ${pathname === '/mystats' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
        >
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 001.414 1.414l3.5-3.5a1 1 0 000-1.414l-3.5-3.5a1 1 0 10-1.414 1.414L6.586 13H5V5h1.586l1.293-1.293A1 1 0 007 2.586V1a1 1 0 10-2 0v1.586L3 3z" clipRule="evenodd"></path></svg>
          MY STATS
        </Link>
      </div>

      {/* Right: Empty div as Login/Sign Up is removed */}
      <div>
        {/* The Login / Sign Up button has been removed as per your earlier request. */}
        {/* The Clear Stats button has also been removed from here, as it will be inside the My Stats page. */}
      </div>
    </nav>
  );
}