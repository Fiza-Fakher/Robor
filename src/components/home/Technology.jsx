import React from 'react'
import { FaPlay } from "react-icons/fa6";
import { techCards } from '../../constants';

function Technology() {
  return (
    <>
      <section className='bg-purple-500 w-full text-white flex flex-col justify-center items-center pt-20 lg:pb-70  md:pb-60 pb-10 relative'>

       <div className='flex flex-col sm:flex-row gap-6 justify-center items-center'>
  <div className='h-[2px] w-16 bg-white'></div>
  <h6 className='text-xl uppercase'>Advanced Technology</h6>
  <div className='h-[1px] w-16 bg-white'></div>
</div>


        <h1 className='flex flex-col justify-center items-center text-6xl font-bold py-14 text-center'>
          <span>The Future is Here: Advance AI </span>
          <span> Technology</span>
        </h1>

        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 py-4">
          {techCards.map((items, index) => (
           <div
  key={index}
  className="w-[80%] sm:w-60 lg:w-76 h-70 rounded-2xl 
             bg-white/10 backdrop-blur-lg 
             border border-white/20 shadow-xl 
             text-white flex flex-col justify-center items-center 
             transition-transform duration-300 hover:scale-105 hover:bg-white/20"
>

              <img src={items.icon} alt={items.title} className="w-16 h-16 mb-4" />
              <h6 className="text-xl font-bold py-2">{items.title}</h6>
              <p className="text-center text-sm px-6 text-gray-200">{items.des}</p>
            </div>
          ))}
        </div>

        {/* ✅ Desktop Video Section */}
        <div className="hidden md:flex justify-center items-center absolute top-180 w-full">
          <img src="/homepage/img.jpeg" alt="Test" className="w-[95%] h-110 rounded-4xl" />
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="group w-50 h-50 border-4 border-white rounded-full flex justify-center items-center 
                            cursor-pointer transition-all duration-300 hover:bg-white hover:scale-110">
              <FaPlay className="text-white text-5xl transition-all duration-300 group-hover:text-[#6D30FB] group-hover:scale-125" />
            </div>
          </div>
        </div>

        {/* ✅ Mobile Video Section */}
        <div className="flex md:hidden justify-center items-center w-full mt-20 px-4">
          <div className="relative w-full flex justify-center items-center ">
            <img src="/homepage/img.jpeg" alt="Test" className="w-full rounded-3xl" />
            <div className="absolute inset-0 flex justify-center items-center">
              <div className="group w-24 h-24 border-4 border-white rounded-full flex justify-center items-center 
                              cursor-pointer transition-all duration-300 hover:bg-white hover:scale-110">
                <FaPlay className="text-white text-3xl transition-all duration-300 group-hover:text-[#6D30FB] group-hover:scale-125" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Technology
