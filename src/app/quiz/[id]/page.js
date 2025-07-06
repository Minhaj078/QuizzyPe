// src/app/quiz/[id]/page.js

import { quizzes, quizDetails } from '../../../data/quizzes';
import QuizClient from '../../components/QuizClient';
import { notFound } from 'next/navigation'; // Import notFound for better error handling

export async function generateStaticParams() {

  return quizzes.map((quiz) => ({
    id: quiz.id,
  }));
}



export default async function QuizPage({ params }) {
  const awaitedParams = await params;
  const { id } = awaitedParams; 
  const quizData = quizDetails[id];

  if (!quizData) {
    
    notFound();
  }

  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-80px)] py-8 px-4 sm:px-6 lg:px-8">
      <QuizClient initialQuizData={quizData} />
    </div>
  );
}