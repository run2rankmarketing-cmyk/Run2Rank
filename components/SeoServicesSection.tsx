"use client";

import Image from "next/image";
import {
  TrendingUp,
  Check,
  ArrowRight,
  Target,
  FileText,
  BarChart3,
  Globe,
} from "lucide-react";

export default function SeoServicesSection() {
  return (
    <section className="bg-black text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* LEFT CONTENT */}
          <div>
            {/* Icon */}
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-orange-500/10 text-orange-500 mb-6">
              <TrendingUp size={24} />
            </div>

            {/* Title */}
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              SEO <span className="text-orange-500">Services</span>
            </h2>

            <p className="text-lg font-semibold mb-4">
              Rank Higher. Grow Organically. Scale Sustainably.
            </p>

            <p className="text-gray-400 mb-8 max-w-xl">
              We don’t believe in short-term tricks. We build long-term ranking
              systems that deliver sustainable organic growth.
            </p>

            {/* Features List */}
            <ul className="space-y-4 mb-8">
              {[
                "Technical SEO Audit & Fixes",
                "Keyword Strategy & Research",
                "On-Page Optimization",
                "Content Optimization",
                "Local SEO",
                "International SEO (US & UK)",
                "Analytics & Reporting",
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-orange-500/10 text-orange-500">
                    <Check size={16} />
                  </span>
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>

            {/* Highlight Box */}
            <div className="border border-orange-500/30 bg-orange-500/5 rounded-lg px-5 py-4 mb-6 text-sm text-orange-400">
              SEO is not an expense — it’s a long-term asset.
            </div>

            {/* CTA */}
            <button className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 transition px-6 py-3 rounded-lg font-medium">
              Start Ranking Today
              <ArrowRight size={18} />
            </button>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative w-full h-[520px] rounded-2xl overflow-hidden">
            <Image
              src="/seo-image.jpg" // replace with your image
              alt="SEO Dashboard"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* 🔥 Bottom 4 Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="group bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-orange-500/40 transition">
            <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-orange-500/10 text-orange-500 mb-4">
              <Target size={20} />
            </div>
            <p className="text-gray-400 group-hover:text-gray-300 text-sm">
              Fix crawl issues, improve site architecture
            </p>
          </div>

          {/* Card 2 */}
          <div className="group bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-orange-500/40 transition">
            <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-orange-500/10 text-orange-500 mb-4">
              <FileText size={20} />
            </div>
            <p className="text-gray-400 group-hover:text-gray-300 text-sm">
              Create content that ranks and converts
            </p>
          </div>

          {/* Card 3 */}
          <div className="group bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-orange-500/40 transition">
            <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-orange-500/10 text-orange-500 mb-4">
              <BarChart3 size={20} />
            </div>
            <p className="text-gray-400 group-hover:text-gray-300 text-sm">
              Transparent reporting and analytics
            </p>
          </div>

          {/* Card 4 */}
          <div className="group bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-orange-500/40 transition">
            <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-orange-500/10 text-orange-500 mb-4">
              <Globe size={20} />
            </div>
            <p className="text-gray-400 group-hover:text-gray-300 text-sm">
              Expand to US & UK markets
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}