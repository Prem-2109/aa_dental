import { motion } from "framer-motion";
import { slideUpVariants } from "./animation";
import { Link } from "react-scroll";
import { assets } from "../assets/images/assets";

export default function DentalHero() {
  return (
    <section
      id="home"
      className="relative flex items-center text-white overflow-hidden"
      style={{ minHeight: "100vh", overflowY: "hidden" }}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${assets.heroBanner})`,
          backgroundAttachment: "fixed",
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#001a2f]/90 via-[#002f3f]/80 to-[#004e4e]/70 pointer-events-none" />

      {/* Content Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        viewport={{ once: true, amount: 0.3 }}
        className="relative z-10 max-w-4xl px-10 py-20 md:py-28 flex flex-col items-start justify-center text-left"
      >
        <h1 className="text-4xl md:text-5xl lg:text-4xl font-extrabold leading-tight mb-6">
          Your Smile, Our Priority —{" "}<br/>
          <span className="text-teal-300">Advanced Dental Care You Can Trust</span>
        </h1>

        <p className="text-gray-200 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
          Experience compassionate, state-of-the-art dental care designed for your
          comfort and confidence. Our team combines advanced technology with a
          patient-first approach to keep your smile healthy and bright.
        </p>

        {/* <Link
          to="contact"
          smooth={true}
          offset={-70}
          duration={500}
          className="bg-gradient-to-r from-blue-600 to-green-600 hover:shadow-lg 
          text-white px-10 py-4 rounded-xl font-semibold text-lg 
          transition-all duration-300 cursor-pointer"
        >
          Book an Appointment
        </Link> */}
      </motion.div>

      {/* Optional Subtle Blur */}
      <div className="absolute inset-0 backdrop-blur-[1px] pointer-events-none" />
    </section>
  );
}
