"use client";

import { ArrowRightIcon } from "@heroicons/react/24/solid";

export default function CTASection() {
  return (
    <section className="w-full bg-gradient-to-r from-[#2a0d00] via-[#3b1400] to-[#2a0d00] py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
          Ready to{" "}
          <span className="text-[#f97316]">Grow Your Business?</span>
        </h2>

        {/* Subtext */}
        <p className="mt-6 text-lg text-gray-300">
          Let's discuss how we can help you achieve your digital goals
        </p>

        {/* Button */}
        <div className="mt-10">
          <button className="inline-flex items-center gap-3 bg-[#f97316] hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-xl transition duration-300 shadow-lg hover:shadow-orange-500/30">
            Schedule a Free Consultation
            <ArrowRightIcon className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}