"use client";

import { useState } from "react";
import Link from "next/link";
import SessionPackage from "@/components/booking/SessionPackage";

const PACKAGES = [
  {
    id: "group",
    title: "Group Therapy",
    price: 3200,
    duration: ["45 min", "60 min", "90 min"],
    features: [
      "Joint Evaluation",
      "Communication Exercises",
      "Conflict Resolution",
      "Goal Setting",
      "Follow up plan"
    ]
  },
  {
    id: "individual",
    title: "Individual Therapy",
    price: 3200,
    duration: ["45 min", "60 min", "90 min"],
    features: [
      "Joint Evaluation",
      "Communication Exercises",
      "Conflict Resolution",
      "Goal Setting",
      "Follow up plan"
    ]
  },
  {
    id: "couple",
    title: "Couple Therapy",
    price: 3200,
    duration: ["45 min", "60 min", "90 min"],
    features: [
      "Joint Evaluation",
      "Communication Exercises",
      "Conflict Resolution",
      "Goal Setting",
      "Follow up plan"
    ]
  }
];

export default function BookSession() {
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);

  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex items-center mb-6">
        <Link href="/" className="text-[#29B6F6] flex items-center gap-2">
          ← Back
        </Link>
      </div>

      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Choose your session package</h1>
        <p className="text-gray-600">Select the therapy package that best suits your needs</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {PACKAGES.map((pkg) => (
          <SessionPackage
            key={pkg.id}
            title={pkg.title}
            price={pkg.price}
            duration={pkg.duration}
            features={pkg.features}
            isSelected={selectedPackage === pkg.id}
            onSelect={() => setSelectedPackage(pkg.id)}
          />
        ))}
      </div>

      {selectedPackage && (
        <div className="mt-8 flex justify-end">
          <Link
            href="/book/schedule"
            className="bg-[#29B6F6] text-white px-8 py-3 rounded-lg hover:bg-blue-400 transition-colors"
          >
            Continue to Scheduling
          </Link>
        </div>
      )}
    </main>
  );
}