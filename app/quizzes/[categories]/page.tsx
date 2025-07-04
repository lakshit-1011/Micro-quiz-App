'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';

interface Quiz {
  id: string;
  title: string;
  questions: { length: number }[];
}

export default function QuizPage() {
  const { categories } = useParams();
  const [quizzes, setQuizzes] = useState<Quiz[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (!categories) return;

    fetch(`/api/quizzes/${categories}`)
      .then((res) => res.json())
      .then((data) => {
        setQuizzes(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error loading quizzes:", err);
        setLoading(false);
      });
  }, [categories]);

  if (loading) {
    return <p className="p-6 text-center text-blue-500 text-xl animate-pulse">Loading quizzes...</p>;
  }

  if (!quizzes.length) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200">
        <button
          onClick={() => router.push("/")}
          className="mb-8 px-6 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold shadow-lg hover:scale-105 transition"
        >
          ← Back to Home
        </button>
        <p className="p-6 text-center text-red-600 bg-white bg-opacity-80 rounded-xl shadow-md">
          No quizzes found for category: <strong>{categories}</strong>
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200 p-6">
      <div className="max-w-5xl mx-auto">
        <button
          onClick={() => router.push("/")}
          className="mb-8 px-6 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold shadow-lg hover:scale-105 transition"
        >
          ← Back to Home
        </button>
        <h1 className="text-4xl font-extrabold text-center capitalize mb-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 drop-shadow-lg">
          {categories} Quizzes
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {quizzes.map((quiz) => (
            <div
              key={quiz.id}
              onClick={() => router.push(`/quiz/${quiz.id}`)}
              className="cursor-pointer border-2 border-purple-300 rounded-2xl p-7 bg-white bg-opacity-90 shadow-xl hover:shadow-2xl hover:scale-105 transition transform duration-200 flex flex-col items-center"
            >
              <h2 className="text-2xl font-bold mb-3 text-purple-700 text-center">{quiz.title}</h2>
              <p className="text-lg text-blue-600 font-semibold mb-2">
                {quiz.questions.length} Questions
              </p>
              <span className="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-pink-400 to-purple-400 text-white text-xs font-bold mt-auto">Take Quiz</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
