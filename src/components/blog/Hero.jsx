import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRightLong } from 'react-icons/fa6'

function Hero() {
  return (
    <section
      className="text-white w-full h-[32rem] sm:h-[40rem] md:h-120 bg-cover bg-center bg-no-repeat flex justify-center items-center flex-col"
      style={{ backgroundImage: "url('hero_bg.jpg')" }}
    >
      <h1 className="font-bold text-6xl sm:text-7xl md:text-8xl text-center">Blogs</h1>
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-8 text-xl items-center justify-center">
        <Link to='/'>
          <h5 className='hover:text-[#6D30FB]'>Home</h5>
        </Link>
        <FaArrowRightLong size={24} />
        <h5 className='text-[#6D30FB]'>Blogs</h5>
      </div>
    </section>
  )
}

export default Hero
