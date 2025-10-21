import React from 'react'
import { FaUser, FaEnvelope, FaPhone, FaInfoCircle } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";

function Form() {
  return (
    <section className='flex justify-center items-center text-white pb-16'>
      <div className='w-[90%] flex flex-col lg:flex-col items-center justify-center gap-6 mt-20 rounded-xl bg-[#6D30FB]'>
        
        
        <img 
          src="/contact/contact.png" 
          alt="Contact" 
          className='rounded-xl  w-[98%] h-130 lg:mt-4' 
        />

        {/* Form Section */}
        <div className="flex flex-col justify-center items-center py-16 px-4 w-full">
      <h1 className="text-5xl font-bold mb-10 text-center">Get In Touch!</h1>

      <form className="w-full max-w-5xl bg-[#6D30FB] p-8 rounded-3xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Your name */}
          <div className="flex items-center border rounded-full px-5 py-3 bg-white border-gray-300">
            <input
              type="text"
              placeholder="Your name"
              className="flex-1 outline-none bg-white text-gray-700 placeholder-gray-500"
            />
            <FaUser className="text-gray-500 text-xl" />
          </div>

          {/* Email Address */}
          <div className="flex items-center border rounded-full px-5 py-3 bg-white border-gray-300">
            <input
              type="email"
              placeholder="Email Address"
              className="flex-1 outline-none bg-white text-gray-700 placeholder-gray-500"
            />
            <FaEnvelope className="text-gray-500 text-xl" />
          </div>

          {/* Phone Number */}
          <div className="flex items-center border rounded-full px-5 py-3 bg-white border-gray-300">
            <input
              type="tel"
              placeholder="Phone Number"
              className="flex-1 outline-none bg-white text-gray-700 placeholder-gray-500"
            />
            <FaPhone className="text-gray-500 text-xl" />
          </div>

          {/* Select Subject */}
          <div className="flex items-center border rounded-full px-5 py-3 bg-white border-gray-300 text-gray-700">
            <select
              className="flex-1 outline-none bg-white text-gray-700 appearance-none"
              defaultValue=""
            >
              <option value="" disabled>
                Select Subject
              </option>
              <option>Web Development</option>
              <option>Brand Marketing</option>
              <option>UI/UX Designing</option>
              <option>Digital Marketing</option>
            </select>
            <MdKeyboardArrowDown className="text-gray-500 text-2xl" />
          </div>
        </div>

        {/* Company Name */}
        <div className="flex items-center border rounded-full px-5 py-3 mt-6 bg-white border-gray-300">
          <input
            type="text"
            placeholder="Company name"
            className="flex-1 outline-none bg-white text-gray-700 placeholder-gray-500"
          />
          <FaInfoCircle className="text-gray-500 text-xl" />
        </div>

        {/* Message */}
        <div className="border rounded-3xl px-5 py-3 mt-6 bg-white border-gray-300">
          <textarea
            rows="4"
            placeholder="How can we help you? Feel free to get in touch!*"
            className="w-full outline-none bg-white text-gray-700 placeholder-gray-500"
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="mt-8 text-center">
          <button
            type="submit"
            className="bg-[#0b2b0d] text-white px-10 py-3 hover:border-2 hover:border-white rounded-full transition hover:bg-[#6D30FB] cursor-pointer"
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
