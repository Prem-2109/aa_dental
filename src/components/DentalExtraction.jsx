import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import { assets } from "../assets/images/assets"; // doctorOne & dentalClinic inside assets

const DentalExtraction = () => {
  return (
    <>
      <Nav />

      {/* HEADER SECTION */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-950 to-black text-white py-24 md:py-32 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold tracking-wide">
            Dental Extraction
          </h1>

          <div className="mt-6 text-gray-300 text-lg">
            <a href="/" className="hover:underline">
              Home
            </a>{" "}
            / <span className="text-white">Dental Extraction</span>
          </div>
        </div>
      </section>

      {/* MAIN SECTION – PREMIUM UI */}
      <section className="bg-white text-gray-800">
        <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-green-50 py-28">

          {/* Soft Background Glows */}
          <div className="absolute inset-0">
            <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-200/40 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-[380px] h-[380px] bg-green-200/40 rounded-full blur-3xl"></div>
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

              {/* Heading */}
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-7">
                Dental <span className="text-blue-600 drop-shadow-sm">Extraction</span>
              </h2>

              {/* Description */}
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Dental extraction is a common procedure to remove a tooth that is damaged, infected, or causing alignment issues.
                It is performed when a tooth can no longer be saved through fillings, root canal therapy, or other treatments.
              </p>

              {/* Glass Info Card */}
              <div className="bg-white/70 backdrop-blur-xl p-6 rounded-2xl shadow-xl border border-white/40 mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Why Is Tooth Extraction Needed?</h3>
                <p className="text-gray-700 text-base leading-relaxed mb-4">
                  A dentist may recommend extraction if you experience:
                </p>

                <ul className="space-y-2 text-gray-700 text-lg leading-relaxed">
                  <li className="flex items-start gap-2">
                    <span className="w-2.5 h-2.5 bg-blue-500 rounded-full mt-2"></span>
                    Severe tooth decay or infection
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2.5 h-2.5 bg-blue-500 rounded-full mt-2"></span>
                    Broken or fractured teeth
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2.5 h-2.5 bg-blue-500 rounded-full mt-2"></span>
                    Impacted wisdom teeth
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2.5 h-2.5 bg-blue-500 rounded-full mt-2"></span>
                    Gum disease causing mobility
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2.5 h-2.5 bg-blue-500 rounded-full mt-2"></span>
                    Crowding before orthodontic treatment
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2.5 h-2.5 bg-blue-500 rounded-full mt-2"></span>
                    Baby teeth that do not fall out naturally
                  </li>
                </ul>
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
                  src={assets.Dentalextraction}
                  alt="Dental Extraction"
                  className="rounded-3xl object-cover w-full h-[480px] brightness-95 transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 via-transparent to-transparent"></div>

                {/* Glass Border */}
                <div className="absolute inset-0 rounded-3xl border border-white/40 group-hover:border-blue-300 transition duration-500"></div>

                {/* Glow Elements */}
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

export default DentalExtraction