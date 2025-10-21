import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRightLong } from 'react-icons/fa6'

function Hero() {
  return (
    <section
      className="text-white w-full h-120 sm:h-96 md:h-[32rem] lg:h-120 bg-cover bg-center bg-no-repeat flex justify-center items-center flex-col px-4"
      style={{ backgroundImage: "url('hero_bg.jpg')" }}
    >
      <h1 className="font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-center">
        Service
      </h1>
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-4 sm:mt-6 text-lg sm:text-xl items-center justify-center">
        <Link to='/'>
          <h5 className='hover:text-[#6D30FB]'>Home</h5>
        </Link>
        <FaArrowRightLong size={20} className="sm:ml-0" />
        <h5 className='text-[#6D30FB]'>Service</h5>
      </div>
    </section>
  )
}

export default Hero
