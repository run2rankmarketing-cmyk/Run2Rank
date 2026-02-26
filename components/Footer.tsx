"use client";

import Link from "next/link";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300">
      <div className="max-w-[1200px] mx-auto px-6 pt-20 pb-10">
        
        {/* Top Grid */}
        <div className="grid md:grid-cols-4 gap-12">
          
          {/* Column 1 */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="text-[#f97316] text-2xl">⚡</span>
              <span className="text-white font-semibold text-xl">
                Run<span className="text-[#f97316]">2Rank</span>
              </span>
            </div>

            <p className="text-gray-400 leading-relaxed mb-6">
              Empowering businesses to build powerful digital foundations and 
              scale sustainably with result-driven strategies.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4">
              {[Linkedin, Twitter, Facebook, Instagram].map((Icon, i) => (
                <div
                  key={i}
                  className="w-10 h-10 flex items-center justify-center rounded-lg bg-neutral-900 hover:bg-orange-500/20 transition cursor-pointer"
                >
                  <Icon size={18} />
                </div>
              ))}
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-lg">
              Quick Links
            </h3>
            <ul className="space-y-4">
              {["Home", "About Us", "Services", "Portfolio", "Blog"].map(
                (item, i) => (
                  <li key={i}>
                    <Link
                      href="#"
                      className="hover:text-[#f97316] transition"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-lg">
              Services
            </h3>
            <ul className="space-y-4">
              {[
                "Website Development",
                "SEO Services",
                "Technical SEO",
                "Local SEO",
                "International SEO",
              ].map((item, i) => (
                <li key={i}>
                  <Link
                    href="#"
                    className="hover:text-[#f97316] transition"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-lg">
              Contact Us
            </h3>

            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-[#f97316]" />
                <span>hello@run2rank.com</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={18} className="text-[#f97316]" />
                <span>+91 123 456 7890</span>
              </div>

              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-[#f97316] mt-1" />
                <span>India • United States • United Kingdom</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-neutral-800 mt-16 pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
          
          <p>© 2026 Run2Rank. All rights reserved.</p>

          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-[#f97316] transition">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-[#f97316] transition">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}