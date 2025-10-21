import React from 'react'
import { FaCheckCircle } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";
import { plans } from '../../constants';

function Plan() {
  return (
    <>
      <section className='bg-black pt-30 flex flex-col justify-center items-center pb-30 mb-10 rounded-4xl px-4'>
        <div className='flex gap-6 text-[#6D30FB] justify-center items-center'>
          <div className='h-[2px] w-16 bg-white'></div>
          <h6 className='text-xl uppercase'>pricing plan</h6>
          <div className='h-[1px] w-16 bg-white'></div>
        </div>

        <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center pt-10 text-white'>
          Affordable Pricing Plan
        </h1>

        <div className="flex flex-wrap justify-center gap-6 sm:gap-8 py-16">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="relative flex flex-col justify-between bg-[#141414] rounded-2xl shadow-md p-6 sm:p-8 w-full sm:w-[320px] md:w-[380px] lg:w-[440px] border"
            >
              <h2 className="text-xl sm:text-2xl font-bold mb-2 text-white">{plan.title}</h2>
              <p className="text-gray-500 mb-6 text-sm sm:text-base">
                This is an excellent option for people & small businesses who are starting out.
              </p>

              <div className="bg-black rounded-xl text-center py-4 sm:py-6 mb-6">
                <p className="text-2xl sm:text-4xl font-extrabold text-white">{plan.price}</p>
                <p className="text-gray-500 text-sm sm:text-md">
                  /{plan.period} <br />
                  {plan.members}
                </p>
              </div>

              {/* Features */}
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

              <button className="w-full py-3 sm:py-5 rounded-full text-white font-semibold bg-black">
                Choose Your Plan
              </button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Plan;
