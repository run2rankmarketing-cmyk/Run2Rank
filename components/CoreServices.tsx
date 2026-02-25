import { Code2, TrendingUp, CheckCircle2, ArrowRight } from "lucide-react";

export default function CoreServices() {
  return (
    <section className="bg-black text-white py-28 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-6xl font-bold tracking-tight">
            Our Core{" "}
            <span className="text-orange-500">Services</span>
          </h2>
          <p className="text-zinc-400 mt-6 text-xl">
            Two powerful pillars for your digital growth
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid lg:grid-cols-2 gap-10">

          {/* Card 1 */}
          <div className="relative bg-[#0b0b0b] border border-zinc-800 rounded-2xl p-12 hover:border-orange-500/40 transition-all duration-300">

            <Code2 className="text-orange-500 w-10 h-10 mb-8" />

            <h3 className="text-2xl font-semibold mb-6">
              Website Development
            </h3>

            <p className="text-zinc-400 leading-relaxed mb-8 text-lg">
              We build fast, scalable, and conversion-focused websites designed
              to turn visitors into customers.
            </p>

            <ul className="space-y-5 mb-10">
              {[
                "Custom website development",
                "Mobile-first responsive design",
                "Performance optimization",
                "Conversion-driven architecture",
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-4 text-zinc-300 text-lg">
                  <CheckCircle2 className="text-orange-500 w-5 h-5" />
                  {item}
                </li>
              ))}
            </ul>

            <button className="group inline-flex items-center gap-3 border border-orange-500 text-orange-500 px-6 py-3 rounded-lg hover:bg-orange-500 hover:text-white transition-all duration-300">
              Learn More
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
            </button>
          </div>

          {/* Card 2 */}
          <div className="relative bg-[#0b0b0b] border border-zinc-800 rounded-2xl p-12 hover:border-orange-500/40 transition-all duration-300">

            <TrendingUp className="text-orange-500 w-10 h-10 mb-8" />

            <h3 className="text-2xl font-semibold mb-6">
              SEO Services
            </h3>

            <p className="text-zinc-400 leading-relaxed mb-8 text-lg">
              We help businesses rank where it matters — on Google and beyond.
            </p>

            <ul className="space-y-5 mb-10">
              {[
                "Technical SEO",
                "On-page optimization",
                "Content strategy",
                "Local & International SEO",
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-4 text-zinc-300 text-lg">
                  <CheckCircle2 className="text-orange-500 w-5 h-5" />
                  {item}
                </li>
              ))}
            </ul>

            <button className="group inline-flex items-center gap-3 border border-orange-500 text-orange-500 px-6 py-3 rounded-lg hover:bg-orange-500 hover:text-white transition-all duration-300">
              Learn More
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}