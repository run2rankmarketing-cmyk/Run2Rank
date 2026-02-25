"use client";

import { Star } from "lucide-react";
import Image from "next/image";

interface Testimonial {
  name: string;
  role: string;
  image: string;
  content: string;
}

interface TestimonialsProps {
  title?: string;
  highlight?: string;
  testimonials?: Testimonial[];
}

const defaultTestimonials: Testimonial[] = [
  {
    name: "Priya Sharma",
    role: "Founder & CEO, TechStart India",
    image: "/avatars/avatar1.jpg",
    content:
      "Run2Rank transformed our digital presence completely. From a basic website to ranking on Google's first page in 6 months. Their team understood our 0-1 journey perfectly.",
  },
  {
    name: "Michael Roberts",
    role: "Marketing Director, GreenLeaf Solutions",
    image: "/avatars/avatar2.jpg",
    content:
      "We expanded from India to the US market with Run2Rank's SEO strategy. Their technical expertise and transparent reporting made all the difference. Highly recommended!",
  },
  {
    name: "Sarah Johnson",
    role: "Co-Founder, Urban Fitness UK",
    image: "/avatars/avatar3.jpg",
    content:
      "The website they built is fast, beautiful, and converts. Our bounce rate dropped by 40% and conversions increased by 65%. Worth every penny.",
  },
  {
    name: "Rajesh Kumar",
    role: "CEO, FreshMart Online",
    image: "/avatars/avatar4.jpg",
    content:
      "Best decision we made for our startup. Run2Rank's team is professional, responsive, and results-driven. They don't just build websites, they build growth engines.",
  },
];

export default function Testimonials({
  title = "What Our",
  highlight = "Clients Say",
  testimonials = defaultTestimonials,
}: TestimonialsProps) {
  return (
    <section className="relative py-24 px-6 bg-black text-white overflow-hidden">

      {/* Radial Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#111_0%,_#000_60%)] -z-10" />

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold">
            {title}{" "}
            <span className="text-[#ff7a1a]">{highlight}</span>
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-[#111111] border border-[#1f1f1f]
                         rounded-2xl p-8
                         hover:border-[#ff7a1a]
                         transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-2 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-[#ff7a1a] fill-[#ff7a1a]"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-300 leading-relaxed mb-8">
                {testimonial.content}
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}