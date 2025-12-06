import { motion } from 'framer-motion';
import '../App.css';
import { assets } from "../assets/images/assets";
import { FaTooth, FaAward, FaUserMd, FaClock } from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi';

const RootHero = () => {

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
        <>
            <section id="home-rct" className="relative w-full min-h-[600px] md:min-h-[700px] lg:min-h-[650px] flex items-center overflow-hidden" style={{ minHeight: "100vh", overflowY: "hidden", }}>
                {/* Background Image */}
                <div className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${assets.heroBanner})` }} >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-900/85 via-cyan-900/75 to-emerald-900/85"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

                    {/* Subtle Pattern */}
                    <div className="absolute inset-0 opacity-10">
                        <div
                            className="absolute inset-0"
                            style={{ backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`, backgroundSize: "40px 40px", }}
                        ></div>
                    </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <motion.div
                        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-20 right-10 md:right-20 text-blue-400/20"
                    >
                        <HiSparkles className="w-16 h-16 md:w-24 md:h-24" />
                    </motion.div>

                    <motion.div
                        animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        className="absolute bottom-20 left-10 md:left-20 text-cyan-400/20"
                    >
                        <FaTooth className="w-12 h-12 md:w-20 md:h-20" />
                    </motion.div>
                </div>

                {/* LEFT ALIGNED CONTENT */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                    className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 w-full"
                >
                    <div className="max-w-3xl text-left">
                        <motion.div
                            variants={badgeVariants}
                            className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-white/10 backdrop-blur-md rounded-full border border-white/20 shadow-lg"
                        >
                            <FaAward className="text-yellow-400 text-sm" />
                            <span className="text-white/90 text-sm font-semibold">Trusted Dental Care Since 2010</span>
                        </motion.div>

                        <motion.h1
                            variants={itemVariants}
                            className="text-4xl sm:text-3xl md:text-3xl lg:text-4xl font-extrabold leading-tight mb-6 text-white drop-shadow-lg"
                        >
                            Root Canal Treatment in
                            <span className="block bg-gradient-to-r from-blue-400 via-cyan-300 to-emerald-400 bg-clip-text text-transparent mt-1">
                                Arakkonam
                            </span>
                        </motion.h1>

                        <motion.p
                            variants={itemVariants}
                            className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-2xl leading-relaxed mb-10 drop-shadow-md"
                        >
                            At <span className='bg-gradient-to-r from-blue-400 via-cyan-300 to-emerald-400 bg-clip-text text-transparent mt-1'>AADental</span> Clinic in Arakkonam, we offer safe and pain-free root canal treatments to save your natural tooth. If your tooth is badly decayed or cracked and the damage reaches the inner part (pulp), a filling alone won’t fix it. That’s when a root canal is needed.
                        </motion.p>
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
        </>
    )
}

export default RootHero