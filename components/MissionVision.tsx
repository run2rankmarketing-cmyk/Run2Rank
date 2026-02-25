"use client";

import { Target, Eye } from "lucide-react";

export default function MissionVision() {
  return (
    <section className="bg-black py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        
        {/* Mission Card */}
        <div className="relative group rounded-2xl border border-white/10 bg-gradient-to-br from-zinc-900 to-black p-10 transition-all duration-500 hover:border-orange-500/40 hover:shadow-[0_0_40px_rgba(249,115,22,0.15)]">
          
          <div className="mb-6">
            <div className="w-14 h-14 flex items-center justify-center rounded-full border-2 border-orange-500 text-orange-500">
              <Target size={28} />
            </div>
          </div>

          <h3 className="text-3xl font-semibold text-white mb-4">
            Our Mission
          </h3>

          <p className="text-zinc-400 text-lg leading-relaxed">
            To empower 0–1 stage businesses with the right digital systems that
            drive sustainable and scalable growth.
          </p>
        </div>

        {/* Vision Card */}
        <div className="relative group rounded-2xl border border-white/10 bg-gradient-to-br from-zinc-900 to-black p-10 transition-all duration-500 hover:border-orange-500/40 hover:shadow-[0_0_40px_rgba(249,115,22,0.15)]">
          
          <div className="mb-6">
            <div className="w-14 h-14 flex items-center justify-center rounded-full border-2 border-orange-500 text-orange-500">
              <Eye size={28} />
            </div>
          </div>

          <h3 className="text-3xl font-semibold text-white mb-4">
            Our Vision
          </h3>

          <p className="text-zinc-400 text-lg leading-relaxed">
            To become a globally trusted growth partner for emerging brands
            across markets.
          </p>
        </div>

      </div>
    </section>
  );
}