import React from "react";
import { motion } from "framer-motion";
import { Clock, MapPin, Phone } from "lucide-react";

export default function MediaDaySection() {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-cyan-100 py-20 px-6 md:px-16 flex justify-center" id="contact">
      <div className="max-w-6xl w-full grid md:grid-cols-2 bg-white rounded-3xl overflow-hidden shadow-2xl">
        
        {/* Left: Embedded Map */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative h-[400px] md:h-auto"
        >
          <iframe
            title="Clinic Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15544.718976939514!2d79.65720724375798!3d13.087792245386558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52bc6db1bea7d7%3A0x4d28632109abdce4!2sArakkonam%2C%20Tamil%20Nadu%20631001!5e0!3m2!1sen!2sin!4v1761400308249!5m2!1sen!2sin"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            className="border-0 w-full h-full object-cover"
          ></iframe>

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#00468B]/50 to-transparent"></div>

          {/* Location info */}
          <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md text-[#00468B] px-6 py-4 rounded-2xl shadow-lg flex items-center gap-3">
            <MapPin size={20} className="text-[#00bca2]" />
            <div>
              <h4 className="font-semibold">Our Location</h4>
              <p className="text-sm text-gray-700">TNHB ROAD, ARAKKONAM</p>
            </div>
          </div>
        </motion.div>

        {/* Right: Timings Section */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-[#00468B] text-white p-10 flex flex-col justify-center"
        >
          <h3 className="text-2xl md:text-3xl font-extrabold mb-6">
            Clinic Hours & Contact
          </h3>

          <div className="space-y-4 text-base leading-relaxed">
            <div className="flex items-start gap-3">
              <Clock className="text-[#00bca2] mt-1" size={22} />
              <div>
                <h4 className="font-semibold text-lg">Operating Hours</h4>
                <p>Mon – Sat: <span className="font-medium text-[#00bca2]">10:00 AM – 11:00 PM</span></p>
                <p>Sunday: <span className="font-medium text-[#00bca2]">By Appointment Only</span></p>
              </div>
            </div>

            <div className="flex items-start gap-3 mt-6">
              <Phone className="text-[#00bca2] mt-1" size={22} />
              <div>
                <h4 className="font-semibold text-lg">Book an Appointment</h4>
                <a
                  href="tel:+919087231303"
                  className="text-[#00bca2] font-medium hover:underline"
                >
                  +91 90872 31303
                </a>
              </div>
            </div>
          </div>

          {/* Decorative bottom shape */}
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#00bca2]/30 rounded-tl-full"></div>
        </motion.div>
      </div>
    </section>
  );
}
