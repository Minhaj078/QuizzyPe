// src/app/components/Navbar.js
"use client"; // IMPORTANT: Keep this line at the very top!

import Link from 'next/link';
import Image from 'next/image'; // Import Image if you plan to use a logo image
import { usePathname } from 'next/navigation'; // To highlight active link (optional, but good for active button)

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
        {/* The comment for href="/my-stats" was causing the syntax error. It's now removed. */}
        <Link
          href="/my-stats"
          className={`px-4 py-2 rounded-lg flex items-center justify-center font-semibold text-sm transition-colors duration-200
            ${pathname === '/my-stats' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
        >
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 001.414 1.414l3.5-3.5a1 1 0 000-1.414l-3.5-3.5a1 1 0 10-1.414 1.414L6.586 13H5V5h1.586l1.293-1.293A1 1 0 007 2.586V1a1 1 0 10-2 0v1.586L3 3z" clipRule="evenodd"></path></svg>
          MY STATS
        </Link>
      </div>

      {/* Right: Login / Sign Up Button */}
      <div>
        <Link href="/login" className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 flex items-center justify-center font-semibold text-sm">
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
          Login / Sign Up
        </Link>
      </div>
    </nav>
  );
}