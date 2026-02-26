"use client";

interface TeamMember {
  name: string;
  role: string;
  description: string;
  image: string;
}

const team: TeamMember[] = [
  {
    name: "Amit Verma",
    role: "Founder & CEO",
    description: "15+ years in digital marketing and growth strategy",
    image: "/team/member1.jpg",
  },
  {
    name: "Sneha Patel",
    role: "Head of SEO",
    description: "Expert in technical and international SEO",
    image: "/team/member2.jpg",
  },
  {
    name: "Rahul Desai",
    role: "Lead Developer",
    description: "Specialist in performance-driven web development",
    image: "/team/member3.jpg",
  },
  {
    name: "Priya Menon",
    role: "Content Strategist",
    description: "Creates content strategies that rank and convert",
    image: "/team/member4.jpg",
  },
];

export default function TeamSection() {
  return (
    <section className="bg-black py-24 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Meet Our <span className="text-[#f97316]">Team</span>
          </h2>

          <p className="mt-6 text-zinc-400 text-lg max-w-3xl mx-auto leading-relaxed">
            Behind Run2Rank is a team of 50 digital experts across Web
            Development, SEO Strategy, Content, Technical Optimization, and
            Growth Strategy.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="group rounded-2xl border border-white/10 bg-gradient-to-br from-zinc-900 to-black p-6 transition-all duration-500 hover:border-orange-500/40 hover:shadow-[0_0_40px_rgba(249,115,22,0.15)]"
            >
              {/* Image */}
              <div className="overflow-hidden rounded-xl mb-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Info */}
              <h3 className="text-lg font-semibold text-white">
                {member.name}
              </h3>

              <p className="text-[#f97316] font-medium mt-1">
                {member.role}
              </p>

              <p className="text-zinc-400 mt-3 text-sm leading-relaxed">
                {member.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}