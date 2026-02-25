"use client";

import { Users, Zap, TrendingUp, Shield } from "lucide-react";

export default function AboutSection() {
  const stats = [
    {
      icon: Users,
      value: "50+",
      label: "Digital Experts",
    },
    {
      icon: Zap,
      value: "3",
      label: "Countries Served",
    },
    {
      icon: TrendingUp,
      value: "200+",
      label: "Projects Delivered",
    },
    {
      icon: Shield,
      value: "5+",
      label: "Years of Experience",
    },
  ];

  return (
    <section className="bg-black text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-900/40 via-black to-black" />

        <div className="relative max-w-7xl mx-auto px-6 py-24 text-center">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
            About <span className="text-orange-500">Run2Rank</span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Empowering businesses to build strong digital foundations and scale confidently
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <div
                key={index}
                className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-10 text-center hover:border-orange-500/40 transition duration-300"
              >
                <Icon className="mx-auto text-orange-500" size={40} />
                <h3 className="mt-6 text-4xl font-bold text-white">
                  {stat.value}
                </h3>
                <p className="mt-2 text-gray-400">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
