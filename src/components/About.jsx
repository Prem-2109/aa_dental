import React from "react";
import { motion } from "framer-motion";
import dentalClinic from "../assets/images/chair.jpg"; // replace with your image path
import doctorOne from "../assets/images/doctor-2.jpg"; // replace with actual doctor image
import doctorImg from "../assets/images/hero-1.jpg"; // replace with actual doctor image
import { CalendarDays } from "lucide-react";
import { ShieldCheck } from "lucide-react";
import Nav from "./Nav";
import Footer from './Footer'
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
    <>
      <Nav />
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-950 to-black text-white py-24 md:py-32 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold tracking-wide">
            About Us
          </h1>

          <div className="mt-6 text-gray-300 text-lg">
            <a href="/" className="hover:underline">
              Home
            </a>{" "}
            / <span className="text-white">About Us</span>
          </div>
        </div>
      </section>
      <section className="bg-white text-gray-800" id="about">
        {/* Intro Section */}
        <div id="about" className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-green-50 py-24">
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
                  src={dentalClinic}
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
      </section>
      <Footer />
    </>
  );
}
