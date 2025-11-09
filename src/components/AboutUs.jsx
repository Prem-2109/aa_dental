import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import dentalClinic from "../assets/images/chair.jpg";
import doctorOne from "../assets/images/doctor-2.jpg";

// ✅ Animation Variants
const fadeInUp = (delay = 0, x = 0, y = 20) => ({
  hidden: { opacity: 0, x, y },
  show: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.6, delay },
  },
});

// ✅ Static Data
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

export default function AboutUs() {
  return (
    <section id="about" className="bg-white text-gray-800">
      {/* ---------- ABOUT INTRO ---------- */}
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-green-50 py-24">
        <div className="absolute inset-0 -skew-y-2 bg-gradient-to-r from-blue-100/30 via-transparent to-green-100/30 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
          {/* Left - Text */}
          <motion.div
            variants={fadeInUp(0, -50)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex-1 text-center lg:text-left"
          >
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-3">
              <div className="bg-blue-50 p-2 rounded-full shadow-sm">
                <ShieldCheck className="text-blue-700 w-5 h-5" />
              </div>
              <span className="text-sm font-semibold tracking-widest text-blue-700 uppercase">
                About Us
              </span>
            </div>

            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-snug mb-6">
              Redefining <span className="text-blue-600">Modern Dentistry</span>
            </h2>

            <p className="text-gray-700 mb-5 leading-relaxed text-lg">
              At <span className="font-semibold text-blue-700">AA Dental Clinic</span>,
              we believe dental care should feel calm, advanced, and personal. Every smile we restore reflects our commitment to technology and trust.
            </p>

            <p className="text-gray-600 text-lg leading-relaxed">
              Our clinic blends precision, comfort, and aesthetic detail — ensuring every treatment supports not just oral health but overall confidence.
            </p>

            {/* Button + Doctor */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 mt-10">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="bg-gradient-to-r from-blue-600 to-green-600 hover:shadow-lg text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300"
              >
                Learn More
              </motion.button>

              <div className="flex items-center gap-3">
                <img
                  src={doctorOne}
                  alt="Dr. A. Sakthivel"
                  className="w-14 h-14 rounded-full object-cover border-2 border-blue-500 shadow-md"
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

          {/* Right - Image */}
          <motion.div
            variants={fadeInUp(0.1, 50)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex-1 relative w-full md:w-auto"
          >
            <div className="relative group rounded-3xl overflow-hidden shadow-2xl transform hover:-translate-y-2 transition-all duration-500">
              <img
                src={dentalClinic}
                alt="Dental Clinic"
                className="rounded-3xl object-cover w-full h-[460px] brightness-95 transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 via-transparent to-transparent" />
              <div className="absolute inset-0 rounded-3xl border border-white/30 group-hover:border-blue-300 transition duration-500" />
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-200 rounded-full blur-3xl opacity-50" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* ---------- MISSION & VISION ---------- */}
      <section className="relative overflow-hidden py-14 px-8 bg-gradient-to-br from-[#dffcfb] via-[#eaf7ff] to-[#d6f3f0]">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-teal-400/20 blur-[120px] rounded-full" />
          <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-amber-300/20 blur-[130px] rounded-full" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.h2
            variants={fadeInUp()}
            initial="hidden"
            whileInView="show"
            className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900"
          >
            Our Mission & Vision
          </motion.h2>
          <motion.p
            variants={fadeInUp(0.2)}
            initial="hidden"
            whileInView="show"
            className="text-gray-600 text-lg max-w-2xl mx-auto mb-16 leading-relaxed"
          >
            Creating brighter smiles with innovation, empathy, and precision — our goal is to elevate dental care into an extraordinary experience.
          </motion.p>

          <div className="grid md:grid-cols-2 gap-10 mb-10">
            {[
              {
                title: "Our Mission",
                text: "To transform smiles and inspire confidence through compassionate, cutting-edge dental care that blends art, science, and heart.",
                gradient: "from-teal-500 to-emerald-400",
              },
              {
                title: "Our Vision",
                text: "To be a global symbol of excellence in dental wellness — combining empathy, technology, and innovation to redefine care and comfort.",
                gradient: "from-amber-400 to-yellow-300",
              },
            ].map((item, i) => (
              <motion.article
                key={item.title}
                variants={fadeInUp(0.3 + i * 0.2)}
                initial="hidden"
                whileInView="show"
                className="relative bg-white/70 backdrop-blur-2xl border border-white/40 rounded-3xl shadow-lg hover:shadow-2xl p-10 transition-all"
              >
                <div
                  className={`w-fit mx-auto mb-6 p-4 rounded-2xl shadow-md bg-gradient-to-br ${item.gradient}`}
                >
                  <ShieldCheck className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{item.text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- DENTISTS SECTION ---------- */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-100 py-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <motion.div
            variants={fadeInUp()}
            initial="hidden"
            whileInView="show"
            className="flex-1 text-center lg:text-left"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-blue-700 mb-4">
              Meet Our <span className="text-[#00a582]">Expert Dentists</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-md mx-auto lg:mx-0 mb-8">
              Our trusted professionals combine modern dental technology with a compassionate approach to bring you the best care and confidence in every smile.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-green-600 hover:shadow-lg text-white px-8 py-3 rounded-xl font-semibold transition-all"
            >
              Book Appointment
            </motion.button>
          </motion.div>

          {/* Dentist Cards */}
          <div className="flex-1 grid sm:grid-cols-1 md:grid-cols-2 gap-10">
            {dentists.map((dentist, index) => (
              <motion.article
                key={dentist.name}
                variants={fadeInUp(0.2 * index)}
                initial="hidden"
                whileInView="show"
                className="bg-white/80 backdrop-blur-lg border border-blue-100 shadow-xl hover:shadow-2xl rounded-3xl p-8 flex flex-col items-center transition-transform duration-700 hover:-translate-y-2"
              >
                <img
                  src={dentist.image}
                  alt={dentist.name}
                  className="w-40 h-40 rounded-full object-cover border-4 border-blue-100 shadow-lg mb-6"
                />
                <h4 className="text-xl font-bold text-blue-700">{dentist.name}</h4>
                <p className="text-sm text-gray-500">{dentist.role}</p>
                <p className="text-gray-600 text-sm mt-2">{dentist.qualification}</p>
                <p className="text-gray-600 text-sm">{dentist.experience}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
}
