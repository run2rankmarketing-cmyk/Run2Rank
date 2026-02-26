"use client";

import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  PaperAirplaneIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";

export default function ContactSection() {
  return (
    <section className="w-full bg-black py-20 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-10">
        {/* LEFT - FORM */}
        <div className="lg:col-span-2 bg-zinc-950 border border-zinc-800 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-400 mb-8">
            Fill out the form below and our team will connect with you within 24 hours.
          </p>

          <form className="space-y-6">
            {/* Name */}
            <input
              type="text"
              placeholder="John Doe"
              className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500"
            />

            {/* Email + Phone */}
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="email"
                placeholder="john@example.com"
                className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500"
              />
              <input
                type="tel"
                placeholder="+91 1234567890"
                className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500"
              />
            </div>

            {/* Company */}
            <input
              type="text"
              placeholder="Your Company Name"
              className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500"
            />

            {/* Services */}
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Website Development",
                "SEO Services",
                "Technical SEO",
                "Local SEO",
                "International SEO",
                "Content Strategy",
              ].map((service) => (
                <button
                  key={service}
                  type="button"
                  className="bg-zinc-900 border border-zinc-800 rounded-lg py-3 text-gray-300 hover:border-orange-500 hover:text-white transition"
                >
                  {service}
                </button>
              ))}
            </div>

            {/* Message */}
            <textarea
              rows={5}
              placeholder="Tell us about your project and goals..."
              className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500"
            />

            {/* Submit */}
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-3 bg-[#f97316] hover:bg-orange-600 text-white font-semibold py-4 rounded-xl transition shadow-lg hover:shadow-orange-500/30"
            >
              Send Message
              <PaperAirplaneIcon className="w-5 h-5" />
            </button>
          </form>
        </div>

        {/* RIGHT - INFO */}
        <div className="space-y-6">
          {/* Email */}
          <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6">
            <div className="bg-orange-500/10 p-3 w-fit rounded-lg mb-4">
              <EnvelopeIcon className="w-6 h-6 text-[#f97316]" />
            </div>
            <p className="text-gray-400">Email Us</p>
            <p className="text-white font-medium">hello@run2rank.com</p>
          </div>

          {/* Phone */}
          <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6">
            <div className="bg-orange-500/10 p-3 w-fit rounded-lg mb-4">
              <PhoneIcon className="w-6 h-6 text-[#f97316]" />
            </div>
            <p className="text-gray-400">Call Us</p>
            <p className="text-white font-medium">+91 123 456 7890</p>
          </div>

          {/* Location */}
          <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6">
            <div className="bg-orange-500/10 p-3 w-fit rounded-lg mb-4">
              <MapPinIcon className="w-6 h-6 text-[#f97316]" />
            </div>
            <p className="text-gray-400 mb-2">Our Presence</p>
            <ul className="text-gray-300 space-y-1 text-sm">
              <li>IN — India</li>
              <li>US — United States</li>
              <li>GB — United Kingdom</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="bg-gradient-to-br from-[#2a0d00] to-[#3b1400] border border-orange-900/40 rounded-2xl p-6">
            <h3 className="text-orange-500 font-semibold mb-4">
              Why Choose Us?
            </h3>
            <ul className="space-y-3 text-sm">
              {[
                "24-hour response time",
                "50+ digital experts",
                "Proven track record",
                "Transparent reporting",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-gray-300">
                  <CheckCircleIcon className="w-5 h-5 text-[#f97316]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}