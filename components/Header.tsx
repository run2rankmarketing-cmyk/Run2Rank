"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname(); // current path detect karega

  // function to check if link is active
  const isActive = (href: string) => pathname === href;

  return (
    <header className="w-full bg-black">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between h-[90px] px-6">
        
        {/* Logo */}
        <div className="flex items-center gap-3">
          <span className="text-[#39FF14] text-2xl">⚡</span>
          <span className="text-white font-semibold text-xl">
            Run<span className="text-[#39FF14]">2Rank</span>
          </span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-10 text-[17px] font-medium">
          <Link
            href="/"
            className={`relative after:absolute after:-bottom-2 after:left-0 after:w-full after:h-[2px] 
                        ${isActive("/") ? "text-[#39FF14] after:bg-[#39FF14]" : "text-gray-300 hover:text-white after:hidden"}`}
          >
            Home
          </Link>

          <Link
            href="/about-us"
            className={`relative ${isActive("/about-us") ? "text-[#39FF14] after:absolute after:-bottom-2 after:left-0 after:w-full after:h-[2px] after:bg-[#39FF14]" : "text-gray-300 hover:text-white"}`}
          >
            About Us
          </Link>

          <Link
            href="/services"
            className={`relative ${isActive("/services") ? "text-[#39FF14] after:absolute after:-bottom-2 after:left-0 after:w-full after:h-[2px] after:bg-[#39FF14]" : "text-gray-300 hover:text-white"}`}
          >
            Services
          </Link>

          <Link
            href="/portfolio"
            className={`relative ${isActive("/portfolio") ? "text-[#39FF14] after:absolute after:-bottom-2 after:left-0 after:w-full after:h-[2px] after:bg-[#39FF14]" : "text-gray-300 hover:text-white"}`}
          >
            Portfolio
          </Link>

          <Link
            href="#"
            className={`relative ${isActive("/blog") ? "text-[#39FF14] after:absolute after:-bottom-2 after:left-0 after:w-full after:h-[2px] after:bg-[#39FF14]" : "text-gray-300 hover:text-white"}`}
          >
            Blog
          </Link>

          <Link
            href="/contact-us"
            className={`relative ${isActive("/contact-us") ? "text-[#39FF14] after:absolute after:-bottom-2 after:left-0 after:w-full after:h-[2px] after:bg-[#39FF14]" : "text-gray-300 hover:text-white"}`}
          >
            Contact
          </Link>
        </nav>

        {/* CTA Button */}
        <div>
          <button className="bg-[#39FF14] hover:bg-[#39FF14] transition px-6 py-3 rounded-xl text-white font-semibold shadow-lg shadow-orange-500/20">
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
}