import React, { useState } from "react";
import { HiOutlineX, HiMenuAlt3 } from "react-icons/hi";
import { Link } from "react-scroll";
import { FaChevronDown } from "react-icons/fa";
import logo from "../assets/images/logo/logo.png";

const Nav = () => {
  const [open, setOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);

  const closeMenu = () => {
    setOpen(false);
    setSubmenuOpen(false);
  };

  const Links = [
    { name: "Home", link: "home" },
    { name: "About Us", link: "about" },
    { name: "Testimonials", link: "testimonials" },
    { name: "Services", link: "services" },
    { name: "Faq", link: "faqs" },
    { name: "Contact", link: "contact" },
  ];

  const serviceSubmenu = [
    { name: "Teeth Cleaning", link: "cleaning" },
    { name: "Root Canal", link: "root-canal" },
    { name: "Braces", link: "braces" },
    { name: "Dental Implants", link: "implants" },
  ];

  return (
    <nav className="shadow-md w-full sticky top-0 z-50 bg-white">
      <div className="flex items-center justify-between py-4 md:px-12 px-6">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" width={50} height={45} />
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
        <ul
          className={`md:flex md:items-center absolute md:static bg-white left-0 w-full md:w-auto md:space-x-8 
          md:py-0 py-6 md:pl-0 pl-8 transition-all duration-500 ease-in-out
          ${open ? "top-16 opacity-100" : "top-[-400px] opacity-0 md:opacity-100"}`}
        >
          {Links.map((link) => (
            <li key={link.name} className="my-4 md:my-0 relative group">
              {link.name === "Services" ? (
                <>
                  {/* Services Main Button */}
                  <button
                    onClick={() => setSubmenuOpen(!submenuOpen)}
                    className="flex items-center gap-1 text-gray-800 hover:text-blue-700 font-semibold duration-300 cursor-pointer"
                  >
                    {link.name}
                    <FaChevronDown
                      className={`text-xs transition-transform duration-200 ${submenuOpen ? "rotate-180" : "rotate-0"
                        } md:group-hover:rotate-180`}
                    />
                  </button>

                  {/* Submenu */}
                  <ul
                    className={`md:absolute md:top-[45px] md:left-0 bg-white shadow-xl rounded-lg md:min-w-[200px] overflow-hidden transition-all duration-300 origin-top
                    md:opacity-0 md:translate-y-2 md:group-hover:opacity-100 md:group-hover:translate-y-0 md:invisible md:group-hover:visible
                    ${submenuOpen
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
              )}
            </li>
          ))}

          {/* Contact / Book Button */}
          <li className="mt-4 md:mt-0 block md:hidden">
            <Link
              to="contact"
              smooth={true}
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
        <div className="hidden md:block flex-shrink-0"> <Link to="contact" smooth={true} offset={-70} duration={500} onClick={closeMenu}> <button className="border border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white px-6 py-2 rounded-lg font-semibold transition"> Book Now </button> </Link> </div>


      </div>



    </nav>
  );
};

export default Nav;
