// src/app/quizzes/[category]/page.js

import Link from 'next/link';
import { quizzes as allQuizzesData, categories as allCategoriesData } from '../../../data/quizzes';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return allCategoriesData.map((category) => ({
    category: category.id,
  }));
}

export async function generateMetadata({ params }) {
  // Await params here
  const awaitedParams = await params;
  const categoryId = awaitedParams.category; 

  const category = allCategoriesData.find(cat => cat.id === categoryId);

  return {
    title: `Quizzes on ${category ? category.name : 'Category'} - Kwizi`,
    description: `Browse and take quizzes related to ${category ? category.name : 'this category'}. Test your knowledge!`,
  };
}

export default async function CategoryQuizzesPage({ params }) {
  // Await params here
  const awaitedParams = await params; 
  const categoryId = awaitedParams.category; 

  const categoryQuizzes = allQuizzesData.filter(quiz => quiz.categoryId === categoryId);

  const currentCategory = allCategoriesData.find(cat => cat.id === categoryId);

  if (!currentCategory) {
    notFound();
  }

  return (
    <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-md p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-900">
        {`Quizzes in ${currentCategory.name}`}
      </h1>

      {categoryQuizzes.length === 0 ? (
        <p className="text-gray-600">
          No quizzes available for this category yet. Check back soon!
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {categoryQuizzes.map((quiz) => (
            <Link
              key={quiz.id}
              href={`/quiz/${quiz.id}`}
              className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 transition-colors"
            >
              <h3 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
                {quiz.title}
              </h3>
              <p className="font-normal text-gray-700">
                {quiz.description}
              </p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}