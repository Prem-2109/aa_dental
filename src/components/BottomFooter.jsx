import React from "react";

export default function Footer() {
  return (
    <footer className="relative bg-black text-white py-16 px-6 overflow-hidden">
      {/* Dotted Background Pattern */}
      <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(circle,_#3b82f6_2px,_transparent_2px)] [background-size:40px_40px]" />

      <div className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-start z-10">
        {/* Left Column – Services */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#" className="hover:text-blue-400 transition">General Dentistry</a></li>
            <li><a href="#" className="hover:text-blue-400 transition">Cosmetic Dentistry</a></li>
            <li><a href="#" className="hover:text-blue-400 transition">Dental Implants</a></li>
            <li><a href="#" className="hover:text-blue-400 transition">Orthodontics</a></li>
            <li><a href="#" className="hover:text-blue-400 transition">Pediatric Dentistry</a></li>
            <li><a href="#" className="hover:text-blue-400 transition">Emergency Care</a></li>
          </ul>
        </div>

        {/* Center Column – Logo + CTA */}
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-6">AI Dental Hospital</h2>
          <button className="bg-blue-600 hover:bg-blue-700 transition text-white px-6 py-3 rounded-md font-medium">
            Book Consultation
          </button>
        </div>

        {/* Right Column – Subscribe */}
        <div>
          <form className="flex flex-col space-y-3">
            <input
              type="email"
              placeholder="Subscribe for oral health tips"
              required
              className="bg-transparent border border-gray-700 px-4 py-2 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
            />
            <label className="flex items-start space-x-2 text-sm text-gray-400">
              <input type="checkbox" required className="mt-1" />
              <span>
                I agree to the <a href="#" className="underline hover:text-blue-400">Privacy Policy</a>
              </span>
            </label>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 transition text-white py-2 rounded-md font-medium"
            >
              Send →
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="relative border-t border-gray-800 mt-12 pt-6 text-center text-gray-500 text-sm z-10">
        © 2025 AI Dental Hospital. All rights reserved.
      </div>
    </footer>
  );
}