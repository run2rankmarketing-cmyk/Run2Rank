"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (href: string) => pathname === href;

  return (
    <header className="w-full bg-black sticky top-0 z-50">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between h-[80px] px-4 md:px-6">

        {/* Logo */}
        <Link href="/"><div className="flex items-center gap-2 md:gap-2">
          <span className="text-[#f97316] text-xl md:text-2xl">⚡</span>
          <span className="text-white font-semibold text-lg md:text-xl">
            Run<span className="text-[#f97316]">2Rank</span>
          </span>
        </div></Link> 

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-[16px] font-medium">
          <Link
            href="/"
            className={`relative after:absolute after:-bottom-2 after:left-0 after:w-full after:h-[2px]
              ${
                isActive("/")
                  ? "text-orange-500 after:bg-orange-500"
                  : "text-gray-300 hover:text-white after:hidden"
              }`}
          >
            Home
          </Link>

          <Link
            href="/about-us"
            className={`relative ${
              isActive("/about-us")
                ? "text-orange-500 after:absolute after:-bottom-2 after:left-0 after:w-full after:h-[2px] after:bg-orange-500"
                : "text-gray-300 hover:text-white"
            }`}
          >
            About Us
          </Link>

          <Link
            href="/services"
            className={`relative ${
              isActive("/services")
                ? "text-orange-500 after:absolute after:-bottom-2 after:left-0 after:w-full after:h-[2px] after:bg-orange-500"
                : "text-gray-300 hover:text-white"
            }`}
          >
            Services
          </Link>

          <Link
            href="/portfolio"
            className={`relative ${
              isActive("/portfolio")
                ? "text-orange-500 after:absolute after:-bottom-2 after:left-0 after:w-full after:h-[2px] after:bg-orange-500"
                : "text-gray-300 hover:text-white"
            }`}
          >
            Portfolio
          </Link>

          <Link
            href="/#"
            className={`relative ${
              isActive("/blog")
                ? "text-orange-500 after:absolute after:-bottom-2 after:left-0 after:w-full after:h-[2px] after:bg-orange-500"
                : "text-gray-300 hover:text-white"
            }`}
          >
            Blog
          </Link>

          <Link
            href="/contact-us"
            className={`relative ${
              isActive("/contact-us")
                ? "text-orange-500 after:absolute after:-bottom-2 after:left-0 after:w-full after:h-[2px] after:bg-orange-500"
                : "text-gray-300 hover:text-white"
            }`}
          >
            Contact
          </Link>
        </nav>

        {/* CTA Button Desktop */}
        <div className="hidden md:block">
          <Link href="/contact-us#contact">
            <button className="bg-[#f97316] hover:bg-orange-600 transition px-6 py-3 rounded-xl text-white font-semibold shadow-lg shadow-orange-500/20">
              Get Started
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white text-2xl"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black border-t border-gray-800">
          <nav className="flex flex-col items-center gap-6 py-6 text-gray-300 text-lg">

            <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link href="/about-us" onClick={() => setMenuOpen(false)}>About Us</Link>
            <Link href="/services" onClick={() => setMenuOpen(false)}>Services</Link>
            <Link href="/portfolio" onClick={() => setMenuOpen(false)}>Portfolio</Link>
            <Link href="/blog" onClick={() => setMenuOpen(false)}>Blog</Link>
            <Link href="/contact-us" onClick={() => setMenuOpen(false)}>Contact</Link>

            <Link href="/contact-us#contact">
              <button className="bg-[#f97316] hover:bg-orange-600 transition px-6 py-3 rounded-xl text-white font-semibold shadow-lg shadow-orange-500/20">
                Get Started
              </button>
            </Link>

          </nav>
        </div>
      )}
    </header>
  );
}