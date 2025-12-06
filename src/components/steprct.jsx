import React from "react";
import { motion } from "framer-motion";
import { UserCheck, ClipboardCheck, Scan, RefreshCw, ShieldCheck } from "lucide-react";

const steprct = () => {
  const steps = [
    {
      step: "Step 1",
      title: "Initial Consultation",
      desc: "We begin with a detailed examination and digital records to evaluate your teeth and jaw alignment.",
      icon: <UserCheck size={28} />
    },
    {
      step: "Step 2",
      title: "Personalized Treatment Plan",
      desc: "A custom treatment roadmap is created based on your needs with estimated duration.",
      icon: <ClipboardCheck size={28} />
    },
    {
      step: "Step 3",
      title: "Appliance Placement",
      desc: "Braces or aligners are fitted carefully with complete care instructions.",
      icon: <Scan size={28} />
    },
    {
      step: "Step 4",
      title: "Regular Monitoring",
      desc: "Follow-up visits track progress and adjust treatment when needed.",
      icon: <RefreshCw size={28} />
    },
    {
      step: "Step 5",
      title: "Final Correction & Retainers",
      desc: "Retainers are provided to maintain alignment and prevent shifting.",
      icon: <ShieldCheck size={28} />
    }
  ];

  return (
    <section className="relative py-28 bg-gradient-to-br from-green-50 to-white overflow-x-hidden">

      <h2 className="text-4xl md:text-5xl font-bold text-center mb-20">
        Treatment Process
      </h2>

      {/* Center Line — adjusted to avoid horizontal overflow */}
      <div
        className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-[55%]
        w-[90%] max-w-5xl h-[3px] bg-gradient-to-r
        from-green-200 via-green-500 to-green-200"
      ></div>

      {/* Grid layout */}
      <div
        className="
          max-w-6xl mx-auto 
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          lg:grid-cols-5 
          gap-10 
          px-6 
          relative z-10
        "
      >
        {steps.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            viewport={{ once: true }}
            className="
              group bg-white/80 backdrop-blur-md p-8 rounded-3xl shadow-lg 
              border border-green-100 
              hover:shadow-2xl hover:-translate-y-3 
              transition-all duration-500 
              relative overflow-hidden
            "
          >
            {/* Spotlight Effect */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-10 
              bg-gradient-radial from-green-500 to-transparent 
              transition-all duration-500"
            ></div>

            {/* Icon */}
            <div
              className="w-14 h-14 mb-6 flex items-center justify-center 
              rounded-2xl bg-green-100 text-green-700 shadow-inner"
            >
              {item.icon}
            </div>

            {/* Step Badge */}
            <span
              className="inline-block mb-3 px-4 py-1 rounded-full bg-green-200 
              text-green-800 font-semibold text-sm"
            >
              {item.step}
            </span>

            <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default steprct;
