import React, { useState } from "react";
import { HiOutlineX, HiMenuAlt3 } from "react-icons/hi";
import { Link } from "react-scroll";

const Nav = () => {
  // Navigation links mapped to section IDs in your components
  const Links = [
    { name: "Home", link: "home" },
    { name: "About Us", link: "about" },
    { name: "Testimonials", link: "testimonials" },
    { name: "Services", link: "services" },
    { name: "Contact", link: "contact" },
  ];

  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);

  return (
    <nav className="shadow-md w-full sticky top-0 z-50 bg-white">
      <div className="flex items-center justify-between py-4 md:px-12 px-6">
        {/* Logo */}
        <div className="flex items-center">
          <span className="text-2xl font-extrabold text-blue-600">AA</span>
          <span className="text-2xl font-extrabold text-gray-800">Dental</span>
        </div>

        {/* Mobile Menu Button */}
        <div
          onClick={() => setOpen(!open)}
          className="text-2xl absolute right-6 top-5 p-1 text-gray-700 border rounded-md cursor-pointer md:hidden"
        >
          {open ? <HiOutlineX /> : <HiMenuAlt3 />}
        </div>

        {/* Menu Links */}
        <ul
          className={`md:flex md:items-center absolute md:static bg-white left-0 w-full md:w-auto md:space-x-8 
          md:py-0 py-6 md:pl-0 pl-8 transition-all duration-500 ease-in-out
          ${open ? "top-16 opacity-100" : "top-[-400px] opacity-0 md:opacity-100"}`}
        >
          {Links.map((link) => (
            <li key={link.name} className="my-4 md:my-0">
              <Link
                onClick={closeMenu}
                to={link.link}
                smooth={true}
                spy={true}
                offset={-70}
                duration={500}
                className="text-gray-800 hover:text-blue-700 font-semibold duration-300 cursor-pointer"
              >
                {link.name}
              </Link>
            </li>
          ))}

          {/* Contact Us Button */}
          <li className="mt-4 md:mt-0">
            <Link
              to="contact"
              smooth={true}
              spy={true}
              offset={-70}
              duration={500}
              onClick={closeMenu}
            >
              <button className="border border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white px-6 py-2 rounded-lg font-semibold transition">
                Book Now
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
