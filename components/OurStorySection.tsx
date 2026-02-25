"use client";

import Image from "next/image";

export default function OurStorySection() {
  return (
    <section className="bg-black text-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold">
              Our <span className="text-orange-500">Story</span>
            </h2>

            <div className="mt-8 space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                Run2Rank was created with one clear vision — to help small
                businesses build strong digital foundations and scale confidently.
              </p>

              <p>
                We noticed that many startups struggle in the early stage —
                poor websites, no organic presence, and no structured growth roadmap.
                That's where we stepped in.
              </p>

              <p>
                For years, we've served the Indian market, helping businesses
                establish credibility and visibility online. Over the last two years,
                we've expanded into the{" "}
                <span className="text-orange-500 font-medium">US and UK</span>,
                delivering global-level execution with a growth-first mindset.
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="absolute -inset-2 bg-gradient-to-r from-orange-600/30 to-orange-900/20 blur-2xl rounded-3xl" />
            
            <div className="relative rounded-3xl overflow-hidden border border-zinc-800">
              <Image
                src="/images/story-image.jpg" // Replace with your image path
                alt="Our Story"
                width={800}
                height={600}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}