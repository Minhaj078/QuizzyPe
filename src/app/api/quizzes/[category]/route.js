// src/app/api/quizzes/[category]/route.js
import { NextResponse } from 'next/server';
import { quizzes } from '../../../../data/quizzes';

export async function GET(request, { params }) {

  const { category } = params;


  const filteredQuizzes = quizzes.filter(quiz => quiz.categoryId === category);

  // Return kr ra hai json file
  return NextResponse.json(filteredQuizzes);
}