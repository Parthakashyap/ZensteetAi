"use client";

interface SessionPackageProps {
  title: string;
  price: number;
  duration: string[];
  features: string[];
  isSelected?: boolean;
  onSelect: () => void;
}

export default function SessionPackage({
  title,
  price,
  duration,
  features,
  isSelected,
  onSelect,
}: SessionPackageProps) {
  return (
    <div 
      className={`p-6 rounded-lg border-2 transition-all ${
        isSelected 
          ? "border-[#29B6F6] bg-blue-50" 
          : "border-gray-200 hover:border-blue-200"
      }`}
    >
      <div className="mb-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <div className="flex items-baseline gap-1">
          <span className="text-2xl font-bold">₹{price}</span>
          <span className="text-gray-600">/session</span>
        </div>
      </div>

      <div className="mb-4">
        <div className="flex gap-2">
          {duration.map((time) => (
            <span
              key={time}
              className="px-3 py-1 bg-white rounded-full text-sm border border-gray-200"
            >
              {time}
            </span>
          ))}
        </div>
      </div>

      <ul className="space-y-2 mb-6">
        {features.map((feature) => (
          <li key={feature} className="flex items-center gap-2">
            <span className="text-[#29B6F6]">✓</span>
            {feature}
          </li>
        ))}
      </ul>

      <button
        onClick={onSelect}
        className={`w-full py-2 rounded-lg transition-colors ${
          isSelected
            ? "bg-[#29B6F6] text-white"
            : "bg-white text-[#29B6F6] border-2 border-blue-400"
        }`}
      >
        {isSelected ? "Selected" : "Proceed"}
      </button>
    </div>
  );
}