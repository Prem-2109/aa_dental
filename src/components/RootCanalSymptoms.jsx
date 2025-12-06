import { motion } from "framer-motion";
import { FiAlertCircle, FiThermometer, FiSmile, FiDroplet } from "react-icons/fi";

export default function RootCanalSymptoms() {
  const symptoms = [
    {
      icon: <FiAlertCircle className="text-3xl text-blue-700" />,
      title: "Severe Pain",
      desc: "A constant or deep throbbing pain that may worsen while chewing or even wake you at night. This can also occur spontaneously.",
    },
    {
      icon: <FiThermometer className="text-3xl text-blue-700" />,
      title: "Prolonged Sensitivity",
      desc: "Sharp or lingering pain from hot or cold foods lasting more than a few seconds, even after removing the trigger.",
    },
    {
      icon: <FiSmile className="text-3xl text-blue-700" />,
      title: "Tender Gums",
      desc: "Swelling, redness, or a pimple-like bump near the tooth (fistula), which may indicate infection or inflammation.",
    },
    {
      icon: <FiDroplet className="text-3xl text-blue-700" />,
      title: "Tooth Discoloration",
      desc: "A darkening or greying shade of the tooth, signalling the pulp inside may be damaged or dying.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">

        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-4">
          Do I Need a Root Canal? Symptoms of Tooth Infection
        </h2>

        <p className="text-center text-gray-700 max-w-3xl mx-auto mb-14 leading-relaxed">
          What are the signs that require root canal treatment? These key symptoms help your dentist determine whether a root canal is needed.
          Seek timely treatment if you experience any of the following:
        </p>

        {/* Symptom Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">

          {symptoms.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              {/* Icon Circle */}
              <div className="w-20 h-20 mx-auto mb-5 rounded-full border-2 border-blue-400 flex items-center justify-center transition group-hover:shadow-lg group-hover:scale-105 bg-white">
                {item.icon}
              </div>

              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>

              <p className="text-gray-600 text-sm leading-relaxed px-2">
                {item.desc}
              </p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}
