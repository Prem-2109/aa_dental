import React from "react";
import { motion } from 'framer-motion';
import { slideUpVariants, zoomInVariants } from './animation'
import { HeartPulse } from "lucide-react"; // install with: npm install lucide-react

export default function DentalTrustSection() {
  const currentYear = new Date().getFullYear();

  return (
    <section className="w-full bg-white py-16 px-6">
      <motion.div initial="hidden"
                whileInView="visible"
                variants={slideUpVariants} className="max-w-3xl mx-auto text-center flex flex-col items-center">
        {/* Red Heart Icon */}
        <div className="bg-blue-50 p-4 rounded-full mb-6 flex items-center justify-center">
          <HeartPulse size={32} className="text-red-500" />
        </div>

        {/* Main Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
          Trusted by families since {currentYear - 10}
        </h2>

        {/* Supporting Text */}
        <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-xl">
          For over a decade, we’ve combined cutting-edge dental technology with compassionate, personalized care. 
          Our team is dedicated to helping every patient achieve a confident, healthy smile in a welcoming, 
          comfortable environment.
        </p>

        {/* Decorative Line */}
        <div className="mt-8 h-1 w-24 bg-blue-500 rounded-full"></div>
      </motion.div>
    </section>
  );
}
