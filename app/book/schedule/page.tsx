"use client";

import Link from "next/link";
import { Home, Phone, Video } from "lucide-react";
import { useState } from "react";
import Calendar from "@/components/booking/Calendar";
import TimeSlots from "@/components/booking/TimeSlots";

export default function ScheduleSession() {
  const [selectedMode, setSelectedMode] = useState("in-person");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedSlot, setSelectedSlot] = useState("");
  const [view, setView] = useState<"slots" | "date">("slots");

  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <div className="flex items-center mb-6">
        <Link href="/book" className="text-[#29B6F6] flex items-center gap-2">
          ← Back
        </Link>
      </div>

      <h1 className="text-center text-2xl font-semibold mb-8">Select therapy mode</h1>

      <div className="grid grid-cols-3 gap-4 mb-8">
        <button
          className={`p-6 rounded-lg flex flex-col items-center gap-2 transition-colors ${
            selectedMode === "in-person" ? "bg-[#29B6F6] text-white" : "bg-gray-100"
          }`}
          onClick={() => setSelectedMode("in-person")}
        >
          <Home className="w-6 h-6" />
          <span>In-person</span>
          <span className="text-sm text-center">3rd Floor, A2, 35, Block A2, Delhi</span>
        </button>
        <button
          className={`p-6 rounded-lg flex flex-col items-center gap-2 transition-colors ${
            selectedMode === "video" ? "bg-[#29B6F6] text-white" : "bg-gray-100"
          }`}
          onClick={() => setSelectedMode("video")}
        >
          <Video className="w-6 h-6" />
          <span>Video</span>
        </button>
        <button
          className={`p-6 rounded-lg flex flex-col items-center gap-2 transition-colors ${
            selectedMode === "call" ? "bg-[#29B6F6] text-white" : "bg-gray-100"
          }`}
          onClick={() => setSelectedMode("call")}
        >
          <Phone className="w-6 h-6" />
          <span>Call</span>
        </button>
      </div>

      <div className="flex gap-4 mb-8">
        <button
          onClick={() => setView("slots")}
          className={`flex-1 py-2 px-4 rounded-full transition-colors ${
            view === "slots" ? "bg-black text-white" : "border border-gray-300"
          }`}
        >
          Slots
        </button>
        <button
          onClick={() => setView("date")}
          className={`flex-1 py-2 px-4 rounded-full transition-colors ${
            view === "date" ? "bg-black text-white" : "border border-gray-300"
          }`}
        >
          Date
        </button>
      </div>

      <div className="mb-8">
        {view === "slots" ? (
          <TimeSlots selectedSlot={selectedSlot} onSelectSlot={setSelectedSlot} />
        ) : (
          <Calendar selectedDate={selectedDate} onSelectDate={setSelectedDate} />
        )}
      </div>

      <Link
        href="/book/details"
        className={`block w-full text-center py-3 px-6 rounded-lg transition-colors ${
          selectedSlot || selectedDate
            ? "bg-[#29B6F6] text-white hover:bg-blue-400"
            : "bg-gray-200 text-gray-500 cursor-not-allowed"
        }`}
      >
        Proceed
      </Link>
    </main>
  );
}