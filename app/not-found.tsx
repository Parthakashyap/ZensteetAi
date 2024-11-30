import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <h1 className="text-[150px] font-bold text-blue-100 leading-none">404</h1>
      <h2 className="text-3xl font-bold text-[#29B6F6] mb-4">Oops! Page Not Found</h2>
      <p className="text-gray-600 text-center mb-8">
        It seems we can't find the page you're looking for,<br />
        Let's get you back on track!
      </p>
      <Link
        href="/"
        className="bg-[#29B6F6] text-white px-8 py-3 rounded-lg hover:bg-blue-400 transition-colors"
      >
        Back to home
      </Link>
    </div>
  );
}