import { NextResponse } from 'next/server';
import  quizzes  from '@/Data/Quizes';

type Category = 'math' | 'programming' | 'history' | 'science';

export async function GET(
  req: Request,
  { params }: { params: Promise<{ categories: string }> }
) {
  const { categories } = await params;
  const category = categories.toLowerCase() as Category;
  if (!(category in quizzes)) {
    return NextResponse.json(
      { error: `No quizzes found for category '${category}'` },
      { status: 404 }
    );
  }

  const data = quizzes[category];
  return NextResponse.json(data);
}
