import React from "react";
import FastMarquee from "react-fast-marquee";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { logos } from "../../constants";

function Hero() {
  
  return (
    <>
      
      <section
        className="flex flex-col justify-center items-center text-center px-4 sm:px-6 md:px-10 pt-20 md:pt-32 pb-20 md:pb-40 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/homepage/hero.jpg')" }}
      >
        
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white leading-snug md:leading-tight">
          <span className="block">Revolutionize Your Business with</span>
          <span className="block pt-3 md:pt-4">
            Cutting-Edge AI Solutions.
          </span>
        </h1>

        
        <h5 className="text-base sm:text-lg font-medium  md:font-semibold text-white mt-6 max-w-2xl">
          Empowering innovation with AI-driven tools tailored for your success.
        </h5>

        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mt-10">
          <Link to='/services'><button className="h-[50px] sm:h-[55px] w-[170px] sm:w-[186px] flex justify-center items-center gap-3 sm:gap-4 text-base sm:text-lg bg-[#6D30FB] text-white rounded-full hover:bg-white hover:text-[#6D30FB] border-2 sm:border-4 border-[#6D30FB] transition-all duration-300 cursor-pointer">
            Discover More <FaArrowRightLong />
          </button></Link>

          <Link to="/contact">
            <button className="h-[50px] sm:h-[55px] w-[160px] sm:w-[180px] flex justify-center items-center gap-3 sm:gap-4 text-base sm:text-lg text-white rounded-full border-2 sm:border-4 border-white hover:bg-white hover:text-[#6D30FB] transition-all duration-300 cursor-pointer">
              Contact Us <FaArrowRightLong />
            </button>
          </Link>
        </div>
      </section>

      {/* Logo Marquee */}
      <section className="w-full py-4 sm:py-6 bg-[#6D30FB] flex justify-center items-center overflow-hidden">
        <FastMarquee speed={50} gradient={false}>
          {logos.map((logo, index) => (
            <img
              key={index}
              src={`/homepage/${logo}`}
              alt={`logo-${index}`}
              className="mx-8 sm:mx-12 md:mx-16 w-24 sm:w-28 md:w-32"
            />
          ))}
        </FastMarquee>
      </section>
    </>
  );
}

export default Hero;
