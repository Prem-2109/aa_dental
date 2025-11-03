import React from 'react'
import { motion } from 'framer-motion';
import { slideUpVariants, zoomInVariants } from './animation'
import '../App.css';
import { Link } from 'react-scroll';
import heroBanner from "../assets/images/hero-banner.jpg";


export const Hero = () => {
    return (

        <div
            id="home"
            className="hero w-full lg:h-[520px] h-fit m-auto pt-12 lg:pt-4 
    bg-cover bg-center md:bg-right px-5 flex justify-between items-center flex-col lg:flex-row gap-12 lg:gap-5"
            style={{ backgroundImage: `url(${heroBanner})` }}
        >

            <motion.div initial="hidden"
                whileInView="visible"
                variants={slideUpVariants}
                className="max-w-7xl mx-auto px-6 py-20 md:py-28 relative z-10 flex flex-col-reverse md:flex-row items-center gap-10">

                <div className="w-full md:w-1/2 text-center md:text-left">
                    <h1 className="text-4xl md:text-5xl lg:text-4xl font-extrabold text-[#0094df] leading-tight">
                        Your Smile, Our Priority —{" "}
                        <span className="text-[#00a582]">Advanced Dental Care You Can Trust</span>
                    </h1>

                    <p className="mt-5 text-gray-600 text-lg md:text-xl max-w-lg mx-auto md:mx-0">
                        Experience compassionate, state-of-the-art dental care designed for your comfort and confidence.
                        Our team combines advanced technology with a patient-first approach to keep your smile healthy and bright.
                    </p>

                    <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        {/* <button className="border border-[#0094df] hover:bg-[#0094df] text-white px-8 py-3 rounded-lg font-semibold transition shadow-md">
                            Book an Appointment
                        </button> */}
                        <button className="bg-gradient-to-r from-blue-600 to-green-600 
                       hover:shadow-lg text-white px-8 py-3 
                       rounded-xl font-semibold transition-all duration-300 cursor-pointer">
                            Book an Appointment
                        </button>
                    </div>
                </div>


            </motion.div>

        </div>











    )
}
