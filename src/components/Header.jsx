import React, { useState } from 'react';
import { HiMenuAlt3, HiOutlineX } from 'react-icons/hi';
import { motion } from 'framer-motion'; // Import Framer Motion
import { Link } from 'react-scroll';
import { navItems } from '../export';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Animation Variants
  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <nav className="flex items-center justify-between bg-white  lg: lg:justify-center 
          py-4 px-5 md:px-12 lg:px-1">
      {/* Logo */}
      <div className="logo">
        <img src={logo} alt="Logo" className="w-1/6" />
      </div>

      <div className="desktop-menu">
        {/* Desktop Menu */}
        <ul className="hidden lg:flex justify-center items-center gap-6">
          {navItems.map(({ link, path }) => (
            <Link
              key={path}
              className="text-black uppercase font-bold cursor-pointer py-3 px-4 rounded-full 
            hover:bg-yellow-500 hover:text-white"
              to={path}
              smooth={true}
              spy={true}
              offset={-300}
            >
              {link}
            </Link>
          ))}
        </ul>
      </div>

      {/* Contact Button */}
      <button
        className="bg-yellow-500 text-black hover:text-white px-10 py-3 rounded-full font-semibold
      transform hover:scale-105 transition-transform duration-300 cursor-pointer hidden md:flex uppercase"
      >
        Contact Us
      </button>

      {/* Hamburger Icon */}
      <div
        className="flex lg:hidden cursor-pointer text-2xl text-black"
        onClick={toggleMenu}
      >
        {isMenuOpen ? <HiOutlineX /> : <HiMenuAlt3 />}
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.ul
          className="absolute top-16 left-0 w-full bg-yellow-500 flex flex-col items-center gap-6 py-5 shadow-lg z-40"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={menuVariants}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          {navItems.map(({ link, path }) => (
            <Link
              key={path}
              className="text-black uppercase font-bold cursor-pointer py-3 px-4 rounded-full 
              hover:bg-yellow-500 hover:text-white"
              to={path}
              smooth={true}
              spy={true}
              offset={-300}
              onClick={closeMenu}
            >
              {link}
            </Link>
          ))}
          {/* Contact Button in Mobile */}
          <button
            className="text-black hover:text-white px-10 py-3 rounded-full font-semibold
            transform hover:scale-105 transition-transform duration-300 cursor-pointer uppercase"
          >
            Contact Us
          </button>
        </motion.ul>
      )}
    </nav>
  );
};
