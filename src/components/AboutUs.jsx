import React from "react";
import { motion } from "framer-motion";
import { assets } from "../assets/images/assets";
import { CalendarDays } from "lucide-react";
import { ShieldCheck } from "lucide-react";
export default function AboutUs() {
  const dentists = [
    {
      name: "Dr. A. Sakthivel",
      role: "Founder & Chief Dentist",
      image: assets.doctorOne,
      // qualification: "BDS, MDS (Oral Surgery)",
      // experience: "15+ Years Experience",
    },
    // {
    //   name: "Dr. Michael Adams",
    //   role: "Cosmetic Dentist",
    //   image: assets.doctorOne,
    //   qualification: "BDS, MDS (Aesthetic Dentistry)",
    //   experience: "12+ Years Experience",
    // },
  ];


  return (
    <section className="bg-white text-gray-800" id="about">
      {/* Intro Section */}
      <div id="" className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-green-50 py-24">
        {/* Diagonal Accent Background */}
        <div className="absolute inset-0 -skew-y-2 bg-gradient-to-r from-blue-100/30 via-transparent to-green-100/30 pointer-events-none"></div>

        {/* Flex Layout Wrapper */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">

          {/* Left - Text Content */}
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }} className="flex-1 text-center md:text-center">
            {/* Label */}
            <div className="flex items-center justify-center md:justify-center gap-2 mb-3">
              <div className="bg-blue-50 p-2 rounded-full shadow-sm">
                <ShieldCheck className="text-blue-700 w-5 h-5" />
              </div>
              <span className="text-sm font-semibold tracking-widest text-blue-700 uppercase">
                About Us
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-snug mb-6">
              Redefining <span className="text-blue-600">Modern Dentistry</span>
            </h2>

            {/* Paragraph */}
            <p className="text-gray-700 mb-5 leading-relaxed text-lg">
              At <span className="font-semibold text-blue-700">AA Dental Clinic</span>,
              we believe dental care should feel calm, advanced, and personal.
              Every smile we restore reflects our commitment to technology and trust.
            </p>

            <p className="text-gray-600 text-lg leading-relaxed">
              Our clinic blends precision, comfort, and aesthetic detail—ensuring
              every treatment supports not just oral health but overall confidence.
            </p>

            {/* Button + Doctor Info */}
            <div className="flex flex-wrap items-center justify-center md:justify-center gap-6 mt-10">
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} className="bg-gradient-to-r from-blue-600 to-green-600 hover:shadow-lg text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 cursor-pointer">
                Learn More
              </motion.button>

              <div className="flex items-center gap-3">
                <img
                  src={assets.doctorOne}
                  alt="Dr. A. Sakthivel"
                  className="w-14 h-14 rounded-full object-cover border-2 
                         border-blue-500 shadow-md"
                  loading="lazy"
                />
                <div>
                  <h4 className="text-blue-700 font-semibold text-lg">
                    Dr. A. Sakthivel
                  </h4>
                  <p className="text-gray-500 text-sm">Founder & Chief Dentist</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Floating Image Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex-1 relative w-full md:w-auto"
          >
            <div className="relative group rounded-3xl overflow-hidden shadow-2xl 
                          transform hover:-translate-y-2 transition-all duration-500">
              <img
                src={assets.dentalClinic}
                alt="Dental Clinic"
                className="rounded-3xl object-cover w-full h-[460px] 
                         brightness-95 transition-transform duration-700 
                         group-hover:scale-105"
                loading="lazy"
              />

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 via-transparent to-transparent"></div>

              {/* Glowing Border */}
              <div className="absolute inset-0 rounded-3xl border border-white/30 group-hover:border-blue-300 transition duration-500"></div>

              {/* Floating Glow Circle */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-200 rounded-full blur-3xl opacity-50"></div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Meet the Dentists */}
      <div className="relative bg-gradient-to-br from-blue-50 via-white to-blue-100 py-24 px-6 md:px-10 overflow-hidden">
        {/* Background Accents */}
        <div className="absolute top-10 left-10 w-40 h-40 bg-blue-200 opacity-20 rounded-full blur-3xl animate-pulse -z-10" />
        <div className="absolute bottom-10 right-10 w-56 h-56 bg-pink-200 opacity-20 rounded-full blur-3xl animate-pulse -z-10" />

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex-1 text-center lg:text-left"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-blue-700 mb-4">
              Meet Our <span className="text-[#00a582]">Expert Dentists</span>
            </h2>

            <p className="text-gray-600 text-base md:text-lg max-w-md mx-auto lg:mx-0 mb-8">
              Our trusted professionals combine modern dental technology with a compassionate approach
              to bring you the best care and confidence in every smile.
            </p>
          </motion.div>

          {/* Right Dentist Cards */}
          <div className="flex-1 grid sm:grid-cols-1 md:grid-cols-2 gap-10 justify-center">
            {dentists.map((dentist, index) => (
              <motion.div
                key={dentist.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group relative bg-white/80 backdrop-blur-lg border border-blue-100 shadow-xl hover:shadow-2xl rounded-3xl p-8 flex flex-col items-center transition-all duration-700 transform hover:-translate-y-2"
              >
                {/* Dentist Image */}
                <div className="relative">
                  <img
                    src={dentist.image}
                    alt={dentist.name}
                    className="w-40 h-40 rounded-full object-cover border-4 border-blue-100 shadow-lg transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-t from-blue-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                </div>

                {/* Info */}
                <h4 className="text-xl font-bold text-blue-700 mt-6">{dentist.name}</h4>
                <p className="text-sm text-gray-500">{dentist.role}</p>
                <p className="text-gray-600 text-sm mt-2">{dentist.qualification}</p>
                <p className="text-gray-600 text-sm">{dentist.experience}</p>

                {/* Badge */}
                <div className="absolute top-5 right-5 bg-gradient-to-r from-blue-600 to-blue-400 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-all duration-500">
                  Trusted Expert
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
