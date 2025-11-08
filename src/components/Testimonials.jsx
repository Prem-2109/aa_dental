import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Patient",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
      message:
        "I had an amazing experience! The doctors were so kind and patient, and my smile has never looked better. Highly recommend this clinic!",
    },
    {
      id: 2,
      name: "Michael Brown",
      role: "Patient",
      image: "https://randomuser.me/api/portraits/men/44.jpg",
      message:
        "The team is very professional and made me feel comfortable throughout the entire process. State-of-the-art equipment and great care!",
    },
    {
      id: 3,
      name: "Emily Davis",
      role: "Patient",
      image: "https://randomuser.me/api/portraits/women/22.jpg",
      message:
        "Such a welcoming environment! They truly care about your comfort and take the time to explain every step. My confidence has improved!",
    },
    {
      id: 4,
      name: "AG Kumar",
      role: "Patient",
      image: "https://randomuser.me/api/portraits/men/52.jpg",
      message:
        "The team was caring and very attentive! I finally found a dental clinic that listens and delivers exactly what I needed!",
    },
  ];

  return (
    <section className="relative py-20 px-6 bg-gradient-to-b from-blue-50 to-cyan-100 overflow-hidden" id="testimonials">
      {/* Subtle decorative background */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#00bca2]/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#00468B]/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
          Real Smiles, Real Stories
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Genuine experiences from our happy patients who trusted us with their smiles.
        </p>

        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            pagination={{
              clickable: true,
              el: ".swiper-pagination",
            }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            loop={true}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-16"
          >
            {testimonials.map((t) => (
              <SwiperSlide key={t.id}>
                <div className="relative bg-white/80 backdrop-blur-md border border-white/40  rounded-3xl p-8 flex flex-col items-center text-center transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 h-full min-h-[360px]">
                  <Quote className="text-[#00bca2] opacity-30 w-10 h-10 absolute top-6 left-6" />

                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-20 h-20 rounded-full object-cover mb-4 border-4 border-[#00bca2]/30"
                  />

                  <p className="text-gray-700 italic mb-6 leading-relaxed">
                    “{t.message}”
                  </p>

                  <div>
                    <h3 className="text-lg font-semibold text-[#00468B]">
                      {t.name}
                    </h3>
                    <span className="text-sm text-gray-500">{t.role}</span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <button
            className="custom-prev absolute left-0 md:left-[-50px] top-1/2 -translate-y-1/2 bg-gradient-to-r from-[#00bca2] to-[#00468B] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-all duration-300"
            aria-label="Previous"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            className="custom-next absolute right-0 md:right-[-50px] top-1/2 -translate-y-1/2 bg-gradient-to-l from-[#00bca2] to-[#00468B] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-all duration-300"
            aria-label="Next"
          >
            <ChevronRight size={20} />
          </button>

          {/* Pagination Dots */}
          <div className="swiper-pagination !bottom-0 !static mt-12 flex justify-center gap-2"></div>
        </div>
      </div>
    </section>
  );
}
