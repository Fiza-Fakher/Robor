import React from 'react';
import { blogCards } from '../../constants';
import { useParams, Link } from 'react-router-dom';
import { MdPersonOutline } from "react-icons/md";
import { CiCalendar } from "react-icons/ci";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaUser, FaGlobe, FaPen } from "react-icons/fa";

function Detail() {
  const { slug } = useParams();
  const blog = blogCards.find((b) => b.slug === slug);

  if (!blog) {
    return (
      <div className="text-center text-2xl font-bold mt-20 text-gray-600">
        Blog not found
      </div>
    );
  }

  return (
    <>
      <section className="flex flex-col lg:flex-row justify-center items-start gap-8 mt-8 pb-10 px-4 lg:px-0">
        <div className='w-full lg:w-[65%]'>
          <img src={blog.img} alt={blog.title} className='rounded-xl w-full' />

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 pt-6 flex-wrap">
            <h4 className="flex items-center gap-2 text-xl text-gray-500 hover:text-[#6D30FB] cursor-pointer">
              <MdPersonOutline size={24} className="text-[#6D30FB]" />
              {blog.author}
            </h4>

            <h4 className="flex items-center gap-2 text-xl text-gray-500 hover:text-[#6D30FB] cursor-pointer">
              <CiCalendar size={24} className="text-[#6D30FB]" />
              {blog.date}
            </h4>
          </div>

          <h2 className="text-3xl font-bold mt-4">{blog.title}</h2>
          <h5 className="text-gray-700 mt-4 text-xl leading-relaxed whitespace-pre-line">
            {blog.des || "Description coming soon..."}
          </h5>
        </div>

        <div className="w-full lg:w-[30%] flex flex-col mt-10 lg:mt-0">
          {/* Form */}
          <div className="max-w-full lg:max-w-sm mx-auto bg-[#F5F5F5] rounded-3xl p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-5">
              Get In touch
            </h2>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your name"
                className="w-full px-4 py-3 bg-white rounded-full border border-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 bg-white rounded-full border border-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <textarea
                placeholder="Write Message..."
                rows="4"
                className="w-full px-4 py-3 bg-white rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-purple-600 text-white py-3 rounded-full font-medium hover:bg-purple-700 transition duration-300"
              >
                Submit Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="bg-[#6D30FB] mt-10 text-white w-full lg:w-[375px] rounded-3xl p-8 flex flex-col justify-start gap-6">
            <div>
              <h2 className="text-2xl font-bold">Contact info</h2>
              <p className="text-sm mt-2 opacity-90">
                Need Any Help, Call Us 24/7 For Support
              </p>
            </div>

            <div className="flex items-center gap-4 mt-4">
              <div className="w-10 h-10 flex justify-center items-center border-2 border-white rounded-full">
                <FaPhone size={18} />
              </div>
              <div>
                <h6 className="text-sm opacity-80">Call Us</h6>
                <p className="font-semibold text-lg">+286 985 2156</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 flex justify-center items-center border-2 border-white rounded-full">
                <FaEnvelope size={18} />
              </div>
              <div>
                <h6 className="text-sm opacity-80">Mail Us</h6>
                <p className="font-semibold text-lg">info@example.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 flex justify-center items-center border-2 border-white rounded-full">
                <FaMapMarkerAlt size={18} />
              </div>
              <div>
                <h6 className="text-sm opacity-80">Office Address</h6>
                <p className="font-semibold text-lg leading-snug">
                  125 Berlin, Germany
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f9f9f9] rounded-2xl p-6 sm:p-10 mt-16 w-full lg:w-[50%] ml-0 lg:ml-10 mb-20">
        <h2 className="text-2xl font-semibold mb-3 text-gray-900">Leave a Comment</h2>
        <p className="text-gray-500 text-md mb-8">
          Your email address will not be published. Required fields are marked <span className="text-red-500">*</span>
        </p>

        <form className="flex flex-col gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative flex justify-center items-center bg-white">
              <FaUser className="absolute left-4 text-gray-400" />
              <input
                type="text"
                placeholder="Your Name" 
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#6D30FB] focus:outline-none"
                required
              />
            </div>

            <div className="relative flex justify-center items-center bg-white">
              <FaEnvelope className="absolute left-4 text-gray-400" />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#6D30FB] focus:outline-none"
                required
              />
            </div>
          </div>

          <div className="relative flex justify-center items-center bg-white">
            <FaGlobe className="absolute left-4 text-gray-400" />
            <input
              type="text"
              placeholder="Website"
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#6D30FB] focus:outline-none"
            />
          </div>

          <div className="relative flex justify-center items-center bg-white">
            <FaPen className="absolute left-4 top-4 text-gray-400" />
            <textarea
              placeholder="Comment*"
              rows="5"
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl resize-none focus:ring-2 focus:ring-[#6D30FB] focus:outline-none"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-fit px-8 py-3 bg-[#6D30FB] text-white font-semibold rounded-xl hover:bg-[#5826c5] transition-all duration-300"
          >
            Submit Comment
          </button>
        </form>
      </section>
    </>
  );
}

export default Detail;
