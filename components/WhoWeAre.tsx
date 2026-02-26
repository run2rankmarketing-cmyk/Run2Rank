import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function WhoWeAre() {
  return (
    <section className="bg-black text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="md:text-5xl text-3xl font-bold">
            Who <span className="text-[#f97316]">We Are</span>
          </h2>
          <p className="mt-6 text-lg text-zinc-400 max-w-3xl mx-auto">
            Run2Rank is a digital marketing agency built for businesses in their 0–1 growth journey.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Image */}
          <div className="relative w-full h-[450px] rounded-3xl overflow-hidden">
            <Image
              src="/images/team.jpeg" // Replace with your image path
              alt="Our Team"
              fill
              className="object-cover"
            />
          </div>

          {/* Right Content */}
          <div>
            <p className="text-lg text-zinc-300 leading-relaxed mb-8">
              With a team of{" "}
              <span className="text-[#f97316] font-semibold">
                50 digital experts
              </span>
              , we specialize in building high-performance websites and driving
              long-term organic growth through SEO.
            </p>

            <p className="text-lg text-zinc-300 leading-relaxed mb-10">
              We've successfully supported brands across India, and over the last
              2 years, expanded into the{" "}
              <span className="text-[#f97316] font-semibold">
                US and UK markets
              </span>
              , helping businesses compete and win globally.
            </p>

            <button className="inline-flex items-center gap-3 bg-[#f97316] hover:bg-orange-600 transition-all duration-300 px-8 py-4 rounded-xl text-white font-semibold shadow-lg shadow-orange-500/20">
              Learn More About Us
              <ArrowRight size={18} />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}