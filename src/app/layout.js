

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
          {/* Centered Footer */}
        <footer className="w-full text-center text-gray-600 text-sm py-6">
          © 2025 | Made by <span className="font-semibold text-black">Minhajuddin Ahmad</span> ❤
        </footer>
        </body>
      </html>
    );
  }