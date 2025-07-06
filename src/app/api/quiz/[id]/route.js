// src/app/api/quiz/[id]/route.js
import { NextResponse } from 'next/server';
import { quizDetails } from '../../../../data/quizzes'; 

export async function GET(request, { params }) {

  const { id } = params;


  const quiz = quizDetails[id];

  if (quiz) {
    
    return NextResponse.json(quiz);
  } else {

    return NextResponse.json({ message: 'Quiz not found' }, { status: 404 });
  }
}