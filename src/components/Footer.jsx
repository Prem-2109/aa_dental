import React from "react";
import { Linkedin, Instagram, Facebook, Twitter } from "lucide-react";

export default function DentalFooter() {
  return (
    <footer className="relative bg-gradient-to-br from-blue-900 via-blue-950 to-black text-white">
      {/* Decorative top wave */}
      {/* <div className="absolute -top-6 left-0 right-0 overflow-hidden leading-none ">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-6 rotate-180 text-blue-900"
        >
          <path
            d="M321.39,56.44C178.6,71.73,51.16,94.9,0,120H1200V0C1131.65,36.83,1010.91,62,867.69,71.58,723.52,81.29,565.86,72,421.64,55.17,382.5,50.77,351.84,52.78,321.39,56.44Z"
            fill="currentColor"
          ></path>
        </svg>
      </div> */}

      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-gray-700 pb-10">
          {/* Address */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 relative inline-block">
              Visit Us
              <span className="absolute left-0 -bottom-1 w-10 h-[2px] bg-blue-500"></span>
            </h3>
            <p className="text-gray-300 leading-relaxed">
              AADental Clinic, #3, VSV Shopping Complex, <br />
              TNHB Road, Arakkonam - 631001
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 relative inline-block">
              Contact
              <span className="absolute left-0 -bottom-1 w-10 h-[2px] bg-blue-500"></span>
            </h3>
            <p className="text-gray-300">
              <span className="block">
                <strong>T:</strong> +91 9087231303
              </span>
              <span className="block">
                <strong>E:</strong> care@aadental.in
              </span>
            </p>
          </div>

          {/* Social Links */}
          <div className="md:text-right">
            <h3 className="text-lg font-semibold text-white mb-4 relative inline-block md:after:left-auto md:after:right-0">
              Follow Us
              <span className="absolute left-0 md:left-auto md:right-0 -bottom-1 w-10 h-[2px] bg-blue-500"></span>
            </h3>
            <div className="flex md:justify-end gap-5">
              {[
                { icon: Linkedin, label: "LinkedIn", color: "hover:text-blue-500", link: "#" },
                {
                  icon: Instagram,
                  label: "Instagram",
                  color: "hover:text-pink-500",
                  link: "https://www.instagram.com/aa__dental_care/?igsh=MW1mdmdlcWw5czk3dA%3D%3D#"
                },
                { icon: Twitter, label: "Twitter", color: "hover:text-sky-400", link: "#" },
                { icon: Facebook, label: "Facebook", color: "hover:text-blue-600", link: "#" },
              ].map(({ icon: Icon, label, color, link }) => (
                <a
                  key={label}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group ${color} transition-all duration-300`}
                  aria-label={label}
                >
                  <div className="bg-gray-800 group-hover:bg-gray-700 p-3 rounded-full shadow-lg transition-transform transform group-hover:-translate-y-1">
                    <Icon size={20} />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-10 text-sm text-white">
          <p>© {new Date().getFullYear()} AADental Clinic. All rights reserved.</p>
          <a
            href="#"
            className="mt-3 md:mt-0 hover:text-blue-400 transition-colors"
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
