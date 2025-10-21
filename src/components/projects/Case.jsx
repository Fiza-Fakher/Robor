import React from 'react'
import { GoArrowUpRight } from "react-icons/go";
import {projectCards} from '../../constants/index'
import { Link } from 'react-router-dom';

function Case() {
    
  return (
    <>
    <section className='bg-white relative flex flex-col justify-center items-center pb-20 px-4 sm:px-0'>
  {/* Background Text */}
  <h1 className='text-[160px] sm:text-[320px] flex justify-center items-center absolute z-0 -top-10 sm:-top-34 font-bold text-gray-100'>
  Case
</h1>


  {/* Content */}
  <div className='z-20 flex justify-center items-center flex-col pt-24 sm:pt-30'>
    <div className='flex gap-6 text-[#6D30FB] justify-center items-center'>
      <div className='h-[2px] w-16 bg-[#6D30FB]'></div>
      <h6 className='text-xl uppercase'>Case Study</h6>
      <div className='h-[1px] w-16 bg-[#6D30FB]'></div>
    </div>

    <h1 className='text-3xl sm:text-6xl font-bold py-10 text-center'>
      AI Projects Case Study
    </h1>

    <h5 className='flex flex-col justify-center items-center text-gray-400 text-base sm:text-xl text-center max-w-md sm:max-w-xl'>
      <span>An AI agency is a specialized organization dedicated to helping businesses and</span> 
      <span>organizations leverage artificial intelligence to achieve their goals.</span>
    </h5>
  </div>
</section>

   <section className="grid grid-cols-2 gap-8 cursor-pointer pb-10">
  {projectCards.map((items, index) => (
    <div
      key={index}
      className="flex flex-col items-center text-center mt-4 group relative"
    >
      <div className="relative overflow-hidden rounded-3xl">
        <img
          src={items.img}
          alt=""
          className="rounded-3xl transition-all duration-300 group-hover:blur-xs"
        />

        
        <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-all duration-300">
      <Link to={`/projects/${items.slug}`}>    <div className="w-16 h-16 rounded-full bg-white/40 backdrop-blur-md flex justify-center items-center transition-all duration-300 hover:bg-[#6D30FB]">
            <GoArrowUpRight size={28} className="text-white" />
          </div></Link>
        </div>
      </div>

      
      <div className="flex justify-center items-center w-44 h-10 gap-2 border border-gray-400 text-gray-400 rounded-full mt-4">
        <div className="w-3 h-3 rounded-full bg-gray-400"></div>
        <h4>{items.type}</h4>
      </div>

      
      <h2 className="text-2xl font-bold pt-4">{items.title}</h2>
    </div>
  ))}
</section>

    </>
  )
}

export default Case