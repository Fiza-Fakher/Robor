import React from 'react'
import { contactCards } from '../../constants';
import { FaUser, FaEnvelope, FaPhone, FaInfoCircle } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";

function Info() {
   
  return (
    <>
    <section className='pt-40 flex flex-col justify-center items-center pb-20 px-4 sm:px-0'>
        <div>
            <div className='flex flex-col sm:flex-row justify-center items-center gap-4'>
                <div className='h-3 w-3 bg-[#6D30FB] rounded-full'></div>
                <h5 className='font-semibold text-3xl text-[#6D30FB]'>Quick Contact Info</h5>
            </div>
            <h1 className='font-bold text-4xl sm:text-6xl lg:text-6xl pt-4 text-center'>Contact Information</h1>
            <div className='flex flex-col sm:flex-row flex-wrap justify-center items-center gap-6 sm:gap-10 mt-10'>
                {contactCards.map((items,index)=>(
                    <div key={index} className='h-80 w-full sm:w-84 rounded-xl border border-gray-200 shadow-xl flex flex-col justify-center items-center transform transition duration-500 hover:scale-105'>
                        <div className='h-24 w-24 bg-[#6D30FB] rounded-full flex justify-center items-center '>{items.icon}</div>
                        <h2 className='font-semibold text-3xl mt-6 text-center'>{items.title}</h2>
                        <h5 className='text-lg text-gray-400 text-center mt-4'>{items.des}</h5>
                    </div>
                ))}
            </div>
        </div>

        <div className='flex flex-col lg:flex-row w-full lg:w-[90%] bg-[#F5F5F5] items-center justify-center gap-6 mt-20 rounded-xl px-4 sm:px-0'>
            <img src="/contact/contact.png" alt="" className='rounded-xl w-full lg:w-auto ml-0 lg:ml-6 mb-6 lg:mb-0' />
            <div className="flex flex-col justify-center items-center py-16 px-4 w-full lg:w-auto">
              <h1 className="text-4xl sm:text-5xl font-bold text-[#0b2b0d] mb-10 text-center lg:text-left">Get In Touch!</h1>

              <form className="w-full max-w-3xl p-4 sm:p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  
                  <div className="flex items-center border rounded-full px-4 py-3 bg-white border-gray-300">
                    <input
                      type="text"
                      placeholder="Your name"
                      className="flex-1 outline-none bg-white text-gray-700 required"
                    />
                    <FaUser className="text-gray-500 text-xl" />
                  </div>

                  <div className="flex items-center border rounded-full px-4 py-3 bg-white border-gray-300">
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="flex-1 outline-none bg-transparent text-gray-700 required"
                    />
                    <FaEnvelope className="text-gray-500 text-xl" />
                  </div>

                  <div className="flex items-center border rounded-full px-4 py-3 bg-white border-gray-300">
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      className="flex-1 outline-none bg-transparent text-gray-700 required"
                    />
                    <FaPhone className="text-gray-500 text-xl" />
                  </div>

                  <div className="flex items-center border rounded-full px-4 py-3 bg-white border-gray-300 text-gray-700">
                    <select
                      className="flex-1 outline-none bg-transparent text-gray-700 appearance-none"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Select Subject
                      </option>
                      <option>Web Devlopment</option>
                      <option>Brand Marketing</option>
                      <option>Ui/Ux Designing</option>
                      <option>Digital Marketing</option>
                    </select>
                    <MdKeyboardArrowDown className="text-gray-500 text-2xl" />
                  </div>
                </div>

                <div className="flex items-center border rounded-full px-4 py-3 mt-6 bg-white border-gray-300">
                  <input
                    type="text"
                    placeholder="Company name"
                    className="flex-1 outline-none bg-transparent text-gray-700 required"
                  />
                  <FaInfoCircle className="text-gray-500 text-xl" />
                </div>

                <div className="border rounded-2xl px-4 py-3 mt-6 bg-white border-gray-300">
                  <textarea
                    rows="4"
                    placeholder="How can we help you? feel free to get in touch!*"
                    className="w-full outline-none bg-transparent text-gray-700 " required
                  ></textarea>
                </div>

                
                <div className="mt-8">
                  <button
                    type="submit"
                    className="bg-[#0b2b0d] text-white px-8 py-3 rounded-full transition hover:bg-[#6D30FB] cursor-pointer w-full sm:w-auto"
                  >
                    Submit Message
                  </button>
                </div>
              </form>
            </div>
        </div>
    </section>
    </>
  )
}

export default Info
