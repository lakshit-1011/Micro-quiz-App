import { NextResponse } from 'next/server';

export async function GET() {
  const categories = [
    { name: 'Math', image: '/images/Maths.jpg' },
    { name: 'Science', image: '/images/Science.jpg' },
    { name: 'History', image: '/images/History.jpg' },
    { name: 'Programming', image: '/images/Programming.jpg' },
  ];

  return NextResponse.json(categories);
}


