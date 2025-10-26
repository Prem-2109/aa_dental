import React from "react";
import { motion } from "framer-motion";
import dentalClinic from "../assets/images/chair.jpg"; // replace with your image path
import doctorImg from "../assets/images/hero-1.jpg"; // replace with actual doctor image
import { CalendarDays } from "lucide-react";
import { ShieldCheck } from "lucide-react";
export default function AboutUs() {
  const dentists = [
    {
      name: "Dr. Sarah Matthews",
      role: "Chief Dental Surgeon",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      qualification: "BDS, MDS (Oral Surgery)",
      experience: "15+ Years Experience",
    },
    {
      name: "Dr. Michael Adams",
      role: "Cosmetic Dentist",
      image: "https://randomuser.me/api/portraits/men/41.jpg",
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

  return (
    <section className="bg-white text-gray-800" id="about">
      {/* Intro Section */}
      <div id="about" className="max-w-7xl mx-auto px-6 md:px-12 py-16 grid md:grid-cols-2 gap-10 items-center"
      >
        {/* Left - Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative rounded-2xl overflow-hidden"
        >
          <img
            src={dentalClinic}
            alt="Dental Clinic"
            className="rounded-2xl object-cover w-full h-[450px]"
          />
          <div className="absolute bottom-6 left-6 bg-blue-600 bg-opacity-90 text-white px-6 py-5 rounded-2xl shadow-lg text-center">
            <h2 className="text-3xl font-extrabold">15+</h2>
            <p className="text-sm leading-tight mt-1">
              experience in <br /> medical services
            </p>
          </div>
        </motion.div>

        {/* Right - Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          {/* Section Label */}
          <div className="flex items-center gap-2 mb-3">
            <div className="bg-blue-50 p-2 rounded-full">
              <ShieldCheck className="text-blue-700 w-5 h-5" />
            </div>
            <span className="text-sm font-semibold tracking-widest text-blue-700 uppercase">
              About Us
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-snug mb-4">
            Committed to the <span className="text-blue-600">Dental Excellence</span>
          </h2>

          {/* Paragraph */}
          <p className="text-gray-600 mb-4 leading-relaxed">
            Arasu Dental Care, established in 2017, is a leading multispecialty
            dental clinic in Coimbatore and a proud unit of the esteemed{" "}
            <span className="italic font-semibold">Arasu Medicals Group</span>.
            Since its inception, the clinic has been dedicated to providing
            world-class dental care to a wide range of patients with varying
            dental needs.
          </p>

          <p className="text-gray-600 leading-relaxed">
            Combining cutting-edge technology, state-of-the-art equipment, and a
            highly skilled team of specialists, Arasu Dental Care delivers
            effective, efficient, and affordable treatments to ensure optimal oral
            health for every patient.
          </p>

          {/* Stats Row */}
          <div className="flex flex-wrap gap-8 mt-8 border-t border-gray-200 pt-6">
            <div>
              <h3 className="text-3xl font-bold text-green-600">98%</h3>
              <p className="text-gray-600 text-sm mt-1">
                Invisalign Treatment <br /> Complete
              </p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-green-600">100%</h3>
              <p className="text-gray-600 text-sm mt-1">
                Patient Satisfaction <br /> Rate
              </p>
            </div>
          </div>

          {/* Button + Doctor Info */}
          <div className="flex flex-wrap items-center gap-6 mt-10">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-lg font-semibold shadow"
            >
              More About
            </motion.button>

            <div className="flex items-center gap-3">
              <img
                src={doctorImg}
                alt="Dr. Sree Cumar"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h4 className="text-blue-700 font-semibold">Dr.A.SAKTHIVEL</h4>
                <p className="text-gray-500 text-sm">Founder</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Mission & Vision */}
      <div className="bg-[#00bca2] py-16 px-6 relative overflow-hidden">
        {/* Decorative background shapes */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white opacity-10 rounded-full translate-x-1/3 translate-y-1/3"></div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-16">Mission & Vision</h3>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Mission Card */}
            <motion.div
              className="bg-white shadow-2xl rounded-3xl p-10 hover:scale-105 transition-transform duration-500 cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-center mb-6">
                {/* Icon */}
                <div className="bg-[#00bca2] p-4 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-3-3v6" />
                  </svg>
                </div>
              </div>
              <h4 className="text-2xl font-semibold text-blue-700 mb-4">Our Mission</h4>
              <p className="text-gray-700 leading-relaxed">
                To provide compassionate, high-quality dental care using the latest
                technology, ensuring every patient leaves with a brighter and healthier smile.
              </p>
            </motion.div>

            {/* Vision Card */}
            <motion.div
              className="bg-white shadow-2xl rounded-3xl p-10 hover:scale-105 transition-transform duration-500 cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-center mb-6">
                {/* Icon */}
                <div className="bg-[#00bca2] p-4 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3z" />
                  </svg>
                </div>
              </div>
              <h4 className="text-2xl font-semibold text-blue-700 mb-4">Our Vision</h4>
              <p className="text-gray-700 leading-relaxed">
                To be a leader in modern dentistry by blending expertise, innovation, and empathy to redefine dental wellness and care.
              </p>
            </motion.div>
          </div>

          {/* Optional Metrics */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "Patients Served", value: 1200 },
              { label: "Years of Experience", value: 15 },
              { label: "Happy Smiles", value: 1100 },
              { label: "Expert Dentists", value: 10 },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="bg-white rounded-2xl shadow-md py-6 px-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true }}
              >
                <h4 className="text-2xl font-bold text-blue-700 mb-2">{item.value}+</h4>
                <p className="text-gray-700">{item.label}</p>
              </motion.div>
            ))}
          </div>
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
              className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold shadow-md hover:bg-blue-700 transition"
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
