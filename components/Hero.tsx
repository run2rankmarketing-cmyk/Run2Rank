"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative bg-black text-white overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 w-[600px] h-[600px] bg-Black blur-[120px]" />
        <div className="absolute right-0 top-0 w-[600px] h-[600px] bg-black blur-[140px]" />
      </div>

      <div className="relative max-w-[1100px] mx-auto px-6 pt-32 pb-28 text-center">
        
        {/* Trusted Badge */}
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-sm mb-8">
          🚀 Trusted by 200+ Businesses Worldwide
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight mb-8">
          From{" "}
          <span className="text-[#f97316]">Zero
          to
          Ranked.</span>
          <br />
          From Idea to{" "}
          <span className="text-[#f97316]">Impact.</span>
        </h1>

        {/* Subtext */}
        <p className="text-gray-400 text-lg md:text-xl max-w-[750px] mx-auto leading-relaxed mb-12">
          We help small businesses build powerful websites and scale sustainably
          with result-driven SEO strategies.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
          
          {/* Primary Button */}
          <Link
            href="#"
            className="bg-[#f97316] hover:bg-orange-700 transition px-8 py-4 rounded-xl text-lg font-semibold shadow-lg shadow-orange-600/20"
          >
            Get a Free Consultation →
          </Link>

          {/* Secondary Button */}
          <Link
            href="#"
            className="px-8 py-4 rounded-xl text-lg font-semibold border border-neutral-700 bg-neutral-900 hover:border-orange-500 hover:text-orange-500 transition"
          >
            See How We Work
          </Link>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-20 flex justify-center">
          <div className="w-7 h-12 border-2 border-orange-500 rounded-full flex justify-center items-start p-1">
            <div className="w-1.5 h-3 bg-orange-500 rounded-full animate-bounce" />
          </div>
        </div>

      </div>
    </section>
  );
}