import React from "react";
import { motion } from "framer-motion";
import AboutusImage from "../assets/images/chair.jpg";

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
    {
      name: "Dr. Priya Nair",
      role: "Pediatric Dentist",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      qualification: "BDS, MDS (Pediatric Dentistry)",
      experience: "10+ Years Experience",
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
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-6">
            About Our Dental Clinic
          </h2>
          <p className="text-lg text-gray-700 mb-4 leading-relaxed">
            At <span className="font-semibold">SmileCare Dental Hospital</span>, we believe a healthy
            smile is the foundation of confidence and well-being.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            Our team of skilled dentists and specialists bring decades of
            experience in restorative, cosmetic, and preventive dentistry. From
            routine check-ups to advanced oral surgeries, we’re committed to
            providing gentle, effective, and affordable dental care in a
            comfortable environment.
          </p>
          <p className="text-gray-600 leading-relaxed">
            With cutting-edge technology, transparent treatment plans, and
            patient-first ethics, we’ve become one of the most trusted dental
            hospitals in <span className="font-semibold">Chennai</span>.
          </p>
        </motion.div>

        <motion.img
          src={AboutusImage}
          alt="Dental Clinic"
          className="rounded-2xl shadow-lg object-cover w-full h-[400px]"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        />
      </div>

      {/* Mission & Vision */}
      <div className="bg-blue-50 py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-blue-600 mb-10">Mission & Vision</h3>
          <div className="grid md:grid-cols-2 gap-10">
            <motion.div
              className="bg-white shadow-lg rounded-2xl p-8"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h4 className="text-2xl font-semibold text-blue-700 mb-4">Our Mission</h4>
              <p className="text-gray-700 leading-relaxed">
                To provide compassionate, high-quality dental care using the latest
                technology, ensuring every patient leaves with a brighter and
                healthier smile.
              </p>
            </motion.div>

            <motion.div
              className="bg-white shadow-lg rounded-2xl p-8"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-2xl font-semibold text-blue-700 mb-4">Our Vision</h4>
              <p className="text-gray-700 leading-relaxed">
                To be a leader in modern dentistry by blending expertise,
                innovation, and empathy to redefine dental wellness and care.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Meet the Dentists */}
      <div className="max-w-7xl mx-auto py-20 px-6 text-center">
        <h3 className="text-3xl font-bold text-blue-600 mb-12">Meet Our Dentists</h3>
        <div className="grid md:grid-cols-3 gap-10">
          {dentists.map((dentist, index) => (
            <motion.div
              key={dentist.name}
              className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <img
                src={dentist.image}
                alt={dentist.name}
                className="w-32 h-32 rounded-full object-cover border-4 border-blue-100 mb-4"
              />
              <h4 className="text-xl font-semibold text-blue-700">{dentist.name}</h4>
              <p className="text-sm text-gray-500 mb-1">{dentist.role}</p>
              <p className="text-gray-600 text-sm">{dentist.qualification}</p>
              <p className="text-gray-600 text-sm">{dentist.experience}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Facility Tour */}
      <div className="bg-blue-50 py-20 px-6">
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
      </div>
    </section>
  );
}
