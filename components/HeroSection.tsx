// components/HeroSection.tsx

import React from "react";

export default function HeroSection() {
  return (
    <section className="w-full bg-gradient-to-b from-[#4a1505] to-[#3a0f04] text-white">
      <div className="max-w-6xl mx-auto px-6 py-24 text-center">
        
        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Ready to Take Your Business from{" "}
          <span className="text-[#f97316]">0 to 1?</span>
        </h1>

        {/* Subheading */}
        <p className="mt-6 text-lg md:text-xl text-gray-300">
          Let&apos;s build your digital growth engine.
        </p>

        {/* CTA Button */}
        <div className="mt-10">
          <button className="inline-flex items-center gap-3 bg-[#f97316] hover:bg-orange-600 transition-all duration-300 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-orange-500/40">
            Book a Free Strategy Call
            <span className="text-xl">→</span>
          </button>
        </div>

      </div>
    </section>
  );
}