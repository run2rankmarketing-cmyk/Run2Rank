import { Users, Globe, Briefcase, Award } from "lucide-react";

const stats = [
  {
    id: 1,
    icon: Users,
    value: "50+",
    label: "Digital Experts",
  },
  {
    id: 2,
    icon: Globe,
    value: "3",
    label: "Countries Served",
  },
  {
    id: 3,
    icon: Briefcase,
    value: "200+",
    label: "Projects Delivered",
  },
  {
    id: 4,
    icon: Award,
    value: "5+",
    label: "Years of Experience",
  },
];

export default function StatsSection() {
  return (
    <section className="bg-black py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div
              key={stat.id}
              className="bg-[#0c0c0c] border border-zinc-800 rounded-2xl p-10 text-center 
                         hover:border-orange-500/40 transition-all duration-300"
            >
              <div className="flex justify-center mb-6">
                <Icon className="text-orange-500 w-10 h-10" />
              </div>

              <h3 className="text-4xl font-bold text-white mb-2">
                {stat.value}
              </h3>

              <p className="text-zinc-400 text-sm tracking-wide">
                {stat.label}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}