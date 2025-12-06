import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import { assets } from "../assets/images/assets"; // doctorOne & dentalClinic inside assets

const DentalImplement = () => {
  return (
    <>
      <Nav />

      {/* HEADER SECTION */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-950 to-black text-white py-24 md:py-32 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold tracking-wide">
            Dental Implements
          </h1>

          <div className="mt-6 text-gray-300 text-lg">
            <a href="/" className="hover:underline">
              Home
            </a>{" "}
            / <span className="text-white">Dental Implements</span>
          </div>
        </div>
      </section>

      {/* MAIN SECTION */}
      <section className="bg-white text-gray-800">
        <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-green-50 py-24">

          {/* Background Accent */}
          <div className="absolute inset-0 -skew-y-2 bg-gradient-to-r from-blue-100/30 via-transparent to-green-100/30 pointer-events-none"></div>

          {/* Wrapper */}
          <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">

            {/* LEFT CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="flex-1"
            >
              {/* Icon + Label */}
              <div className="flex items-center justify-center gap-2 mb-3">
                <div className="bg-blue-50 p-2 rounded-full shadow-sm">
                  <ShieldCheck className="text-blue-700 w-5 h-5" />
                </div>
                <span className="text-sm font-semibold tracking-widest text-blue-700 uppercase">
                  Dental Implements
                </span>
              </div>

              {/* Heading */}
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-snug mb-6">
                Advanced <span className="text-blue-600">Dental Implements</span> for
                Precision & Comfort
              </h2>

              {/* Description */}
              <p className="text-gray-700 mb-5 leading-relaxed text-lg">
                Dental implants are a modern, long-lasting solution for replacing missing teeth.
                The treatment involves placing a small titanium post into the jawbone, which acts
                like a natural tooth root. It is ideal for people who have lost teeth due to
                decay, injury, or gum disease.
              </p>

              <p className="text-gray-600 text-lg leading-relaxed">
                Once the implant bonds with the jawbone, a connector (abutment) is attached,
                followed by a custom-made crown that looks and functions like a real tooth.
                Implants prevent bone loss, keep nearby teeth stable, and restore natural
                chewing and confidence.
                <br /><br />
                <span className="font-semibold text-blue-700">Benefits:</span> Long-lasting,
                improved comfort, natural appearance, and stronger oral health.
                <br />
                <span className="font-semibold text-blue-700">Best For:</span> Patients with
                healthy gums and sufficient jawbone (or can undergo bone grafting if needed).
                <br />
                <span className="font-semibold text-blue-700">Care:</span> Brush, floss, and
                visit the dentist regularly — just like natural teeth.
              </p>

              
            </motion.div>

            {/* RIGHT IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex-1 relative w-full md:w-auto"
            >
              <div className="relative group rounded-3xl overflow-hidden shadow-2xl transform hover:-translate-y-2 transition-all duration-500">
                <img
                  src={assets.ImplantsOne}
                  alt="Dental Implements"
                  className="rounded-3xl object-cover w-full h-[460px] brightness-95 transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 via-transparent to-transparent"></div>

                {/* Border */}
                <div className="absolute inset-0 rounded-3xl border border-white/30 group-hover:border-blue-300 transition duration-500"></div>

                {/* Glow Circle */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-200 rounded-full blur-3xl opacity-50"></div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>


      <Footer />
    </>
  );
};

export default DentalImplement;
