import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import { assets } from "../assets/images/assets"; // doctorOne & dentalClinic inside assets

const DentalFilling = () => {
  return (
    <>
      <Nav />

      {/* HEADER SECTION */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-950 to-black text-white py-24 md:py-32 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold tracking-wide">
            Dental Filling
          </h1>

          <div className="mt-6 text-gray-300 text-lg">
            <a href="/" className="hover:underline">
              Home
            </a>{" "}
            / <span className="text-white">Dental Filling</span>
          </div>
        </div>
      </section>

      {/* MAIN SECTION - PREMIUM UI */}
      <section className="bg-white text-gray-800">
        <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-emerald-50 py-28">

          {/* Soft Background Glow */}
          <div className="absolute inset-0">
            <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-200/40 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-green-200/40 rounded-full blur-3xl"></div>
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
              {/* Icon + Label */}
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="bg-white/70 backdrop-blur-md p-3 rounded-full shadow-lg">
                  <ShieldCheck className="text-blue-600 w-6 h-6" />
                </div>
                <span className="text-sm font-semibold tracking-[0.2em] text-blue-700 uppercase">
                  Dental Filling
                </span>
              </div>

              {/* Heading */}
              <h2 className="text-center md:text-left text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 leading-tight mb-7">
                Restore Your Smile With <span className="text-blue-600 drop-shadow-sm">Precision Dental Filling</span>
              </h2>

              {/* Description */}
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                A dental filling restores a tooth damaged by decay back to full functionality and shape.
                It seals off areas where bacteria can enter, preventing further decay and protecting your oral health.
              </p>

              <div className="bg-white/70 backdrop-blur-xl p-6 rounded-2xl shadow-xl border border-white/40">
                <p className="text-gray-700 text-lg leading-relaxed">
                  Your dentist removes the decayed portion, cleans the area, and places a high-quality filling material
                  such as composite resin or porcelain. The result is a smooth, polished tooth with restored strength
                  and natural appearance.
                </p>
              </div>
            </motion.div>

            {/* RIGHT IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex-1 w-full md:w-auto relative"
            >
              <div className="relative group rounded-3xl overflow-hidden shadow-2xl transform hover:-translate-y-3 transition-all duration-700">

                <img
                  src={assets.DentalFilling}
                  alt="Dental Implements"
                  className="rounded-3xl object-cover w-full h-[480px] brightness-95 transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 via-transparent to-transparent"></div>

                {/* Glass border */}
                <div className="absolute inset-0 rounded-3xl border border-white/40 group-hover:border-blue-300 transition duration-500"></div>

                {/* Glow Circles */}
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

export default DentalFilling