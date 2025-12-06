import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import { assets } from "../assets/images/assets"; // doctorOne & dentalClinic inside assets

const AestheticDentistry = () => {
  return (
    <>
      <Nav />

      {/* HEADER SECTION */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-950 to-black text-white py-24 md:py-32 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold tracking-wide">
            Aesthetic Dentistry
          </h1>

          <div className="mt-6 text-gray-300 text-lg">
            <a href="/" className="hover:underline">
              Home
            </a>{" "}
            / <span className="text-white">Aesthetic Dentistry</span>
          </div>
        </div>
      </section>

      {/* PREMIUM MAIN SECTION */}
      <section className="bg-white text-gray-800">
        <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-green-50 py-28">

          {/* Soft Glowing Background Accents */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-32 -left-32 w-[420px] h-[420px] bg-blue-200/40 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-[360px] h-[360px] bg-green-200/40 rounded-full blur-3xl"></div>
          </div>

          {/* Wrapper */}
          <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center justify-between gap-16 relative z-10">

            {/* LEFT CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="flex-1"
            >

              {/* Label */}
              <div className="flex justify-center lg:justify-start mb-4">
                <span className="text-xs font-semibold tracking-[3px] text-blue-700 uppercase bg-blue-100/60 px-4 py-1 rounded-full shadow-sm">
                  Aesthetic Dentistry
                </span>
              </div>

              {/* Heading */}
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6 text-center lg:text-left">
                What Is <span className="text-blue-600 drop-shadow-sm">Aesthetic Dentistry?</span>
              </h2>

              {/* Description */}
              <p className="text-gray-700 text-lg leading-relaxed mb-6 text-center lg:text-left">
                Aesthetic dentistry blends advanced dental techniques with artistic design to enhance the look of your smile.
                It aims to create natural, healthy, and visually pleasing results tailored uniquely to you.
              </p>

              {/* Glass Card */}
              <div className="bg-white/70 backdrop-blur-xl p-6 rounded-2xl shadow-xl border border-white/40">

                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  What Does It Include?
                </h3>

                <ul className="space-y-3 text-gray-700 text-lg leading-relaxed">
                  {[
                    "Teeth Whitening – Removes stains and brightens your smile",
                    "Dental Veneers – Ultra-thin ceramic shells for perfect shape and color",
                    "Cosmetic Bonding – Fixes chipped or uneven teeth",
                    "Smile Design – Personalized plan to reshape your entire smile",
                    "Gum Contouring – Corrects uneven or excessive gums",
                    "Invisalign / Aligners – Straightens teeth without braces"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-2.5 h-2.5 bg-blue-500 rounded-full mt-2 shadow-md"></span>
                      {item}
                    </li>
                  ))}
                </ul>

              </div>

            </motion.div>

            {/* RIGHT IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex-1 relative w-full md:w-auto"
            >
              <div className="relative group rounded-3xl overflow-hidden shadow-2xl transform hover:-translate-y-3 transition-all duration-700">

                <img
                  src={assets.Aestheticdentistry}
                  alt="Dental Clinic"
                  className="rounded-3xl object-cover w-full h-[480px] brightness-95 transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 via-transparent to-transparent"></div>

                {/* Glass Border */}
                <div className="absolute inset-0 rounded-3xl border border-white/40 group-hover:border-blue-300 transition duration-500"></div>

                {/* Floating Glow Effects */}
                <div className="absolute -top-14 -right-14 w-40 h-40 bg-blue-300/50 rounded-full blur-3xl opacity-60"></div>
                <div className="absolute bottom-10 -left-14 w-40 h-40 bg-green-300/40 rounded-full blur-3xl opacity-50"></div>

              </div>
            </motion.div>

          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default AestheticDentistry