"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full bg-black">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between h-[90px] px-6">
        
        {/* Logo */}
        <div className="flex items-center gap-3">
          {/* Lightning Icon */}
          <div className="text-orange-500 text-2xl font-bold">
            ⚡
          </div>

          {/* Blue Logo Box */}
          <div className="bg-blue-600 px-4 py-2 rounded-sm">
            <span className="text-white font-semibold text-xl tracking-wide">
              Run2Rank
            </span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-10 text-[17px] font-medium">
          <Link
            href="/"
            className="text-orange-500 relative after:absolute after:-bottom-2 after:left-0 after:w-full after:h-[2px] after:bg-orange-500"
          >
            Home
          </Link>

          <Link href="#" className="text-gray-300 hover:text-white transition">
            About Us
          </Link>

          <Link href="#" className="text-gray-300 hover:text-white transition">
            Services
          </Link>

          <Link href="#" className="text-gray-300 hover:text-white transition">
            Portfolio
          </Link>

          <Link href="#" className="text-gray-300 hover:text-white transition">
            Blog
          </Link>

          <Link href="#" className="text-gray-300 hover:text-white transition">
            Contact
          </Link>
        </nav>

        {/* CTA Button */}
        <div>
          <button className="bg-orange-500 hover:bg-orange-600 transition px-6 py-3 rounded-xl text-white font-semibold shadow-lg shadow-orange-500/20">
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
}