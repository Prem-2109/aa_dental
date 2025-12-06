import React from "react";
import Figthree from "../assets/images/care-assistant-canal.jpg";

const RootCanalSection = () => {
  return (
    <section className="bg-gray-50 py-20 px-6 md:px-12">
      {/* Heading */}
      <div className="text-center max-w-4xl mx-auto mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          What is Root Canal Treatment
        </h2>
        <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
          Choosing the right dental team is essential for a successful and comfortable
          experience. We offer a superior standard of care rooted in expertise, technology,
          and patient-focused compassion.
        </p>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
        
        {/* Image */}
        <div>
          <img
            src={Figthree}
            alt="Root Canal Treatment"
            className="rounded-2xl shadow-md w-full object-cover"
          />
        </div>

        {/* Text Content */}
        <div>
          <p className="text-gray-700 leading-relaxed mb-6">
            A root canal is a dental procedure designed to remove the infected or inflamed
            soft tissue from inside a tooth. This inner tissue, known as the{" "}
            <span className="font-bold text-gray-900">pulp</span>, contains nerves, blood
            vessels, and connective tissue. It extends from the crown (the visible part)
            of the tooth down to the tips of the roots in the jawbone.
          </p>

          <p className="text-gray-700 leading-relaxed">
            When the pulp becomes infected due to deep decay, a cracked tooth, or repeated
            dental procedures, it can lead to a painful abscess and eventually, tooth loss.
            Root Canal Treatment involves carefully cleaning, disinfecting, and sealing the
            inner “canals” of the tooth to eliminate the infection and protect the tooth from
            future problems.
          </p>
        </div>
      </div>
    </section>
  );
};

export default RootCanalSection;
