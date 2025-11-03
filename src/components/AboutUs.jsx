import React from "react";
import { motion } from "framer-motion";
import dentalClinic from "../assets/images/chair.jpg"; // replace with your image path
import doctorOne from "../assets/images/doctor-2.jpg"; // replace with actual doctor image
import doctorImg from "../assets/images/hero-1.jpg"; // replace with actual doctor image
import { CalendarDays } from "lucide-react";
import { ShieldCheck } from "lucide-react";
export default function AboutUs() {
  const dentists = [
    {
      name: "Dr. Sarah Matthews",
      role: "Chief Dental Surgeon",
      image: doctorOne,
      qualification: "BDS, MDS (Oral Surgery)",
      experience: "15+ Years Experience",
    },
    {
      name: "Dr. Michael Adams",
      role: "Cosmetic Dentist",
      image: doctorOne,
      qualification: "BDS, MDS (Aesthetic Dentistry)",
      experience: "12+ Years Experience",
    },
  ];

  const facilities = [
    {
      title: "Modern Equipment",
      image:
        "https://images.unsplash.com/photo-1588776814546-ec7b4b9e7f92?auto=format&fit=crop&w=900&q=60",
    },
    {
      title: "Advanced Sterilization",
      image:
        "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=900&q=60",
    },
    {
      title: "Comfort Amenities",
      image:
        "https://images.unsplash.com/photo-1606813902781-6612e2e76cd1?auto=format&fit=crop&w=900&q=60",
    },
  ];


  const stats = [
    { label: "Patients Served", value: 1200 },
    { label: "Years of Experience", value: 15 },
    { label: "Happy Smiles", value: 1100 },
    { label: "Expert Dentists", value: 10 },
  ];

  return (
    <section className="bg-white text-gray-800" id="about">
      {/* Intro Section */}
      <div id="about" className="max-w-7xl mx-auto px-6 md:px-12 py-20 grid md:grid-cols-2 gap-10 items-center bg-gradient-to-br transition-all duration-500"
      >
        {/* Left - Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden shadow-2xl"
        >
          <img
            src={dentalClinic}
            alt="Dental Clinic"
            className="rounded-3xl object-cover w-full h-[450px] brightness-[0.97] transition-all duration-500 hover:scale-105"
            loading="lazy"
          />

          {/* Subtle gradient overlay for text depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 via-transparent to-transparent"></div>

          {/* Decorative glowing circle */}
          <div className="absolute -top-5 -right-5 w-24 h-24 bg-blue-200 rounded-full blur-2xl opacity-70"></div>
        </motion.div>

        {/* Right - Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Accent line */}
          <div className="absolute -left-6 top-4 hidden md:block w-1 h-16 
                        bg-gradient-to-b from-blue-500 to-green-400 rounded-full"></div>

          {/* Section Label */}
          <div className="flex items-center gap-2 mb-3">
            <div className="bg-blue-50 p-2 rounded-full shadow-sm">
              <ShieldCheck className="text-blue-700 w-5 h-5" />
            </div>
            <span className="text-sm font-semibold tracking-widest text-blue-700 uppercase">
              About Us
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 leading-snug mb-6">
            Committed to{" "}
            <span className="text-blue-600">Dental Excellence</span>
          </h2>

          {/* Paragraph */}
          <p className="text-gray-600 mb-4 leading-relaxed text-lg">
            At <span className="font-semibold text-blue-700">AA Dental Clinic</span>,
            we combine innovation and expertise to deliver comfortable, precise, and compassionate dental treatments for every smile.
          </p>

          <p className="text-gray-600 text-lg leading-relaxed">
            From advanced surgeries to aesthetic care, we ensure each patient receives personalized attention using modern technology and proven techniques.
          </p>

          {/* Button + Doctor Info */}
          <div className="flex flex-wrap items-center gap-6 mt-10">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="bg-gradient-to-r from-blue-600 to-green-600 
                       hover:shadow-lg text-white px-8 py-3 
                       rounded-xl font-semibold transition-all duration-300 cursor-pointer"
            >
              Learn More
            </motion.button>

            <div className="flex items-center gap-3">
              <img
                src={doctorOne}
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
      </div>


      {/* Mission & Vision */}
      <div className="relative overflow-hidden py-14 px-8 bg-gradient-to-br from-[#dffcfb] via-[#eaf7ff] to-[#d6f3f0] dark:from-[#001F24] dark:via-[#012b2e] dark:to-[#013233] transition-all duration-700">
        {/* Soft Glow Orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-teal-400/20 blur-[120px] rounded-full animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-amber-300/20 blur-[130px] rounded-full animate-pulse delay-300"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900 dark:text-white"
          >
            Our Mission & Vision
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto mb-16 leading-relaxed"
          >
            Creating brighter smiles with innovation, empathy, and precision — our goal is to elevate dental care into an extraordinary experience.
          </motion.p>

          {/* Cards */}
          <div className="grid md:grid-cols-2 gap-10 mb-20">
            {/* Mission */}
            <motion.div
              whileHover={{ scale: 1.05, rotate: 0.5 }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative group bg-white/70 dark:bg-white/10 backdrop-blur-2xl border border-white/40 
                      rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.1)] hover:shadow-[0_10px_60px_rgba(0,0,0,0.15)] 
                      p-10 overflow-hidden transition-all"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-teal-300/10 via-transparent to-amber-200/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="flex justify-center mb-6">
                <div className="bg-gradient-to-br from-teal-500 to-emerald-400 p-4 rounded-2xl shadow-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-3-3v6" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Our Mission
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                To transform smiles and inspire confidence through compassionate, cutting-edge dental care that blends art, science, and heart.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              whileHover={{ scale: 1.05, rotate: -0.5 }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative group bg-white/70 dark:bg-white/10 backdrop-blur-2xl border border-white/40 
                      rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.1)] hover:shadow-[0_10px_60px_rgba(0,0,0,0.15)] 
                      p-10 overflow-hidden transition-all"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-amber-200/10 via-transparent to-teal-300/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="flex justify-center mb-6">
                <div className="bg-gradient-to-br from-amber-400 to-yellow-300 p-4 rounded-2xl shadow-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 8c-1.657 0-3 1.343-3 3s1.343 3 
                       3 3 3-1.343 3-3-1.343-3-3-3z"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Our Vision
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                To be a global symbol of excellence in dental wellness — combining empathy, technology, and innovation to redefine care and comfort.
              </p>
            </motion.div>
          </div>

          {/* Stats */}
          {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true }}
                className="bg-white/70 dark:bg-white/10 backdrop-blur-2xl rounded-2xl border border-white/30 shadow-lg py-8 hover:scale-105 transition-transform"
              >
                <h4 className="text-3xl font-bold text-teal-600 dark:text-teal-400 mb-2">
                  {item.value}
                </h4>
                <p className="text-gray-700 dark:text-gray-300 font-medium">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div> */}
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

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-green-600 
                       hover:shadow-lg text-white px-8 py-3 
                       rounded-xl font-semibold transition-all duration-300 cursor-pointer"
            >
              Book Appointment
            </motion.button>
          </motion.div>

          {/* Right Dentists Cards */}
          <div className="flex-1 grid sm:grid-cols-1 md:grid-cols-2 gap-10 justify-center">
            {dentists.map((dentist, index) => (
              <motion.div
                key={dentist.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative bg-white/80 backdrop-blur-lg border border-blue-100 shadow-xl hover:shadow-2xl rounded-3xl p-8 flex flex-col items-center transition-all duration-700 transform hover:-translate-y-2"
              >
                {/* Dentist Image */}
                <div className="relative">
                  <img
                    src={dentist.image}
                    alt={dentist.name}
                    className="w-40 h-40 rounded-full object-cover border-4 border-blue-100 shadow-lg group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-t from-blue-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                </div>

                {/* Info */}
                <h4 className="text-xl font-bold text-blue-700 mt-6">
                  {dentist.name}
                </h4>
                <p className="text-sm text-gray-500">{dentist.role}</p>
                <p className="text-gray-600 text-sm mt-2">{dentist.qualification}</p>
                <p className="text-gray-600 text-sm">{dentist.experience}</p>

                {/* Badge */}
                <div className="absolute top-5 right-5 bg-gradient-to-r from-blue-600 to-blue-400 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md opacity-0 hover:opacity-100 transition-all duration-500">
                  Trusted Expert
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>


      {/* Facility Tour */}
      {/* <div className="bg-blue-50 py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-blue-600 mb-12">Facility Tour</h3>
          <div className="grid md:grid-cols-3 gap-10">
            {facilities.map((facility, index) => (
              <motion.div
                key={facility.title}
                className="overflow-hidden rounded-2xl shadow-lg bg-white"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <img
                  src={facility.image}
                  alt={facility.title}
                  className="w-full h-56 object-cover"
                />
                <div className="p-5">
                  <h4 className="text-xl font-semibold text-blue-700">
                    {facility.title}
                  </h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div> */}
    </section>
  );
}
