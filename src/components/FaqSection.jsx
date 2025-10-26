import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How often should I visit the dentist?",
    answer:
      "It’s recommended to visit the dentist every six months for a routine checkup and cleaning. Regular visits help detect and prevent dental problems early.",
  },
  {
    question: "Do teeth whitening treatments damage enamel?",
    answer:
      "Professional whitening treatments are safe and do not harm your enamel. Our dentists use advanced, enamel-safe formulas for long-lasting brightness.",
  },
  {
    question: "Are dental implants painful?",
    answer:
      "Dental implant procedures are performed under local anesthesia, ensuring minimal discomfort. Most patients report that recovery is smooth and manageable.",
  },
  {
    question: "Do you treat kids and families?",
    answer:
      "Yes! We offer complete family dental care, including pediatric dentistry for children and preventive treatments for adults.",
  },
  {
    question: "Can I get same-day emergency appointments?",
    answer:
      "Absolutely. We provide same-day emergency dental appointments to relieve pain and address urgent issues quickly.",
  },
];

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-blue-100 py-20 px-6 sm:px-10 md:px-20" id="faqs">
      <div className="max-w-5xl mx-auto text-center mb-14">
        <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-2">
          FAQs
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-snug">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Have a question about our dental care? Find answers to common queries below.
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-5">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white shadow-lg rounded-2xl p-6 cursor-pointer hover:shadow-xl transition-all duration-300"
            onClick={() => toggleFAQ(index)}
          >
            {/* Question Row */}
            <div className="flex justify-between items-center">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 text-left">
                {faq.question}
              </h3>
              <motion.div
                animate={{ rotate: activeIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="text-blue-600"
              >
                <ChevronDown size={22} />
              </motion.div>
            </div>

            {/* Answer */}
            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <p className="text-gray-600 text-left mt-4 leading-relaxed">
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
