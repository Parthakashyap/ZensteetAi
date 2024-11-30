"use client";

interface TimeSlot {
  time: string;
  available: boolean;
}

interface TimeSlotsProps {
  selectedSlot: string;
  onSelectSlot: (slot: string) => void;
}

export default function TimeSlots({ selectedSlot, onSelectSlot }: TimeSlotsProps) {
  const slots = {
    morning: [
      { time: "8:00 - 8:45 AM", available: true },
      { time: "9:00 - 9:45 AM", available: true },
      { time: "11:00 - 11:45 AM", available: true },
      { time: "11:00 - 11:45 AM", available: true },
    ],
    afternoon: [
      { time: "12:00 - 12:45 PM", available: true },
      { time: "2:00 - 2:45 PM", available: true },
      { time: "3:00 - 3:45 PM", available: true },
      { time: "4:00 - 4:45 PM", available: true },
    ],
    evening: [
      { time: "5:00 - 5:45 PM", available: true },
      { time: "6:00 - 6:45 PM", available: true },
      { time: "7:00 - 7:45 PM", available: true },
      { time: "8:00 - 8:45 PM", available: true },
    ],
  };

  return (
    <div className="grid grid-cols-3 gap-6">
      <div>
        <h3 className="text-gray-500 mb-4">Morning</h3>
        <div className="space-y-2">
          {slots.morning.map((slot) => (
            <button
              key={slot.time}
              onClick={() => onSelectSlot(slot.time)}
              disabled={!slot.available}
              className={`
                w-full py-2 px-4 rounded-full border transition-colors text-sm
                ${
                  selectedSlot === slot.time
                    ? "border-blue-500 text-[#29B6F6]"
                    : "border-gray-300 text-gray-700 hover:border-gray-400"
                }
                ${!slot.available && "opacity-50 cursor-not-allowed"}
              `}
            >
              {slot.time}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-gray-500 mb-4">Afternoon</h3>
        <div className="space-y-2">
          {slots.afternoon.map((slot) => (
            <button
              key={slot.time}
              onClick={() => onSelectSlot(slot.time)}
              disabled={!slot.available}
              className={`
                w-full py-2 px-4 rounded-full border transition-colors text-sm
                ${
                  selectedSlot === slot.time
                    ? "border-blue-500 text-blue-500"
                    : "border-gray-300 text-gray-700 hover:border-gray-400"
                }
                ${!slot.available && "opacity-50 cursor-not-allowed"}
              `}
            >
              {slot.time}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-gray-500 mb-4">Evening</h3>
        <div className="space-y-2">
          {slots.evening.map((slot) => (
            <button
              key={slot.time}
              onClick={() => onSelectSlot(slot.time)}
              disabled={!slot.available}
              className={`
                w-full py-2 px-4 rounded-full border transition-colors text-sm
                ${
                  selectedSlot === slot.time
                    ? "border-blue-500 text-blue-500"
                    : "border-gray-300 text-gray-700 hover:border-gray-400"
                }
                ${!slot.available && "opacity-50 cursor-not-allowed"}
              `}
            >
              {slot.time}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}