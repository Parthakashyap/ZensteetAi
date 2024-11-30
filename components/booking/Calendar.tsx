"use client";

import { ChevronRight } from "lucide-react";
import { useState } from "react";

interface CalendarProps {
  selectedDate: string;
  onSelectDate: (date: string) => void;
}

export default function Calendar({ selectedDate, onSelectDate }: CalendarProps) {
  const [currentMonth, setCurrentMonth] = useState("2024 Aug");
  
  // Calendar data structure
  const days = [
    { date: "01", day: "MON", available: false },
    { date: "02", day: "TUE", available: false },
    { date: "03", day: "WED", available: true },
    { date: "04", day: "THU", available: false },
    { date: "05", day: "FRI", available: false },
    { date: "06", day: "SAT", available: true },
    { date: "07", day: "SUN", available: true },
    { date: "08", day: "MON", available: false },
    { date: "09", day: "TUE", available: false },
    { date: "10", day: "WED", available: false },
    { date: "11", day: "THU", available: true },
    { date: "12", day: "FRI", available: false },
    { date: "13", day: "SAT", available: true },
    { date: "14", day: "SUN", available: true },
    { date: "15", day: "MON", available: true },
    { date: "16", day: "TUE", available: true },
    { date: "17", day: "WED", available: true },
    { date: "18", day: "THU", available: true },
    { date: "19", day: "FRI", available: true },
    { date: "20", day: "SAT", available: true },
    { date: "21", day: "SUN", available: true },
    { date: "22", day: "MON", available: false },
    { date: "23", day: "TUE", available: false },
    { date: "24", day: "WED", available: true },
    { date: "25", day: "THU", available: false },
    { date: "26", day: "FRI", available: true },
    { date: "27", day: "SAT", available: true },
    { date: "28", day: "SUN", available: true },
    { date: "29", day: "MON", available: true },
    { date: "30", day: "TUE", available: true },
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm p-4">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2">
          <h3 className="font-medium">Available date</h3>
          <div className="w-2 h-2 bg-[#29B6F6] rounded-full"></div>
        </div>
        <button className="flex items-center gap-1 text-sm">
          {currentMonth}
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      <div className="grid grid-cols-7 gap-2">
        {["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"].map((day) => (
          <div key={day} className="text-center text-sm text-gray-500">
            {day}
          </div>
        ))}
        
        {days.map((day) => (
          <button
            key={day.date}
            disabled={!day.available}
            onClick={() => onSelectDate(day.date)}
            className={`
              text-center py-2 rounded-full text-sm
              ${day.available ? "hover:bg-blue-50" : "text-gray-300"}
              ${selectedDate === day.date ? "bg-[#29B6F6] text-white" : ""}
            `}
          >
            {day.date}
          </button>
        ))}
      </div>
    </div>
  );
}