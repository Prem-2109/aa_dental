import { motion } from "framer-motion";
import { FiAlertCircle, FiHeart, FiFeather, FiCheck } from "react-icons/fi";
import { assets } from "../assets/images/assets";

export default function PostTreatmentCare() {
  const items = [
    {
      icon: <FiAlertCircle className="text-3xl text-green-700" />,
      title: "Sensitivity",
      desc: "It is completely normal to feel mild sensitivity for a few days. This is simply your body healing.",
    },
    {
      icon: <FiHeart className="text-3xl text-green-700" />,
      title: "Pain Management",
      desc: "Over-the-counter pain relief is usually enough to manage temporary discomfort.",
    },
    {
      icon: <FiFeather className="text-3xl text-green-700" />,
      title: "Eating",
      desc: "Wait for numbness to fade. Prefer soft foods and avoid chewing on the treated side.",
    },
    {
      icon: <FiCheck className="text-3xl text-green-700" />,
      title: "Oral Hygiene",
      desc: "Brush and floss gently to keep the area clean and promote healing.",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-green-50/30 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Post-Treatment Care
        </h2>

        <p className="text-center text-gray-700 max-w-3xl mx-auto mb-16">
          A smooth recovery starts with the right guidance. Here's what to expect and how to care for your treated tooth.
        </p>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-10 items-start">

          {/* LEFT SIDE */}
          <div className="space-y-8">
            {items.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                viewport={{ once: true }}
                className="flex gap-5 p-6 bg-white/70 backdrop-blur-lg rounded-xl shadow-md hover:shadow-xl transition border border-green-100"
              >
                <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center shadow-inner">
                  {item.icon}
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CENTER IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex justify-center w-full"
          >
            <img
              src={assets.FigOne}
              alt="post treatment"
              className="rounded-3xl shadow-2xl w-full max-w-full h-auto object-cover transform hover:scale-[1.02] transition"
            />
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <div className="rounded-3xl p-4 bg-white/70 backdrop-blur-lg shadow-lg border border-green-100 overflow-hidden">
              <img
                src={assets.FigTwo}
                alt="aligner"
                className="rounded-2xl shadow-md w-full max-w-full h-auto object-cover"
              />
            </div>

            <p className="text-gray-700 text-base leading-relaxed">
              We are committed to ensuring your comfort during the healing period. If anything feels unusual, we’re just a call away.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
