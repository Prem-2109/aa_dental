import React from "react";
import { motion } from "framer-motion";
import { slideUpVariants, zoomInVariants } from './animation'

export default function DentalExpertise() {
  const services = [
    { name: "General Dentistry", img: "https://cdn-icons-png.flaticon.com/512/2966/2966327.png" },
    { name: "Cosmetic Dentistry", img: "https://cdn-icons-png.flaticon.com/512/4221/4221623.png" },
    { name: "Orthodontics", img: "https://cdn-icons-png.flaticon.com/512/3004/3004468.png" },
    { name: "Dental Implants", img: "https://cdn-icons-png.flaticon.com/512/4306/4306558.png" },
    { name: "Pediatric Dentistry", img: "https://cdn-icons-png.flaticon.com/512/3481/3481027.png" },
    { name: "Teeth Whitening", img: "https://cdn-icons-png.flaticon.com/512/3625/3625054.png" },
    { name: "Root Canal Therapy", img: "https://cdn-icons-png.flaticon.com/512/3081/3081333.png" },
    { name: "Emergency Dental Care", img: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png" },
  ];

  return (
    <section
      className="bg-white py-16 px-6 sm:px-10 md:px-14 lg:px-20"
      id="services"
    >
      <motion.div initial="hidden"
                      whileInView="visible"
                      variants={slideUpVariants} className="max-w-6xl mx-auto text-center">
        {/* Label */}
        <p className="inline-block text-xs sm:text-sm uppercase tracking-wider bg-gray-100 text-gray-600 px-4 py-1 rounded-full mb-4">
          What We Do
        </p>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-snug mb-10">
          Creating Beautiful Smiles <br className="hidden sm:block" />
          through Specialized Dental Care.
        </h2>

        {/* Service Pills */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-5">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.08, y: -5 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 10,
                duration: 0.2,
              }}
              className="flex items-center gap-3 bg-gray-50 hover:bg-blue-50 transition-all px-4 sm:px-5 py-2.5 sm:py-3 rounded-full shadow-sm cursor-pointer w-full sm:w-auto justify-start sm:justify-center"
            >
              <motion.img
                src={service.img}
                alt={service.name}
                className="w-6 h-6 sm:w-8 sm:h-8 rounded-full object-cover"
                whileHover={{
                  scale: [1, 1.2, 1],
                  transition: { duration: 0.4, ease: "easeInOut" },
                }}
              />
              <span className="font-medium text-gray-800 text-sm sm:text-base whitespace-nowrap">
                {service.name}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
