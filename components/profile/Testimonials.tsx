"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { FaQuoteLeft } from "react-icons/fa";


interface Testimonial {
  text: string;
  author: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    text: "The guidance I received helped me manage my stress and live a more balanced life.",
    author: "Anonymous"
  },
  {
    text: "Therapy helped me build self-esteem and confidence that I never thought possible.",
    author: "Anonymous"
  },
  {
    text: "Dr. Swetha's approach is both professional and compassionate. Highly recommended!",
    author: "Anonymous"
  },
  {
    text: "The sessions have given me practical tools to handle anxiety and improve relationships.",
    author: "Anonymous"
  }
];

export default function Testimonials() {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const visibleTestimonials = isExpanded ? TESTIMONIALS : TESTIMONIALS.slice(0, 2);

  return (
    <section>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-medium">Client Testimonials</h2>
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-sm text-[#29B6F6] flex items-center gap-1"
        >
          Show {isExpanded ? 'less' : 'more'}
          {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>
      </div>
      
      <div className="grid md:grid-cols-2 gap-4">
        {visibleTestimonials.map((testimonial, index) => (
          <div 
            key={index}
            className="bg-white p-6 rounded-xl shadow-sm shadow-black/70"
          >
            <FaQuoteLeft className="text-[#29B6F6] w-8 h-8 mb-10"/>

            <p className="text-[15px] text-gray-600 mb-4">
              "{testimonial.text}"
            </p>
            <p className="text-sm text-gray-500">{testimonial.author}</p>
          </div>
        ))}
      </div>
    </section>
  );
}