import React from "react";
import { Clock, HeartPulse, ShieldCheck, Smile } from "lucide-react"; // npm install lucide-react
import DentalImage from "../assets/images/two-people.jpg";
export default function WhyChooseUs() {
  const features = [
    {
      icon: <Clock className="text-blue-500" size={28} />,
      title: "Less Time in the Chair",
      description:
        "Justo non dolor lectus ac egestas dictum. Leo tempus nec amet fringilla. Eu semper velit tristique semper.",
      bg: "bg-blue-50",
    },
    {
      icon: <HeartPulse className="text-pink-500" size={28} />,
      title: "More Efficient",
      description:
        "Justo non dolor lectus ac egestas dictum. Leo tempus nec amet fringilla. Eu semper velit tristique semper.",
      bg: "bg-pink-50",
    },
    {
      icon: <ShieldCheck className="text-red-500" size={28} />,
      title: "Longer Lasting",
      description:
        "Justo non dolor lectus ac egestas dictum. Leo tempus nec amet fringilla. Eu semper velit tristique semper.",
      bg: "bg-red-50",
    },
    {
      icon: <Smile className="text-green-500" size={28} />,
      title: "More Comfortable Experience",
      description:
        "Justo non dolor lectus ac egestas dictum. Leo tempus nec amet fringilla. Eu semper velit tristique semper.",
      bg: "bg-green-50",
    },
  ];

  return (
    <section className="bg-blue-50 py-20 px-6 md:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        {/* Left Content */}
        <div className="flex-1 w-full">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 text-center lg:text-left mb-12">
            Why Choose <span className="text-blue-600">Us?</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className={`flex items-start gap-4 p-6 rounded-xl shadow-sm hover:shadow-md transition-all ${feature.bg}`}
              >
                <div className="flex-shrink-0 bg-white p-3 rounded-full shadow-md">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 w-full flex justify-center">
          <div className="relative rounded-3xl overflow-hidden shadow-lg border-4 border-blue-100 max-w-md">
            <img
              src={DentalImage} // 👈 update to your actual path
              alt="Dental care"
              className="w-full h-auto object-cover rounded-3xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
