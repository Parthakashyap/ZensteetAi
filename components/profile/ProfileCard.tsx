"use client";

import Image from "next/image";
import Link from "next/link";
import { Share2, MapPin } from "lucide-react";
import { useState } from "react";
import ShareModal from "./ShareModal";

export default function ProfileCard() {
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);

  return (
    <div className="bg-[#29B6F6] rounded-none p-6 w-[400px]">
      <div className="flex items-center gap-2 mb-6">
        <Link href="/" className="text-white flex items-center gap-2">
          ← Back
        </Link>
      </div>

      <div className="bg-white rounded-xl p-4">
        <div className="relative mb-4">
          <Image
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&h=400&auto=format&fit=crop"
            alt="Swetha Varma"
            width={400}
            height={400}
            className="rounded-lg w-full"
          />
          <button 
            onClick={() => setIsShareModalOpen(true)}
            className="absolute top-4 right-4 p-2.5 bg-white rounded-full shadow-md hover:bg-gray-50"
          >
            <Share2 className="w-5 h-5 text-[#29B6F6]" />
          </button>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-1 justify-center">
            <h1 className="text-xl font-medium">Swetha Varma</h1>
            <span className="text-[#29B6F6] text-lg">✓</span>
          </div>
          <p className="flex justify-center text-[15px] text-gray-700">Consultant Clinical Psychologist</p>
          <p className="text-sm flex justify-center text-gray-600 mb-4">10+ Years of experience</p>
          
          <div className="mb-4 ">
            <p className="text-xs justify-center flex text-gray-500">Starts at</p>
            <div className="flex items-baseline gap-1 justify-center ">
              <span className="text-xl font-medium ">₹1,200</span>
              <span className="text-sm text-gray-500">/Session</span>
            </div>
          </div>
          <div className="flex items-center gap-2 text-gray-600 mb-4 justify-center">
            <MapPin className="w-4 h-4" />
            <span className="text-sm">Block A2, Delhi</span>
          </div>
          
        </div>
      </div>
<div className="mt-10">
          <Link 
            href="/book"
            className="block w-full bg-white text-[#29B6F6] py-3 px-6 rounded-full text-center hover:bg-white/90 transition-colors"
          >
            Book session
          </Link>
          </div>

      <ShareModal 
        isOpen={isShareModalOpen}
        onClose={() => setIsShareModalOpen(false)}
      />
    </div>
  );
}