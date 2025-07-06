// // src/app/quiz/[id]/page.js

// // Import necessary modules
// import { quizzes as allQuizzesData, quizDetails as allQuizDetailsData } from '../../../data/quizzes';
// import QuizClient from '../../components/QuizClient';
// import { notFound } from 'next/navigation'; // For handling quiz not found

// export async function generateStaticParams() {
//   return allQuizzesData.map((quiz) => ({
//     id: quiz.id,
//   }));
// }

// export async function generateMetadata({ params }) {
//   const awaitedParams = await params;
//   const quizId = awaitedParams.id;

//   const quiz = allQuizDetailsData[quizId];

//   if (!quiz) {
//     return {
//       title: 'Quiz Not Found',
//       description: 'The requested quiz does not exist.',
//     };
//   }

//   return {
//     title: quiz.title,
//     description: `Take a quiz on ${quiz.title}. Test your knowledge!`,
//   };
// }

// export default async function QuizPage({ params }) {
//   const awaitedParams = await params;
//   const quizId = awaitedParams.id;

//   const quiz = allQuizDetailsData[quizId];

//   if (!quiz) {
//     notFound();
//   }

//   return (
//     // This div will be rendered within the <main> tag from layout.js.
//     // It will inherit the light background from <main>.
//     <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6">
//       <QuizClient initialQuizData={quiz} />
//     </div>
//   );
// }

// src/app/quiz/[id]/page.js
// This file assumes you fetch quiz data here based on the 'id' param



// src/app/quiz/[id]/page.js
// This file assumes you fetch quiz data here based on the 'id' param

// src/app/quiz/[id]/page.js
// This file assumes you fetch quiz data here based on the 'id' param

// Import both quizzes (if still used elsewhere for generating paths/metadata)
// and quizDetails (which contains the full quiz data including questions)
import { quizzes, quizDetails } from '../../../data/quizzes';
import QuizClient from '../../components/QuizClient';
import { notFound } from 'next/navigation'; // Import notFound for better error handling

// If you are using generateStaticParams, ensure it's still correct.
// This function helps Next.js pre-render pages for known quiz IDs at build time.
export async function generateStaticParams() {
  // Use the quizzes array to get all possible IDs for static generation
  return quizzes.map((quiz) => ({
    id: quiz.id,
  }));
}

// You might also want generateMetadata for SEO, which uses quizDetails
// export async function generateMetadata({ params }) {
//   const awaitedParams = await params;
//   const quizId = awaitedParams.id;
//   const quiz = quizDetails[quizId]; // Access quiz from quizDetails

//   if (!quiz) {
//     return {
//       title: 'Quiz Not Found',
//       description: 'The requested quiz does not exist.',
//     };
//   }
//   return {
//     title: quiz.title,
//     description: `Take a quiz on ${quiz.title}. Test your knowledge!`,
//   };
// }


export default async function QuizPage({ params }) {
  // Await params to ensure 'id' is fully resolved before accessing it.
  const awaitedParams = await params;
  const { id } = awaitedParams; // Destructure 'id' from the awaited params

  // **** THE FIX IS HERE ****
  // Get the full quiz data, including questions, from the quizDetails object
  const quizData = quizDetails[id];

  if (!quizData) {
    // Use Next.js's notFound() function for proper 404 handling
    notFound();
  }

  return (
    // Ensure this div allows for full width and centering of its child
    <div className="flex justify-center items-center min-h-[calc(100vh-80px)] py-8 px-4 sm:px-6 lg:px-8">
      <QuizClient initialQuizData={quizData} />
    </div>
  );
}