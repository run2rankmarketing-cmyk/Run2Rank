"use client";

interface ProcessStep {
  number: number;
  title: string;
  description: string;
}

interface OurProcessProps {
  title?: string;
  highlight?: string;
  subtitle?: string;
  steps?: ProcessStep[];
}

const defaultSteps: ProcessStep[] = [
  {
    number: 1,
    title: "Discovery & Strategy",
    description:
      "We analyze your business, competitors, and market to create a customized growth roadmap.",
  },
  {
    number: 2,
    title: "Build & Optimize",
    description:
      "We develop your website and implement technical foundations for long-term success.",
  },
  {
    number: 3,
    title: "Rank & Scale",
    description:
      "We execute SEO strategies to increase visibility and drive qualified organic traffic.",
  },
  {
    number: 4,
    title: "Measure & Improve",
    description:
      "We track performance, analyze data, and continuously optimize for better results.",
  },
];

export default function OurProcess({
  title = "Our",
  highlight = "Process",
  subtitle = "Growth isn't accidental. It's engineered.",
  steps = defaultSteps,
}: OurProcessProps) {
  return (
    <section className="relative py-24 px-6 bg-black text-white overflow-hidden">
      
      {/* Radial Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#111_0%,_#000_60%)] -z-10" />

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="md:text-5xl text-3xl font-bold">
            {title}{" "}
            <span className="text-[#f97316]">{highlight}</span>
          </h2>
          <p className="mt-4 text-lg md:text-xl text-gray-300">
            {subtitle}
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div
              key={step.number}
              className="relative bg-[#111111] border border-[#1f1f1f]
                         rounded-2xl p-8
                         hover:border-[#f97316]
                         transition-all duration-300"
            >
              {/* Number Circle */}
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-[#f97316] text-black text-xl font-bold mb-6">
                {step.number}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-4">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}