"use client";

import { useState } from "react";

export default function AboutMe() {
  const [isExpanded, setIsExpanded] = useState(false);

  const shortDescription = `Hello, I'm Swetha, a licensed therapist dedicated to guiding individuals through life's challenges with empathy and expertise. With over 10 years of experience, I specialize in helping clients manage anxiety, depression, and relationship issues through personalized, evidence-based practices.`;

  const fullDescription = `Hello, I'm Swetha, a licensed therapist dedicated to guiding individuals through life's challenges with empathy and expertise. With over 10 years of experience, I specialize in helping clients manage anxiety, depression, and relationship issues through personalized, evidence-based practices.

My commitment to continuous learning keeps me updated with the latest therapeutic techniques, allowing me to provide the best possible care. Whether you seek stress management strategies or personal growth, I am here to empower you on your journey towards emotional well-being. I offer convenient online consultation bookings, making it easier for you to take the first step towards a healthier, happier life.`;

  return (
    <section>
      <h2 className="text-lg font-medium mb-3">About me</h2>
      <p className="text-gray-600 text-[15px] mb-2">
        {isExpanded ? fullDescription : shortDescription}
      </p>
      <button 
        onClick={() => setIsExpanded(!isExpanded)}
        className="text-[#29B6F6] text-sm hover:text-blue-400"
      >
        {isExpanded ? "Show less" : "Read more"}
      </button>
    </section>
  );
}