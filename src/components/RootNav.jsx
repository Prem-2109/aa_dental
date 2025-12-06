import React, { useState, useEffect } from "react";
import { HiOutlineX, HiMenuAlt3 } from "react-icons/hi";
import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import { assets } from "../assets/images/assets";


const Nav = () => {
  const [open, setOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll for shadow and sticky background effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => {
    setOpen(false);
    setSubmenuOpen(false);
  };

  const Links = [
    { name: "Home", link: "/" },
  ];

const serviceSubmenu = [
    { name: "Root Canal", link: "/rct" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 
      ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-md"
          : "bg-gradient-to-r from-blue-50 via-cyan-100 to-green-50"
      }`}
    >
      <div className="flex items-center justify-between py-4 md:px-12 px-6">
        {/* Logo */}
        <div className="flex items-center">
          <img src={assets.logo} alt="Logo" width={50} height={45} />
          <span className="text-2xl font-extrabold text-blue-600">AA</span>
          <span className="text-2xl font-extrabold text-gray-800">Dental</span>
        </div>

        {/* Mobile Menu Toggle */}
        <div
          onClick={() => setOpen(!open)}
          className="text-2xl absolute right-6 top-5 p-1 text-gray-700 border rounded-md cursor-pointer md:hidden"
        >
          {open ? <HiOutlineX /> : <HiMenuAlt3 />}
        </div>

        {/* Navigation Menu */}
        {/* <ul
          className={`md:flex md:items-center absolute md:static left-0 w-full md:w-auto md:space-x-8 
          md:py-0 py-6 md:pl-0 pl-8 transition-all duration-500 ease-in-out 
          ${open ? "top-16 opacity-100" : "top-[-400px] opacity-0 md:opacity-100 "}`}
        >
          {Links.map((link) => (
            <li key={link.name} className="my-4 md:my-0 relative group">
              {link.name === "Treatment" ? (
                <>
                  <button
                    onClick={() => setSubmenuOpen(!submenuOpen)}
                    className="flex items-center gap-1 text-gray-800 hover:text-blue-700 font-semibold duration-300 cursor-pointer"
                  >
                    {link.name}
                    <FaChevronDown
                      className={`text-xs transition-transform duration-200 ${
                        submenuOpen ? "rotate-180" : "rotate-0"
                      } md:group-hover:rotate-180`}
                    />
                  </button>

                  <ul
                    className={`md:absolute md:top-[45px] md:left-0 bg-gradient-to-r from-blue-50 via-cyan-100 to-green-50 shadow-xl rounded-lg md:min-w-[200px] overflow-hidden transition-all duration-300 origin-top
                    md:opacity-0 md:translate-y-2 md:group-hover:opacity-100 md:group-hover:translate-y-0 md:invisible md:group-hover:visible
                    ${
                      submenuOpen
                        ? "max-h-60 opacity-100 visible translate-y-0"
                        : "max-h-0 opacity-0 invisible"
                    } md:max-h-none`}
                  >
                    {serviceSubmenu.map((sub) => (
                      <li key={sub.name} className="last:border-none">
                        <Link
                          to={sub.link}
                          smooth={true}
                          offset={-70}
                          duration={500}
                          onClick={closeMenu}
                          className="block px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-700 font-medium cursor-pointer transition-all duration-200"
                        >
                          {sub.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <Link
                  onClick={closeMenu} to={link.link} smooth={true} spy={true} offset={-70}
                  duration={500} className="text-gray-800 hover:text-blue-700 font-semibold duration-300 cursor-pointer"
                >
                  {link.name}
                </Link>
              )}
            </li>
          ))}


        </ul> */}

        {/* Desktop Book Now Button */}
        <div className="hidden md:block flex-shrink-0">
          <Link
            to="/"
            smooth={true}
            offset={-70}
            duration={500}
            onClick={closeMenu}
          >
            <button className="bg-gradient-to-r from-blue-600 to-green-600 
                       hover:shadow-lg text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 cursor-pointer">
              Home
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
