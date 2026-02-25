"use client";

import { Check } from "lucide-react";

const defaultFeatures = [
  "50+ In-House Experts",
  "Proven Results Across 3 Countries",
  "Startup-Focused Growth Strategy",
  "Transparent Reporting",
  "Performance-Driven Execution",
  "Long-Term Partnership Approach",
];

interface WhyRun2RankProps {
  features?: string[];
  title?: string;
  highlight?: string;
  subtitleTop?: string;
  subtitleBottom?: string;
}

export default function WhyRun2Rank({
  features = defaultFeatures,
  title = "Why",
  highlight = "Run2Rank?",
  subtitleTop = "We don't just build websites.",
  subtitleBottom = "We build digital foundations that scale.",
}: WhyRun2RankProps) {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 text-white bg-black">
      
      {/* Radial Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#111_0%,_#000_60%)] -z-10" />

      {/* Heading */}
      <h1 className="text-5xl md:text-6xl font-bold text-center mb-16">
        {title}{" "}
        <span className="text-[#ff7a1a]">
          {highlight}
        </span>
      </h1>

      {/* Features Grid */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl w-full mb-20">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex items-center gap-4 bg-[#111111] border border-[#1f1f1f]
                       rounded-xl px-6 py-5
                       hover:border-[#ff7a1a]
                       transition-all duration-300"
          >
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-[#ff7a1a]">
              <Check className="text-[#ff7a1a] w-5 h-5" />
            </div>
            <p className="text-lg font-medium">{feature}</p>
          </div>
        ))}
      </div>

      {/* Bottom Text */}
      <div className="text-center space-y-3">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-300">
          {subtitleTop}
        </h2>
        <h3 className="text-4xl md:text-5xl font-bold text-[#ff7a1a]">
          {subtitleBottom}
        </h3>
      </div>
    </section>
  );
}