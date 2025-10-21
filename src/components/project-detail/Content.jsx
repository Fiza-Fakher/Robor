import React from "react";
import { useParams } from "react-router-dom";
import { projectDetails } from "../../constants/index";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function Content() {
  const { slug } = useParams();
  const data = projectDetails.find((item) => item.slug === slug);

  if (!data) {
    return (
      <div className="text-center py-20 text-2xl font-semibold text-red-500">
        Project not found 
      </div>
    );
  }

  return (
    <div className="flex flex-col lg:flex-row justify-center items-start gap-8 px-4 lg:px-0 py-10 max-w-[1280px] mx-auto">
      {/* Project Section */}
      <section className="flex-1">
        <img
          src={data.img}
          alt={data.title}
          className="w-full h-[400px] object-cover rounded-2xl shadow-md mb-8"
        />
        <h1 className="text-4xl font-bold mb-4">{data.title}</h1>
        <div className="flex justify-center items-center w-44 h-10 gap-2 border border-gray-400 text-gray-400 rounded-full mt-4">
          <div className="w-3 h-3 rounded-full bg-gray-400"></div>
          <h4>{data.type}</h4>
        </div>
        <p className="text-gray-700 leading-relaxed mb-6 mt-8 text-lg">{data.description}</p>

        <div className="mt-8 rounded-xl">
          <h3 className="text-2xl font-bold mb-2">Working Process</h3>
          <p className="text-gray-700 text-lg">{data.workingProcess}</p>
        </div>

        <div className="mt-6">
          <h3 className="text-3xl font-bold mb-2">Result & Impact</h3>
          <p className="text-gray-700 leading-relaxed text-lg pt-4">{data.resultImpact}</p>
        </div>
      </section>

      {/* Form + Contact Info */}
      <section className="flex flex-col lg:flex-col items-center lg:items-start w-full lg:w-auto">
        {/* Form */}
        <div className="max-w-sm w-full mx-auto bg-[#F5F5F5] rounded-3xl p-6 mb-10 lg:mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-5">Get In touch</h2>
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
        <div className="bg-[#6D30FB] text-white w-full max-w-sm h-auto lg:h-[436px] rounded-3xl p-8 flex flex-col justify-start gap-6">
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
              <p className="font-semibold text-lg leading-snug">125 Berlin, Germany</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Content;
