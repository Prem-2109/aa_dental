import React from "react";
import { assets } from "../assets/images/assets";
import Nav from './Nav';
import Footer from './Footer'

const Beforeafter = () => {
  const images = [
    assets.BeforeOne,
    assets.AfterOne,
    assets.BeforeOne, // duplicate until you add real images
    assets.AfterOne,
  ];

  return (
    <>
      <Nav />
      {/* HEADER SECTION */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-950 to-black text-white py-24 md:py-32 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold tracking-wide">
            Before and After
          </h1>

          <div className="mt-6 text-gray-300 text-lg">
            <a href="/" className="hover:underline">
              Home
            </a>{" "}
            / <span className="text-white">Before and After</span>
          </div>
        </div>
      </section>
      {/* IMAGE GRID SECTION */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {images.map((img, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <img
                src={img}
                alt={`before-after-${index}`}
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default Beforeafter;
