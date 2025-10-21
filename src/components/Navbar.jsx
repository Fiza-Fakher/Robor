import React, { useState } from "react";
import { FaArrowRightLong, FaChevronDown, FaBars, FaXmark } from "react-icons/fa6"; // ✅ all from fa6 now
import { IoHardwareChipOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showPages, setShowPages] = useState(false); // for mobile dropdown toggle

  const pages = [
    { name: "Projects", path: "/projects" },
    { name: "Team", path: "/team" },
    { name: "AI Consulting", path: "/ai-consulting" },
  ];

  return (
    <>
      {/* Navbar */}
      <nav className="flex justify-between items-center pb-4 pt-6 px-4 md:px-10 bg-[#0C2137] text-white relative">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src="/logo.svg"
            alt="LOGO"
            className="w-28 sm:w-32 md:w-36 cursor-pointer"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center justify-center gap-6 text-lg font-semibold">
          <ul className="flex items-center justify-center gap-10">
            <Link to="/"><li className="group relative hover:text-blue-400 transition">Home</li></Link>
            <Link to="/about"><li className="hover:text-blue-400 transition">About Us</li></Link>
            <Link to="/services"><li className="hover:text-blue-400 transition">Services</li></Link>

            {/* Dropdown */}
            <li className="group relative cursor-pointer">
              Pages
              <FaChevronDown className="inline-block ml-2 text-sm" />
              <ul className="w-60 text-lg absolute hidden group-hover:block bg-black text-white p-2 top-full mt-[2px] z-50 rounded-md">
                {pages.map((item, i) => (
                  <li
                    key={i}
                    className="group/sub pt-2 pl-4 flex gap-2 items-center hover:text-blue-500 transition-all duration-200 hover:ml-2"
                  >
                    <IoHardwareChipOutline
                      size={18}
                      className="hidden group-hover/sub:block"
                    />
                    <Link to={item.path}>{item.name}</Link>
                  </li>
                ))}
                <div className="w-full h-[1px] bg-gray-600 mt-2"></div>
              </ul>
            </li>

            <Link to="/blog"><li className="hover:text-blue-400 transition">Blog</li></Link>
            <Link to="/contact"><li className="hover:text-blue-400 transition">Contact Us</li></Link>
          </ul>
        </div>

        {/* Desktop CTA Button */}
        <button className="hidden md:flex w-auto px-6 h-12 rounded-full bg-[#6D30FB] text-white items-center justify-center gap-2 hover:text-[#6D30FB] hover:bg-white transition-all duration-300">
          Get Started Now
          <FaArrowRightLong className="mt-1" size={18} />
        </button>

        {/* Mobile Menu Toggle */}
        <div
          className="md:hidden text-3xl cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaXmark /> : <FaBars />}
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-[#0C2137] text-white flex flex-col items-center gap-5 text-lg font-semibold transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-[600px] py-6" : "max-h-0"
        }`}
      >
        <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/about" onClick={() => setMenuOpen(false)}>About Us</Link>
        <Link to="/services" onClick={() => setMenuOpen(false)}>Services</Link>

        {/* Mobile Pages Dropdown */}
        <div className="flex flex-col items-center">
          <button
            onClick={() => setShowPages(!showPages)}
            className="flex items-center gap-2"
          >
            Pages <FaChevronDown size={14} className={`${showPages ? "rotate-180" : ""} transition`} />
          </button>
          <ul
            className={`flex flex-col gap-2 mt-2 transition-all duration-300 ${
              showPages ? "max-h-[200px]" : "max-h-0 overflow-hidden"
            }`}
          >
            {pages.map((item, i) => (
              <Link key={i} to={item.path} onClick={() => setMenuOpen(false)}>
                <li className="hover:text-blue-500">{item.name}</li>
              </Link>
            ))}
          </ul>
        </div>

        <Link to="/blog" onClick={() => setMenuOpen(false)}>Blog</Link>
        <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact Us</Link>
<Link
  to="/contact"
  className="cursor-pointer w-44 h-12 rounded-full bg-[#6D30FB] text-white flex items-center justify-center gap-2 hover:text-[#6D30FB] hover:bg-white transition-all duration-300"
>
  Get Started
  <FaArrowRightLong className="mt-1" size={18} />
</Link>
      </div>

      <div className="w-full h-[1px] bg-white opacity-40"></div>
    </>
  );
}

export default Navbar;
