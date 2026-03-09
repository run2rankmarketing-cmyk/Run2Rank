"use client";

import { CheckCircleIcon } from "@heroicons/react/24/outline";

const features = [
  "Data-Driven Approach",
  "Transparent Reporting",
  "Proven Track Record",
  "Dedicated Account Manager",
  "50+ Expert Team",
  "Long-Term Partnership",
];

export default function WhyChooseUs() {
  return (
    <section className="w-full bg-black py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-16">
          Why Choose{" "}
          <span className="text-[#f97316]">Our Services?</span>
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-4 bg-zinc-900 border border-zinc-800 rounded-xl px-6 py-6 hover:border-orange-500 transition duration-300"
            >
              <CheckCircleIcon className="h-7 w-7 text-[#f97316]" />
              <p className="text-white text-lg font-medium">
                {feature}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}