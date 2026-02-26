"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full bg-black">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between h-[90px] px-6">
        
        {/* Logo */}
        <div className="flex items-center gap-3">
          {/* Lightning Icon */}
        <span className="text-[#f97316] text-2xl">⚡</span>
              <span className="text-white font-semibold text-xl">
                Run<span className="text-[#f97316]">2Rank</span>
              </span>
         
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-10 text-[17px] font-medium">
          <Link
            href="/"
            className="text-orange-500 relative after:absolute after:-bottom-2 after:left-0 after:w-full after:h-[2px] after:bg-orange-500"
          >
            Home
          </Link>

          <Link href="about-us" className="text-gray-300 hover:text-white transition">
            About Us
          </Link>

          <Link href="/services" className="text-gray-300 hover:text-white transition">
            Services
          </Link>

          <Link href="/portfolio" className="text-gray-300 hover:text-white transition">
            Portfolio
          </Link>

          <Link href="#" className="text-gray-300 hover:text-white transition">
            Blog
          </Link>

          <Link href="/contact-us" className="text-gray-300 hover:text-white transition">
            Contact
          </Link>
        </nav>

        {/* CTA Button */}
        <div>
          <button className="bg-[#f97316] hover:bg-orange-600 transition px-6 py-3 rounded-xl text-white font-semibold shadow-lg shadow-orange-500/20">
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
}