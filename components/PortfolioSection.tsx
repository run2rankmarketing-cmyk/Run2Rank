"use client";

import { useState } from "react";
import Image from "next/image";
import { ExternalLink } from "lucide-react";

/* ============================= */
/*           TYPES               */
/* ============================= */

type Category =
  | "All"
  | "SEO"
  | "Website Development"
  | "International SEO"
  | "Local SEO"
  | "E-commerce SEO"
  | "Market Entry"
  | "Performance Optimization"
  | "Technical SEO"
  | "Content Optimization";

interface CaseStudy {
  id: number;
  title: string;
  image: string;
  categories: Category[];
  client: string;
  location: string;
  industry: string;
  duration: string;
  challenge: string;
  solution: string;
  results: string[];
}

/* ============================= */
/*         CATEGORIES            */
/* ============================= */

const categories: Category[] = [
  "All",
  "SEO",
  "Website Development",
  "International SEO",
  "Local SEO",
  "E-commerce SEO",
//   "Market Entry",
//   "Performance Optimization",
//   "Technical SEO",
//   "Content Optimization",
];

/* ============================= */
/*        CASE STUDIES           */
/* ============================= */

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: "TechStart India: 300% Organic Growth in 8 Months",
    image: "/images/Portfolio-1.jpg",
    categories: ["SEO", "Website Development"],
    client: "TechStart India",
    location: "India",
    industry: "SaaS Technology",
    duration: "8 months",
    challenge:
      "Zero organic presence, generic website, no clear growth strategy",
    solution:
      "Complete website rebuild, technical SEO optimization, content strategy, and local SEO implementation",
    results: [
      "300% increase in organic traffic",
      "First page rankings for 25+ keywords",
      "45% reduction in bounce rate",
      "150+ qualified leads per month",
    ],
  },
  {
    id: 2,
    title: "Urban Fitness UK: From Local to National Presence",
    image: "/images/Portfolio-2.jpg",
    categories: ["Local SEO", "Website Development", "International SEO"],
    client: "Urban Fitness UK",
    location: "United Kingdom",
    industry: "Health & Fitness",
    duration: "10 months",
    challenge:
      "Limited to one city, outdated website, no online bookings",
    solution:
      "Modern website with booking system, nationwide SEO strategy, content marketing",
    results: [
      "Expanded to 5 cities",
      "500% increase in online bookings",
      "Top 3 rankings in target cities",
      "£50K+ monthly revenue increase",
    ],
  },
  {
    id: 3,
    title: "GreenLeaf Solutions: US Market Entry Success",
    image: "/images/Portfolio-3.jpg",
    categories: [
      "International SEO",
      "Market Entry",
      "Performance Optimization",
    ],
    client: "GreenLeaf Solutions",
    location: "United States",
    industry: "Eco-Friendly Products",
    duration: "12 months",
    challenge:
      "New market entry, zero brand awareness, competing with established players",
    solution:
      "US-focused SEO strategy, localized content, performance website, conversion optimization",
    results: [
      "Page 1 rankings in 6 months",
      "400% increase in US traffic",
      "65% conversion rate improvement",
      "$200K+ in first year revenue",
    ],
  },
  {
    id: 4,
    title: "FreshMart: E-commerce SEO Breakthrough",
    image: "/images/Portfolio-4.jpg",
    categories: [
      "E-commerce SEO",
      "Technical SEO",
      "Content Optimization",
    ],
    client: "FreshMart Online",
    location: "Global",
    industry: "E-commerce",
    duration: "9 months",
    challenge:
      "High ad costs, low organic visibility, poor product page performance",
    solution:
      "E-commerce SEO optimization, product page redesign, technical fixes, content enhancement",
    results: [
      "70% reduction in ad spending",
      "250% organic revenue growth",
      "1000+ product pages ranking",
      "15K+ monthly organic visitors",
    ],
  },
];

/* ============================= */
/*       COMPONENT START         */
/* ============================= */

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] =
    useState<Category>("All");

  const filtered =
    activeCategory === "All"
      ? caseStudies
      : caseStudies.filter((item) =>
          item.categories.includes(activeCategory)
        );

  return (
    <section className="bg-black text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold">
            Our <span className="text-[#f97316]">Portfolio</span>
          </h2>
          <p className="text-gray-400 mt-4">
            Real results from real businesses. See how we've helped
            companies grow from 0 to 1.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm transition-all border ${
                activeCategory === cat
                  ? "bg-[#f97316] text-white border-orange-500 shadow-lg shadow-orange-500/30"
                  : "border-gray-700 text-gray-300 hover:border-orange-500 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden hover:border-orange-500/50 transition duration-300"
            >
              {/* Image */}
              <div className="relative h-64 w-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.categories.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 bg-orange-500/10 text-[#f97316] rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-6">
                  {item.title}
                </h3>

                {/* Meta Info */}
                <div className="grid grid-cols-2 gap-4 text-sm text-gray-400 mb-6">
                  <div>
                    <p className="text-gray-500">Client</p>
                    <p>{item.client}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Location</p>
                    <p>{item.location}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Industry</p>
                    <p>{item.industry}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Duration</p>
                    <p>{item.duration}</p>
                  </div>
                </div>

                {/* Challenge */}
                <div className="mb-4">
                  <h4 className="text-[#f97316] font-medium mb-2">
                    Challenge
                  </h4>
                  <p className="text-gray-400 text-sm">
                    {item.challenge}
                  </p>
                </div>

                {/* Solution */}
                <div className="mb-6">
                  <h4 className="text-[#f97316] font-medium mb-2">
                    Solution
                  </h4>
                  <p className="text-gray-400 text-sm">
                    {item.solution}
                  </p>
                </div>

                {/* Results */}
                <div className="mb-6">
                  <h4 className="text-[#f97316] font-medium mb-3">
                    Results
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {item.results.map((result, i) => (
                      <div
                        key={i}
                        className="bg-neutral-800 border border-neutral-700 rounded-lg px-4 py-3 text-sm text-gray-300"
                      >
                        {result}
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <button className="w-full bg-[#f97316] hover:bg-orange-600 transition rounded-lg py-3 font-medium flex items-center justify-center gap-2">
                  View Full Case Study
                  <ExternalLink size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}