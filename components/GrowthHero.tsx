export default function GrowthHero() {
  return (
    <section className="relative bg-black text-white py-24 px-6">
      {/* Orange Glow Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black to-orange-900/40 pointer-events-none" />

      <div className="relative max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Let&apos;s Build Your{" "}
          <span className="text-orange-500">Growth Strategy</span>
        </h1>

        <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
          Whether you're launching your first business or scaling to the next
          level — we&apos;re here to help.
        </p>
      </div>
    </section>
  );
}