// // src/app/page.js
// // This is a Server Component.

// import Link from 'next/link';
// import Image from 'next/image'; // Import Image component for optimized images
// import { categories } from '../data/quizzes'; // Import categories data directly

// // Metadata for this specific page
// export const metadata = {
//   title: 'Home - Quiz Catalog',
//   description: 'Discover and take short quizzes on various topics like History, Science, and Programming.',
// };

// export default async function HomePage() {
//   return (
//     <div className="container mx-auto">
//       <h1 className="text-3xl font-bold mb-8 text-gray-800 text-center">Quiz Catelog</h1>

//       {/* Grid for cards: 1 column on small, 2 on medium, 3 on large, 4 on extra-large screens */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//         {categories.map((category) => (
//           <Link
//             key={category.id}
//             href={`/quizzes/${category.id}`} // Link to the dynamic category page
//             className="block bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg transition-shadow duration-200 overflow-hidden"
//           >
//             {/* Category Image */}
//             {category.imageUrl && (
//               <div className="relative w-full h-40 bg-gray-100 flex items-center justify-center">
//                 <Image
//                   src={category.imageUrl}
//                   alt={category.name}
//                   fill // 'fill' makes the image cover the parent div
//                   style={{ objectFit: 'contain' }} // Cover the area without distortion
//                   sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Optimize image loading
//                 />
//               </div>
//             )}

//             <div className="p-4">
//               {/* Category Name */}
//               <h2 className="mb-2 text-xl font-bold text-gray-900 text-center">
//                 {category.name}
//               </h2>

//               {/* Category Description */}
//               <p className="font-normal text-gray-700 text-center text-sm">
//                 {category.description}
//               </p>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// }


// src/app/page.js
// This is a Server Component.

import Link from 'next/link';
import Image from 'next/image'; // Import Image component for optimized images
import { categories } from '../data/quizzes'; // Import categories data directly

// Metadata for this specific page
export const metadata = {
  title: 'Home - Quiz Catalog',
  description: 'Discover and take short quizzes on various topics like History, Science, and Programming.',
};

export default async function HomePage() {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-gray-800 text-center">Quiz Catelog</h1>

      {/* Grid for cards: 1 column on small, 2 on medium, 3 on large, 4 on extra-large screens */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {categories.map((category) => (
          <Link
            key={category.id}
            href={`/quizzes/${category.id}`} // Link to the dynamic category page
            className="block bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg transition-shadow duration-200 overflow-hidden"
          >
            {/* Category Image */}
            {category.imageUrl && (
              <div className="relative w-full h-40 bg-gray-100 flex items-center justify-center">
                <Image
                  src={category.imageUrl}
                  alt={category.name}
                  fill // 'fill' makes the image cover the parent div
                  style={{ objectFit: 'contain' }} // Cover the area without distortion
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Optimize image loading
                />
              </div>
            )}

            <div className="p-4">
              {/* Category Name */}
              <h2 className="mb-2 text-xl font-bold text-gray-900 text-center">
                {category.name}
              </h2>

              {/* Category Description */}
              <p className="font-normal text-gray-700 text-center text-sm">
                {category.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}