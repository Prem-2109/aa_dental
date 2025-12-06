import React from "react";
import { motion } from "framer-motion";

export default function DentalExpertise() {
  const services = [
    { name: "General Dentistry", img: "https://cdn-icons-png.flaticon.com/512/2966/2966327.png" },
    { name: "Aesthetic Dentistry", img: "https://cdn-icons-png.flaticon.com/512/5987/5987583.png" },
    { name: "Orthodontics", img: "https://cdn-icons-png.flaticon.com/512/3004/3004468.png" },
    { name: "Dental Implants", img: "https://cdn-icons-png.flaticon.com/512/4306/4306558.png" },
    { name: "Pediatric Dentistry", img: "https://cdn-icons-png.flaticon.com/512/3481/3481027.png" },
    { name: "Teeth Whitening", img: "https://cdn-icons-png.flaticon.com/512/3625/3625054.png" },
    { name: "Root Canal Therapy", img: "https://cdn-icons-png.flaticon.com/512/3081/3081333.png" },
    { name: "Emergency Dental Care", img: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png" },
  ];

  return (
    <section className="relative bg-gradient-to-b from-blue-50 via-white to-blue-100 py-20 px-6 sm:px-10 md:px-16">
      {/* Decorative background circles */}
      <div className="absolute top-20 left-10 w-24 h-24 bg-blue-200 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-pink-200 rounded-full blur-3xl opacity-50"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto text-center relative z-10"
      >
        {/* Tagline */}
        <p className="inline-block bg-blue-100 text-blue-700 font-semibold tracking-wider text-xs sm:text-sm px-5 py-1 rounded-full mb-5">
          Our Expertise
        </p>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-snug mb-12">
          Advanced Dental Services for Every Smile
        </h2>

        {/* Grid of cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{
                y: -8,
                scale: 1.05,
                boxShadow: "0 12px 30px rgba(0, 100, 255, 0.15)",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 18 }}
              className="group bg-white rounded-3xl p-6 sm:p-8 shadow-md hover:shadow-2xl border border-gray-100 hover:border-blue-200 cursor-pointer flex flex-col items-center text-center transform transition-all duration-300"
            >
              {/* Icon */}
              <motion.div
                initial={{ scale: 0.9 }}
                whileHover={{ scale: 1.1 }}
                className="bg-blue-50 group-hover:bg-blue-100 rounded-full p-4 mb-4 transition-all duration-300"
              >
                <img
                  src={service.img}
                  alt={service.name}
                  className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                />
              </motion.div>

              {/* Name */}
              <h3 className="text-base sm:text-lg font-semibold text-gray-800 group-hover:text-blue-700 transition">
                {service.name}
              </h3>

              {/* Accent bar */}
              <motion.div
                className="w-8 h-1 bg-blue-600 rounded-full mt-3 opacity-0 group-hover:opacity-100 transition-all"
                layoutId="underline"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
