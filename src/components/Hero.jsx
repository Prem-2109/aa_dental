import React from 'react'
import { motion } from 'framer-motion';
import { slideUpVariants, zoomInVariants } from './animation'
import '../App.css';
import { Link } from 'react-scroll';
import { assets } from "../assets/images/assets";
import { FaTooth, FaAward, FaUserMd, FaClock } from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi';


export const Hero = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            }
        }
    };

    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const badgeVariants = {
        hidden: { scale: 0, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 200,
                damping: 15,
                delay: 0.5
            }
        }
    };

    return (
        <section 
            id="home"
            className="relative w-full min-h-[600px] md:min-h-[700px] lg:min-h-[650px] flex items-center justify-center overflow-hidden"
        >
            {/* Background Image with Overlay */}
            <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${assets.heroBanner})` }}
            >
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/85 via-cyan-900/75 to-emerald-900/85"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                
                {/* Animated Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                        backgroundSize: '40px 40px'
                    }}></div>
                </div>
            </div>

            {/* Floating Decorative Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{
                        y: [0, -20, 0],
                        rotate: [0, 5, 0],
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute top-20 right-10 md:right-20 text-blue-400/20"
                >
                    <HiSparkles className="w-16 h-16 md:w-24 md:h-24" />
                </motion.div>
                <motion.div
                    animate={{
                        y: [0, 20, 0],
                        rotate: [0, -5, 0],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1
                    }}
                    className="absolute bottom-20 left-10 md:left-20 text-cyan-400/20"
                >
                    <FaTooth className="w-12 h-12 md:w-20 md:h-20" />
                </motion.div>
            </div>

            {/* Main Content */}
            <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-32 w-full"
            >
                <div className="max-w-4xl mx-auto text-center">
                    {/* Badge */}
                    <motion.div
                        variants={badgeVariants}
                        className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-white/10 backdrop-blur-md rounded-full border border-white/20 shadow-lg"
                    >
                        <FaAward className="text-yellow-400 text-sm" />
                        <span className="text-white/90 text-sm font-semibold">Trusted Dental Care Since 2010</span>
                    </motion.div>

                    {/* Main Heading */}
                    <motion.h1
                        variants={itemVariants}
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6"
                    >
                        <span className="block text-white drop-shadow-lg">
                            Your Smile,
                        </span>
                        <span className="block bg-gradient-to-r from-blue-400 via-cyan-300 to-emerald-400 bg-clip-text text-transparent drop-shadow-lg">
                            Our Priority
                        </span>
                        <span className="block text-white/95 text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-2 font-bold">
                            Advanced Dental Care You Can Trust
                        </span>
                    </motion.h1>

                    {/* Description */}
                    <motion.p
                        variants={itemVariants}
                        className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-10 leading-relaxed drop-shadow-md"
                    >
                        Experience compassionate, state-of-the-art dental care designed for your comfort and confidence.
                        Our team combines advanced technology with a patient-first approach to keep your smile healthy and bright.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
                    >
                        <Link to="contact" smooth={true} offset={-80} duration={500}>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 via-cyan-600 to-emerald-600 hover:from-blue-700 hover:via-cyan-700 hover:to-emerald-700 text-white font-bold text-lg rounded-2xl shadow-2xl shadow-blue-500/50 hover:shadow-blue-500/70 transition-all duration-300 overflow-hidden"
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    Book an Appointment
                                    <svg
                                        className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M13 7l5 5m0 0l-5 5m5-5H6"
                                        />
                                    </svg>
                                </span>
                                <motion.span
                                    className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0"
                                    initial={{ x: "-100%" }}
                                    whileHover={{ x: "100%" }}
                                    transition={{ duration: 0.6 }}
                                />
                            </motion.button>
                        </Link>
                        <Link to="about" smooth={true} offset={-80} duration={500}>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 bg-white/10 backdrop-blur-md border-2 border-white/30 hover:bg-white/20 text-white font-semibold text-lg rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl"
                            >
                                Learn More
                            </motion.button>
                        </Link>
                    </motion.div>

                    {/* Stats/Features */}
                    <motion.div
                        variants={itemVariants}
                        className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mt-16"
                    >
                        {[
                            { icon: FaUserMd, label: "Expert Dentists", value: "50+" },
                            { icon: FaAward, label: "Years Experience", value: "15+" },
                            { icon: FaTooth, label: "Happy Patients", value: "10K+" },
                            { icon: FaClock, label: "Quick Service", value: "24/7" },
                        ].map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                variants={itemVariants}
                                whileHover={{ scale: 1.1, y: -5 }}
                                className="bg-white/10 backdrop-blur-md rounded-2xl p-4 md:p-6 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                <stat.icon className="w-8 h-8 md:w-10 md:h-10 text-cyan-400 mx-auto mb-3" />
                                <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
                                <div className="text-sm md:text-base text-white/80 font-medium">{stat.label}</div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
                >
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="w-1.5 h-1.5 bg-white rounded-full mt-2"
                    />
                </motion.div>
            </motion.div>
        </section>
    )
}
