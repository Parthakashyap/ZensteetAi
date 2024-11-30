"use client";

import Link from "next/link";
import { Calendar } from "lucide-react";
import { useRouter } from "next/navigation";

export default function BookingDetails() {
  const router = useRouter();

  const handleBooking = () => {
    router.push("/book/confirmation");
  };

  return (
    <main className="max-w-lg mx-auto px-4 py-8">
      <div className="flex items-center mb-6">
        <Link href="/book" className="text-gray-600">
          ←
        </Link>
      </div>

      <div className="bg-white rounded-3xl shadow-sm overflow-hidden">
        <div className="bg-[#29B6F6] text-white p-6">
          <div className="flex justify-between items-center mb-4">
            <button className="flex items-center gap-2 text-sm">
              <Calendar className="w-5 h-5" />
              Change date
            </button>
            <span className="text-xl font-medium">₹ 2,400/-</span>
          </div>
          <div>
            <h2 className="text-lg font-medium">Sat, 06 Aug</h2>
            <p className="text-sm">3:30 PM - 4:20 PM</p>
          </div>
        </div>

        <div className="p-6 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First Name"
              className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-[#29B6F6] focus:border-[#29B6F6]"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-[#29B6F6] focus:border-[#29B6F6]"
            />
          </div>

          <input
            type="email"
            placeholder="E-mail"
            className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-[#29B6F6] focus:border-[#29B6F6]"
          />

          <div className="relative">
            <input
              type="tel"
              placeholder="+91 9000 000000"
              className="w-full pl-16 pr-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-[#29B6F6] focus:border-[#29B6F6]"
            />
            <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
              <span>🇮🇳</span>
              <span className="text-gray-400">-</span>
            </div>
          </div>

          <p className="text-sm text-gray-500">
            i. You will receive booking details on WhatsApp
          </p>

          <div className="space-y-4 pt-2">
            <h3 className="text-sm font-medium">Have you been referred by your employer?</h3>
            <div className="flex items-center gap-2">
              <input 
                type="checkbox" 
                id="employer-referral"
                className="w-4 h-4 rounded border-gray-300 text-[#29B6F6] focus:ring-[#29B6F6]" 
              />
              <label htmlFor="employer-referral" className="text-sm">
                Yes, I am employed under a partnering company
              </label>
            </div>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="'Partnering Company Name' or 'Company ID'"
                className="flex-1 px-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-[#29B6F6] focus:border-[#29B6F6]"
              />
              <button className="px-6 py-2 bg-[#29B6F6] text-white rounded-lg text-sm hover:bg-[#0288D1] transition-colors">
                Verify
              </button>
            </div>
          </div>

          <button 
            onClick={handleBooking}
            className="w-full py-3 bg-gray-300 text-white rounded-lg text-sm mt-4 hover:bg-gray-400 transition-colors"
          >
            Book session
          </button>
        </div>
      </div>
    </main>
  );
}