"use client";

import {
  Shield,
  Target,
  Zap,
  TrendingUp,
  Lightbulb,
  Heart,
} from "lucide-react";

const values = [
  {
    title: "Transparency",
    description: "Clear communication and honest reporting at every step",
    icon: Shield,
  },
  {
    title: "Accountability",
    description: "We own our results and deliver what we promise",
    icon: Target,
  },
  {
    title: "Execution Excellence",
    description: "Quality work that exceeds expectations",
    icon: Zap,
  },
  {
    title: "Long-Term Thinking",
    description: "Building sustainable growth, not quick wins",
    icon: TrendingUp,
  },
  {
    title: "Continuous Innovation",
    description: "Always learning, evolving, and improving",
    icon: Lightbulb,
  },
  {
    title: "Partnership Approach",
    description: "Your success is our success",
    icon: Heart,
  },
];

export default function CoreValues() {
  return (
    <section className="bg-black py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
          Our Core{" "}
          <span className="text-orange-500">Values</span>
        </h2>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;

            return (
              <div
                key={index}
                className="group rounded-2xl border border-white/10 bg-gradient-to-br from-zinc-900 to-black p-8 transition-all duration-500 hover:border-orange-500/40 hover:shadow-[0_0_40px_rgba(249,115,22,0.15)]"
              >
                {/* Icon */}
                <div className="mb-6 w-14 h-14 flex items-center justify-center rounded-full text-orange-500">
                  <Icon size={44} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-white mb-3">
                  {value.title}
                </h3>

                {/* Description */}
                <p className="text-zinc-400 leading-relaxed">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}