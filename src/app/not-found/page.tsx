import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white bg-gray-900">
      <h1 className="text-5xl font-bold mb-4">404</h1>
      <p className="text-xl mb-6">Oops! The page you are looking for does not exist.</p>
      <Link
        href="/"
        className="px-6 py-3 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-full text-white font-semibold hover:scale-105 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
}
