import React from "react";
import BannerImage from "../assets/images/dental.jpg";


export default function DentalHero() {
  return (
    <section className="relative bg-gradient-to-br overflow-hidden bg-[url(/src/assets/images/hero-banner.jpg)]">
      {/* Background decorative element */}
      

      <div className="max-w-7xl mx-auto px-6 py-20 md:py-28 relative z-10 flex flex-col-reverse md:flex-row items-center gap-10">
        {/* Left Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-4xl font-extrabold text-gray-900 leading-tight">
            Your Smile, Our Priority —{" "}
            <span className="text-blue-600">Advanced Dental Care You Can Trust</span>
          </h1>

          <p className="mt-5 text-gray-600 text-lg md:text-xl max-w-lg mx-auto md:mx-0">
            Experience compassionate, state-of-the-art dental care designed for your comfort and confidence. 
            Our team combines advanced technology with a patient-first approach to keep your smile healthy and bright.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded-lg font-semibold transition shadow-md">
              Book an Appointment
            </button>
            <button className="border border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white px-8 py-3 rounded-lg font-semibold transition">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={BannerImage}
            alt="Confident smiling patient at dental clinic"
            className="rounded-2xl shadow-xl w-[85%] md:w-full object-cover"
          />
        </div>
      </div>

      {/* Decorative Shapes */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-blue-200 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-100 rounded-full blur-3xl opacity-40"></div>
    </section>
  );
}
