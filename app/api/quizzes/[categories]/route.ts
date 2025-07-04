import { NextResponse } from 'next/server';
import  quizzes  from '@/Data/Quizes';

type Category = 'math' | 'programming' | 'history' | 'science';

export async function GET(
  req: Request,
  { params }: { params: { categories: string } }
) {
  const category = params.categories.toLowerCase() as Category;
   console.log(category);
  if (!(category in quizzes)) {
    return NextResponse.json(
      { error: `No quizzes found for category '${category}'` },
      { status: 404 }
    );
  }

  const data = quizzes[category];
  return NextResponse.json(data);
}
