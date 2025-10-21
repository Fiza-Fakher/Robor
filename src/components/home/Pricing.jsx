import React from 'react'
import { FaCheckCircle } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";
import { plans } from '../../constants';

function Pricing() {
  

  return (
    <>
      <section className='bg-[#F5F5F5] pt-20 flex flex-col justify-center items-center pb-20 px-4 sm:px-0'>
        <div className='flex gap-4 sm:gap-6 text-[#6D30FB] justify-center items-center'>
          <div className='h-[2px] w-16 bg-[#6D30FB]'></div>
          <h6 className='text-lg sm:text-xl uppercase'>pricing plan</h6>
          <div className='h-[2px] w-16 bg-[#6D30FB]'></div>
        </div>

        <h1 className='text-3xl sm:text-6xl font-bold text-center pt-6 sm:pt-10'>Affordable Pricing Plan</h1>

        <div className="flex flex-col md:flex-row flex-wrap justify-center gap-6 md:gap-8 py-12 sm:py-16">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="relative flex flex-col justify-between bg-white rounded-2xl shadow-md p-6 sm:p-8 w-full sm:w-[440px] border border-gray-200" >

              <h2 className="text-xl sm:text-2xl font-bold mb-2">{plan.title}</h2>
              <p className="text-gray-500 mb-6 text-sm sm:text-base">
                This is an excellent option for people & small businesses who are starting out.
              </p>

              <div className="bg-[#F3ECFF] rounded-xl text-center py-4 sm:py-6 mb-6">
                <p className="text-2xl sm:text-4xl font-extrabold text-[#6D30FB]">{plan.price}</p>
                <p className="text-gray-500 text-xs sm:text-sm">
                  /{plan.period} <br />
                  {plan.members}
                </p>
              </div>

              
              <ul className="space-y-3 sm:space-y-4 mb-6">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 sm:gap-3 text-sm sm:text-lg text-gray-700">
                    {feature.available ? (
                      <FaCheckCircle className="text-[#6D30FB]" />
                    ) : (
                      <IoMdCloseCircle className="text-gray-300" />
                    )}
                    {feature.text}
                  </li>
                ))}
              </ul>

              <button className="w-full py-3 sm:py-5 rounded-full text-white font-semibold bg-black hover:bg-[#6D30FB] cursor-pointer transition">
                Choose Your Plan
              </button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Pricing;
