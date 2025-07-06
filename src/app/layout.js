// // src/app/layout.js
// // This is a Server Component, wrapping your entire application.

// import './globals.css'; // Import your global Tailwind CSS styles
// import { Inter } from 'next/font/google'; // Import Inter font
// import Link from 'next/link'; // Import Link for navigation
// import Image from 'next/image'; // Import Image for the logo

// // Initialize Inter font globally
// const inter = Inter({ subsets: ['latin'] });

// // Define static metadata for the entire application (default SEO)
// export const metadata = {
//   title: 'Kwizi: Micro-Quiz Platform', // Title changed to Kwizi
//   description: 'A platform for short, topic-specific quizzes on various subjects like History, Science, and Programming.',
// };

// export default async function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>
//         {/* --- Top Navigation Bar (Kwizi Style) --- */}
//         <nav className="bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between shadow-sm sticky top-0 z-50">
//           {/* Left: Kwizi Logo */}
//           <div className="flex items-center">
//             <Link href="/" className="flex items-center text-blue-600 hover:text-blue-800 text-2xl font-bold">
//                 {/* <Image src="/images/kwizi-logo.png" alt="Kwizi Logo" width={30} height={30} className="mr-2" /> */}
//                 QuizzyPe 
//             </Link>
//           </div>

//           {/* Middle: Home and My Stats Buttons */}
//           <div className="flex space-x-4">
//             <Link href="/" className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 flex items-center justify-center font-semibold text-sm">
//               <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V18a2 2 0 002 2h3a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h3a2 2 0 002-2v-7.586l.293-.293a1 1 0 00-1.414-1.414L10.707 2.293z"/></svg>
//               HOME
//             </Link>
//             <Link href="/mystats" className="px-4 py-2 rounded-lg bg-gray-200 text-gray-700 hover:bg-gray-300 flex items-center justify-center font-semibold text-sm">
//               <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 001.414 1.414l3.5-3.5a1 1 0 000-1.414l-3.5-3.5a1 1 0 10-1.414 1.414L6.586 13H5V5h1.586l1.293-1.293A1 1 0 007 2.586V1a1 1 0 10-2 0v1.586L3 3z" clipRule="evenodd"></path></svg>
//               MY STATS
//             </Link>
//           </div>

//           {/* Right: Login / Sign Up Button */}
//           <div>
//             <Link href="/login" className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 flex items-center justify-center font-semibold text-sm">
//               <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
//               Login / Sign Up
//             </Link>
//           </div>
//         </nav>

//         {/* Main content area, below the navigation bar */}
//         {/* We use pt-4 (or a higher value if needed) to ensure content doesn't get hidden under the sticky nav */}
//         <main className="min-h-screen p-6 bg-gray-50 pt-20"> {/* pt-20 to push content below the fixed navbar (~80px) */}
//           {children}
//         </main>
//       </body>
//     </html>
//   );
// }

// src/app/layout.js
// import './globals.css'; // Your global CSS file
// import Navbar from './components/Navbar'; // Import the Navbar component

// export const metadata = {
//   title: 'QuizzyPe - Test Your Knowledge',
//   description: 'Interactive quizzes on various subjects.',
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body>
//         <Navbar /> {/* Render the Navbar component here */}
//         <main>
//           {children} {/* This is where your page content (like categories or quiz) will be rendered */}
//         </main>
//       </body>
//     </html>
//   );
// }

// src/app/layout.js
import './globals.css'; // Your global CSS file
import Navbar from './components/Navbar'; // Import the Navbar component
import { Inter } from 'next/font/google'; // Import Inter font (needed for body class)

const inter = Inter({ subsets: ['latin'] }); // Initialize Inter font

export const metadata = {
  title: 'QuizzyPe - Test Your Knowledge',
  description: 'Interactive quizzes on various subjects.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}> {/* Apply font class */}
        <Navbar /> {/* Render the Navbar component here */}
        {/* Important: Add padding-top to main to prevent content from going under the fixed navbar */}
        <main className="min-h-screen p-6 bg-gray-50 pt-16"> {/* Adjust pt-XX as needed based on Navbar height */}
          {children} {/* This is where your page content (like categories or quiz) will be rendered */}
        </main>
      </body>
    </html>
  );
}