import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRightLong } from 'react-icons/fa6'

function Hero() {
  return (
    <section
      className="text-white w-full h-[32rem] sm:h-[32rem] bg-cover bg-center bg-no-repeat flex justify-center items-center flex-col px-4 sm:px-0"
      style={{ backgroundImage: "url('/hero_bg.jpg')" }}
    >
      <h1 className="font-bold text-5xl sm:text-8xl text-center sm:text-left">
        Contact Us
      </h1>
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-6 text-xl items-center justify-center">
        <Link to='/'>
          <h5 className='hover:text-[#6D30FB]'>Home</h5>
        </Link>
        <FaArrowRightLong size={24} />
        <h5 className='text-[#6D30FB]'>Contact Us</h5>
      </div>
    </section>
  )
}

export default Hero
