import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <>
      <section
        className="text-white w-full h-120 bg-cover bg-center bg-no-repeat flex justify-center items-center flex-col text-center px-4"
        style={{ backgroundImage: "url('hero_bg.jpg')" }}
      >
        <h1 className="font-bold text-8xl">About Us</h1>

        <div className="flex gap-6 mt-6 text-xl items-center justify-center flex-wrap">
          <Link to='/'>
            <h5 className='hover:text-[#6D30FB]'>Home</h5>
          </Link>
          <FaArrowRightLong size={24} />
          <h5 className='text-[#6D30FB]'>About Us</h5>
        </div>
      </section>
    </>
  )
}

export default Hero
