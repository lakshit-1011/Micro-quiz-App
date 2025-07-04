'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';

interface Question {
  question: string;
  options: string[];
  answer: string;
}

interface Quiz {
  id: string;
  title: string;
  questions: Question[];
}

export default function QuizDetailPage() {
  const { id } = useParams();
  const [quiz, setQuiz] = useState<Quiz | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedAnswers, setSelectedAnswers] = useState<{ [qIdx: number]: string }>({});
  const [submitted, setSubmitted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (!id) return;
    setLoading(true);
    fetch(`/api/quiz/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setQuiz(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error loading quiz:', err);
        setLoading(false);
      });
  }, [id]);

  const handleSelect = (qIdx: number, option: string) => {
    if (submitted) return; 
    setSelectedAnswers((prev) => ({ ...prev, [qIdx]: option }));
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const numAnswered = Object.keys(selectedAnswers).length;
  const totalQuestions = quiz?.questions.length || 0;
  const numCorrect = quiz
    ? quiz.questions.filter((q, idx) => selectedAnswers[idx] === q.answer).length
    : 0;
  const progress = totalQuestions ? Math.round((numAnswered / totalQuestions) * 100) : 0;

  if (loading) {
    return <p className="p-6 text-center text-blue-400 text-xl animate-pulse">Loading quiz...</p>;
  }

  if (!quiz) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <button
          onClick={() => router.push('/')} 
          className="mb-8 px-6 py-2 rounded-full bg-gradient-to-r from-blue-300 to-purple-300 text-white font-bold shadow-lg hover:scale-105 transition"
        >
          ← Back to Home
        </button>
        <p className="p-6 text-center text-red-500 bg-white bg-opacity-80 rounded-xl shadow-md">
          Quiz not found.
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-6">
      <div className="max-w-3xl mx-auto bg-white bg-opacity-95 rounded-2xl shadow-xl p-8">
        <button
          onClick={() => router.push('/')} 
          className="mb-8 px-6 py-2 rounded-full bg-gradient-to-r from-blue-300 to-purple-300 text-white font-bold shadow-lg hover:scale-105 transition"
        >
          ← Back to Home
        </button>
        <h1 className="text-3xl font-extrabold text-center capitalize mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 drop-shadow-lg">
          {quiz.title}
        </h1>
        <div className="mb-8">
          <div className="flex justify-between mb-1 text-sm font-medium">
            <span className="text-purple-700">Progress</span>
            {submitted ? (
              <span className="text-green-700 font-bold">Score: {numCorrect}/{totalQuestions}</span>
            ) : (
              <span className="text-blue-700">{numAnswered}/{totalQuestions} answered</span>
            )}
          </div>
          <div className="w-full bg-purple-100 rounded-full h-3">
            <div
              className="bg-gradient-to-r from-blue-400 to-pink-300 h-3 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
        <div className="space-y-8">
          {quiz.questions.map((q, qIdx) => {
            const userAnswer = selectedAnswers[qIdx];
            const isCorrect = userAnswer === q.answer;
            return (
              <div key={qIdx} className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 shadow-md">
                <div className="mb-4 text-lg font-semibold text-purple-800">
                  Q{qIdx + 1}. {q.question}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {q.options.map((option, oIdx) => {
                    let optionStyle =
                      'flex items-center px-4 py-2 rounded-lg cursor-pointer border-2 transition-all ';
                    if (submitted) {
                      if (option === q.answer) {
                        optionStyle += 'border-green-400 bg-green-50 text-green-700 font-bold';
                      } else if (userAnswer === option && userAnswer !== q.answer) {
                        optionStyle += 'border-red-400 bg-red-50 text-red-700 font-bold';
                      } else {
                        optionStyle += 'border-transparent bg-purple-50';
                      }
                    } else {
                      optionStyle +=
                        userAnswer === option
                          ? 'border-pink-400 bg-white font-bold text-pink-700'
                          : 'border-transparent bg-purple-50 hover:bg-purple-100';
                    }
                    return (
                      <label key={oIdx} className={optionStyle}>
                        <input
                          type="radio"
                          name={`question-${qIdx}`}
                          value={option}
                          checked={userAnswer === option}
                          onChange={() => handleSelect(qIdx, option)}
                          className="mr-3 accent-pink-400"
                          disabled={submitted}
                        />
                        {option}
                      </label>
                    );
                  })}
                </div>
                {submitted && (
                  <div className={`mt-3 text-sm font-semibold ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
                    {userAnswer
                      ? isCorrect
                        ? 'Correct!'
                        : `Wrong! Correct answer: ${q.answer}`
                      : 'Not answered.'}
                  </div>
                )}
              </div>
            );
          })}
        </div>
        <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-center items-center">
          {!submitted && (
            <button
              onClick={handleSubmit}
              disabled={numAnswered !== totalQuestions}
              className={`px-8 py-3 rounded-full font-bold shadow-md transition text-white bg-gradient-to-r from-blue-400 to-pink-400 hover:scale-105 ${
                numAnswered !== totalQuestions ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              Submit
            </button>
          )}
          {submitted && (
            <button
              onClick={() => router.push('/')}
              className="px-8 py-3 rounded-full font-bold shadow-md transition text-white bg-gradient-to-r from-green-400 to-blue-400 hover:scale-105"
            >
              Go to Home
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
