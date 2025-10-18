import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export default function DentalHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#" },
    { name: "Services", href: "#" },
    { name: "Resources", href: "#" },
    { name: "We are hiring!", href: "#" },
  ];

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-5 py-3">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="text-2xl font-extrabold text-blue-600">AI</span>
          <span className="text-2xl font-extrabold text-gray-800">Dental</span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className={`text-gray-700 hover:text-blue-600 transition ${
                link.name === "Home" ? "text-blue-700 font-medium" : ""
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <button className="hidden md:block bg-blue-700 hover:bg-blue-800 text-white text-sm font-semibold px-5 py-2 rounded-md transition">
          Book Appointment
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-sm">
          <nav className="flex flex-col px-5 py-3 space-y-2">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-gray-700 hover:text-blue-600 transition py-1"
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <button className="w-full mt-2 bg-blue-700 hover:bg-blue-800 text-white text-sm font-semibold px-4 py-2 rounded-md transition">
              Book Appointment
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
