import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

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
    <section className="py-20 px-6" id="testimonials">
      <div className="max-w-6xl mx-auto text-center relative">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
          Real Smiles, Real Stories
        </h2>
        <p className="text-gray-600 mb-12">
          Hear from our patients who trusted us with their smiles.
        </p>

        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
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
                <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col justify-between items-center text-center h-full min-h-[320px] transition-transform duration-300 hover:-translate-y-2">
                  <div>
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-20 h-20 rounded-full object-cover mb-4 border-4 border-blue-100"
                    />
                    <p className="text-gray-700 italic mb-6 leading-relaxed line-clamp-6">
                      “{t.message}”
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-blue-700">
                      {t.name}
                    </h3>
                    <span className="text-sm text-gray-500">{t.role}</span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Arrows */}
          <div className="swiper-button-prev !text-blue-700 !left-0 md:!left-[-30px] !top-1/2 !transform !-translate-y-1/2 after:!text-xl !font-bold !w-6 !h-6 !flex !items-center !justify-center !bg-white !rounded-full !shadow-md hover:!bg-blue-700 hover:!text-white transition-all"></div>

          <div className="swiper-button-next !text-blue-700 !right-0 md:!right-[-30px] !top-1/2 !transform !-translate-y-1/2 after:!text-xl !font-bold !w-6 !h-6 !flex !items-center !justify-center !bg-white !rounded-full !shadow-md hover:!bg-blue-700 hover:!text-white transition-all"></div>

          {/* Pagination Dots */}
          <div className="swiper-pagination !bottom-0 !static mt-10 gap-2"></div>
        </div>
      </div>
    </section>
  );
}
