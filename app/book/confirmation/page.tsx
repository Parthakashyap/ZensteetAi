"use client";

import Link from "next/link";

export default function BookingConfirmation() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-12 max-w-xl mx-auto">
      <div className="w-full text-center space-y-4 mb-12">
        <h1 className="text-3xl font-bold mb-4">Booking Confirmed!</h1>
        <p className="text-gray-600 leading-relaxed">
          Congratulations! Your therapy session has been successfully scheduled. We're
          looking forward to helping you on your journey to better mental health.
        </p>
      </div>

      <div className="w-full space-y-6 mb-12">
        <div className="space-y-4">
          <p className="text-gray-600 italic">i. Instructions</p>
          <ul className="space-y-3 text-gray-600">
            <li className="flex gap-2">
              <span>•</span>
              <span>
                A confirmation email with all the session details has been sent to{" "}
                <span className="text-[#29B6F6]">amari123@gmail.com</span>
              </span>
            </li>
            <li className="flex gap-2">
              <span>•</span>
              <span>
                If this is your first session, consider jotting down any key points or questions
                you want to discuss.
              </span>
            </li>
          </ul>
        </div>
      </div>

      <Link
        href="/"
        className="w-full bg-[#29B6F6] text-white py-4 px-6 rounded-xl text-center hover:bg-[#0288D1] transition-colors"
      >
        Back to home
      </Link>
    </main>
  );
}