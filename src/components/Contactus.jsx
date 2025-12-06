import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import { motion } from "framer-motion";

const Contactus = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  const cards = [
    {
      title: "Arakkonam",
      icon: "https://cdn-icons-png.flaticon.com/512/2966/2966327.png",
      desc: "AADental Clinic, #3, VSV Shopping Complex, TNHB Road, Arakkonam - 631001",
      delay: 0.1,
    },
    {
      title: "Contact",
      icon: "https://cdn-icons-png.flaticon.com/512/724/724664.png",
      desc: (
        <>
          <p className="text-green-700 font-medium">+91 9087231303</p>
          <p className="text-green-700 mt-2">care@aadental.in</p>
        </>
      ),
      delay: 0.2,
    },
    {
      title: "Opening Hours",
      icon: "https://cdn-icons-png.flaticon.com/512/1827/1827370.png",
      desc: (
        <>
          Monday to Saturday: <br />
          10:00 AM to 1:00 PM & 5:00 PM to 9:00 PM <br />
          Sunday: By Appointment Only
        </>
      ),
      delay: 0.3,
    },
  ];

  return (
    <>
      <Nav />

      {/* HEADER */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-950 to-black text-white py-24 md:py-32 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold tracking-wide">
            Contact Us
          </h1>

          <div className="mt-6 text-gray-300 text-lg">
            <a href="/" className="hover:underline">
              Home
            </a>{" "}
            / <span className="text-white">Contact Us</span>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="relative py-24 bg-gradient-to-b from-[#F6FAF7] to-[#E8F4EF]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

          {cards.map((card, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: card.delay }}
              whileHover={{ y: -10, scale: 1.04 }}
              className="bg-white rounded-3xl shadow-lg p-10 text-center transition-all 
                         border border-transparent hover:border-blue-300 hover:shadow-xl"
            >
              <div className="w-20 h-20 mx-auto mb-5 rounded-full bg-blue-50 flex items-center justify-center shadow-inner">
                <img
                  src={card.icon}
                  className="w-10 opacity-90"
                  alt={card.title}
                />
              </div>

              <h3 className="text-2xl font-semibold text-blue-800 tracking-wide">
                {card.title}
              </h3>

              <div className="text-gray-600 mt-4 leading-relaxed text-[15px]">
                {card.desc}
              </div>
            </motion.div>
          ))}

        </div>
      </section>

      <Footer />
    </>
  );
};

export default Contactus;
