import { NextResponse } from 'next/server';
import { quizzes } from '../../../../data/quizzes'; 

export async function GET(request, { params }) {
  const { category } = params;

  const filteredQuizzes = quizzes.filter(quiz => quiz.categoryId === category);

  return NextResponse.json(filteredQuizzes);
}
