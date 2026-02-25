"use client";

import Image from "next/image";
import {
  Check,
  Code2,
  ArrowRight,
  Target,
  TrendingUp,
  Globe,
} from "lucide-react";

export default function ServicesSection() {
  return (
    <section className="bg-black text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            Our <span className="text-orange-500">Services</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            We focus on two powerful growth pillars for your business success
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Image */}
          <div className="relative w-full h-[500px] rounded-2xl overflow-hidden">
            <Image
              src="/digital-marketing.jpg" // replace with your image
              alt="Digital Marketing"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Right Content */}
          <div>
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-orange-500/10 text-orange-500 mb-6">
              <Code2 size={24} />
            </div>

            <h3 className="text-3xl font-bold mb-3">
              Website <span className="text-orange-500">Development</span>
            </h3>

            <p className="text-lg font-semibold mb-4">
              Build a Website That Works as Hard as You Do
            </p>

            <p className="text-gray-400 mb-8">
              Your website is your digital storefront. We ensure it is fast,
              mobile-optimized, SEO-friendly, conversion-focused, and scalable.
            </p>

            <ul className="space-y-4 mb-8">
              {[
                "Custom Website Development",
                "UI/UX Optimization",
                "CMS-Based Websites",
                "Landing Pages",
                "Performance Optimization",
                "E-commerce Solutions",
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-orange-500/10 text-orange-500">
                    <Check size={16} />
                  </span>
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>

            <button className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 transition px-6 py-3 rounded-lg font-medium">
              Get a Website Built for Growth
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* 🔥 Bottom 3 Feature Blocks */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="group bg-zinc-900 border border-zinc-800 rounded-xl p-8 hover:border-orange-500/40 transition">
            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-orange-500/10 text-orange-500 mb-6">
              <Target size={22} />
            </div>
            <p className="text-gray-400 group-hover:text-gray-300 transition">
              Every element designed to turn visitors into customers
            </p>
          </div>

          {/* Card 2 */}
          <div className="group bg-zinc-900 border border-zinc-800 rounded-xl p-8 hover:border-orange-500/40 transition">
            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-orange-500/10 text-orange-500 mb-6">
              <TrendingUp size={22} />
            </div>
            <p className="text-gray-400 group-hover:text-gray-300 transition">
              Lightning-fast loading for better user experience
            </p>
          </div>

          {/* Card 3 */}
          <div className="group bg-zinc-900 border border-zinc-800 rounded-xl p-8 hover:border-orange-500/40 transition">
            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-orange-500/10 text-orange-500 mb-6">
              <Globe size={22} />
            </div>
            <p className="text-gray-400 group-hover:text-gray-300 transition">
              Perfect experience across all devices
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}