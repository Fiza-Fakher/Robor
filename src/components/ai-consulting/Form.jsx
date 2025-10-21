import React from 'react'
import { FaUser, FaEnvelope, FaPhone, FaInfoCircle } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";

function Form() {
  return (
    <section className='flex justify-center items-center text-white pb-16'>
      <div className='w-[90%] flex flex-col lg:flex-row items-center justify-center gap-6 mt-20 rounded-xl bg-[#6D30FB]'>
        
        {/* Image */}
        <img 
          src="/contact/contact.png" 
          alt="Contact" 
          className='rounded-xl lg:pl-4' 
        />

        {/* Form Section */}
        <div className="flex flex-col justify-center items-center py-16 px-4 w-full lg:w-auto">
          <h1 className="text-5xl font-bold mb-10 text-center lg:text-left">Get In Touch!</h1>

          <form className="w-full max-w-3xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
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
                  className="flex-1 outline-none bg-white text-gray-700 required"
                />
                <FaEnvelope className="text-gray-500 text-xl" />
              </div>

              <div className="flex items-center border rounded-full px-4 py-3 bg-white border-gray-300">
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="flex-1 outline-none bg-white text-gray-700 required"
                />
                <FaPhone className="text-gray-500 text-xl" />
              </div>

              <div className="flex items-center border rounded-full px-4 py-3 bg-white border-gray-300 text-gray-700">
                <select
                  className="flex-1 outline-none bg-white text-gray-700 appearance-none"
                  defaultValue=""
                >
                  <option value="" disabled>Select Subject</option>
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
                className="flex-1 outline-none bg-white text-gray-700 required"
              />
              <FaInfoCircle className="text-gray-500 text-xl" />
            </div>

            <div className="border rounded-2xl px-4 py-3 mt-6 bg-white border-gray-300">
              <textarea
                rows="4"
                placeholder="How can we help you? Feel free to get in touch!*"
                className="w-full outline-none bg-white text-gray-700"
                required
              ></textarea>
            </div>

            <div className="mt-8">
              <button
                type="submit"
                className="bg-[#0b2b0d] text-white px-8 py-3 rounded-full transition hover:bg-[#6D30FB] cursor-pointer hover:border"
              >
                Submit Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Form
