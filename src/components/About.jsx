import React from "react";
import { Phone } from "lucide-react";

export default function About({ toothImage }) {
  return (
    <section className="flex justify-center items-center py-20 px-4">
      <div className="relative w-full max-w-6xl">
        {/* Main Banner */}
        <div className="bg-[#00468B] text-white rounded-[50px] flex items-center justify-between px-12 md:px-16 py-10 md:py-12 relative overflow-hidden">
          {/* Left Content */}
          <div className="flex flex-col gap-6 text-left max-w-xl pr-8">
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              NEED TO CONSULT YOUR DENTAL<br />
              PROBLEM WITH EXPERTS?
            </h2>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <span className="font-semibold text-lg whitespace-nowrap">
                Talk to Our Dental Expert
              </span>

              <a
                href="tel:+919513446025"
                className="flex items-center gap-2 bg-[#E91E8C] hover:bg-[#d01a7d] text-white font-bold rounded-full px-6 py-3.5 text-base transition-all shadow-lg whitespace-nowrap"
              >
                <Phone size={20} className="text-white" />
                +91 9513446025
              </a>
            </div>
          </div>

          {/* Right side - Tooth Image positioned to overlap */}
          <div className="absolute -top-16 right-12 w-72 h-auto pointer-events-none">
            <img 
              src={toothImage || "https://via.placeholder.com/300x350?text=Tooth"}
              alt="Tooth Character with Toothbrush" 
              className="w-full h-full object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}