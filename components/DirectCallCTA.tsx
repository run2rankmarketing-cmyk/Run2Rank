export default function DirectCallCTA() {
  return (
    <section className="relative py-20 px-6 bg-black text-white overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-950 via-black to-orange-950/80" />

      <div className="relative max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold">
          Prefer a Direct Call?
        </h2>

        <p className="mt-4 text-lg text-gray-300">
          Schedule a free strategy call with our team
        </p>

        <button className="mt-8 px-8 py-3 bg-[#f97316] hover:bg-orange-600 transition-colors duration-300 text-white font-semibold rounded-lg shadow-lg hover:shadow-orange-500/30">
          Book a Free Consultation
        </button>
      </div>
    </section>
  );
}