
import Image from "next/image";
import Link from "next/link";

type Category = {
  name: string;
  image: string;
};

export default async function Home() {
  const res = await fetch("http://localhost:3000/api/categories", {
    cache: "no-store",
  });
  const categories: Category[] = await res.json();

  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <div className="flex flex-col items-center justify-center py-10 text-center bg-white shadow-md rounded-xl mb-10 max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800">
          Welcome to Micro-Quiz Platform
        </h1>
        <p className="mt-4 text-gray-600 text-base sm:text-lg max-w-md">
          Test your knowledge in minutes! Quick, fun, and interactive quizzes.
        </p>
      </div>

      <h2 className="text-2xl font-semibold text-center mb-6">Choose a Quiz Category</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {categories.map((cat) => (
          <Link
            key={cat.name}
            href={`/quizzes/${cat.name.toLowerCase()}`}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 ease-in-out flex flex-col items-center text-center"
          >
            <Image src={cat.image} alt={cat.name} width={60} height={60} />
            <span className="mt-4 font-medium text-lg text-gray-800">{cat.name}</span>
          </Link>
        ))}
      </div>
    </main>
  );
}
