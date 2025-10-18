
import React from "react";
import { Linkedin, Instagram, Facebook, Twitter } from "lucide-react"; // npm install lucide-react

export default function DentalFooter() {
  return (
    <footer className="bg-[#000] border-t border-gray-200 py-8 px-6 text-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        {/* Address Section */}
        <div className="flex-1 text-white text-sm leading-relaxed">
          <p className="border-l-2 border-gray-300 pl-3">
            AADental Clinic, 2nd Floor, Sunshine Plaza, <br />
            OMR Road, Thiruvanmiyur, Chennai, India – 600041
          </p>
        </div>

        {/* Contact Info */}
        <div className="flex-1 text-white text-sm leading-relaxed">
          <p className="border-l-2 border-gray-300 pl-3">
            <span className="block">
              <strong>T:</strong> +91 98765 43210
            </span>
            <span className="block">
              <strong>E:</strong> care@aadental.in
            </span>
          </p>
        </div>

        {/* Social Links */}
        <div className="flex flex-col items-center md:items-end gap-3">
          <div className="flex gap-5">
            <a
              href="#"
              aria-label="LinkedIn"
              className="flex flex-col items-center text-white hover:text-blue-700"
            >
              <Linkedin size={22} />
              <span className="text-xs mt-1">LinkedIn</span>
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="flex flex-col items-center text-white hover:text-pink-600"
            >
              <Instagram size={22} />
              <span className="text-xs mt-1">Instagram</span>
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="flex flex-col items-center text-white hover:text-blue-500"
            >
              <Twitter size={22} />
              <span className="text-xs mt-1">X</span>
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="flex flex-col items-center text-white hover:text-blue-700"
            >
              <Facebook size={22} />
              <span className="text-xs mt-1">Facebook</span>
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200 my-6"></div>

      {/* Bottom Info */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-white text-sm">
        <p>© 2025 AADental Clinic</p>
        <a href="#" className="hover:text-blue-600">
          Privacy Policy
        </a>
      </div>
    </footer>
  );
}

