import { NextResponse } from 'next/server';
import quizzes from '@/Data/Quizes';

export async function GET(req, { params }) {
  const quizId = params.id.toLowerCase();

  for (const category in quizzes) {
    const quizList = quizzes[category];
    const matchedQuiz = quizList.find((quiz) => quiz.id.toLowerCase() === quizId);
    if (matchedQuiz) {
      return NextResponse.json(matchedQuiz);
    }
  }

  return NextResponse.json(
    { error: `No quiz found with id '${quizId}'` },
    { status: 404 }
  );
}
