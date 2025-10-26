import React from "react";
import { Clock, HeartPulse, ShieldCheck, Smile } from "lucide-react";
import { motion } from "framer-motion";
import DentalImage from "../assets/images/two-people.jpg";

export default function WhyChooseUs() {
  const features = [
    {
      icon: <Clock className="text-blue-500" size={28} />,
      title: "Less Time in the Chair",
      description:
        "Quick, precise treatments that save you time without compromising care quality.",
      bg: "from-blue-50 to-blue-100",
    },
    {
      icon: <HeartPulse className="text-pink-500" size={28} />,
      title: "More Efficient",
      description:
        "State-of-the-art technology ensures efficient, painless procedures for every patient.",
      bg: "from-pink-50 to-pink-100",
    },
    {
      icon: <ShieldCheck className="text-purple-500" size={28} />,
      title: "Longer Lasting",
      description:
        "Durable results that maintain your perfect smile for years to come.",
      bg: "from-purple-50 to-purple-100",
    },
    {
      icon: <Smile className="text-green-500" size={28} />,
      title: "More Comfortable Experience",
      description:
        "Relaxing, patient-first atmosphere that puts your comfort above all else.",
      bg: "from-green-50 to-green-100",
    },
  ];

  return (
    <section className="relative bg-gradient-to-b from-white via-blue-50 to-white py-20 px-6 md:px-10 lg:px-16 overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-200 opacity-20 rounded-full blur-3xl -z-10 animate-pulse" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-pink-200 opacity-20 rounded-full blur-3xl -z-10 animate-pulse delay-300" />

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        {/* Left Content */}
        <motion.div
          className="flex-1 w-full"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 text-center lg:text-left mb-12 leading-tight">
            Why Choose <span className="text-blue-600">AA Dental?</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05, rotate: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
                className={`bg-gradient-to-br ${feature.bg} p-6 rounded-2xl shadow-md hover:shadow-2xl flex items-start gap-4 transition-all`}
              >
                <div className="flex-shrink-0 bg-white p-3 rounded-xl shadow-md hover:shadow-lg transition">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="flex-1 w-full flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white hover:border-blue-100 transition-all max-w-md">
            <img
              src={DentalImage}
              alt="Dental care"
              className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
            />

            {/* Floating Tag */}
            <div className="absolute bottom-6 left-6 bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-semibold shadow-md">
              Trusted by 1000+ Happy Patients
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
