import React from "react";
import { useParams } from "react-router-dom";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { serviceDetailData } from '../../constants/index'

function Detail() {
  const { slug } = useParams();
  const data = serviceDetailData[slug];

  if (!data) {
    return (
      <div className="text-center text-2xl font-bold mt-20 text-gray-600">
        Service not found 
      </div>
    );
  }

  return (
    <section className="flex flex-col lg:flex-row justify-center items-start gap-8 mt-8 pb-10 px-4 lg:px-0">
      
      {/* Main Content */}
      <div className="ml-0 lg:ml-6 pt-10 lg:pt-26 w-full lg:w-auto">
        <img src='/service/service.jpg' alt={data.title} className="rounded-xl w-full" />
        <h3 className="font-bold text-4xl mt-6">{data.title}</h3>
        <h5 className="text-gray-400 text-lg mt-6">{data.content}</h5>

        <h1 className="font-bold text-4xl mt-8">Key Features</h1>
        <h5 className="text-gray-400 mt-6 pt-2 text-lg">
          Machine Learning has become a transformative technology across
          industries, empowering businesses to automate processes, predict
          outcomes, and solve complex problems with data-driven insights.
        </h5>

        {/* Features List */}
        <div className="flex justify-center lg:justify-start items-start gap-8 mt-6 flex-wrap text-lg">
          {data.features.map((feature, i) => (
            <div key={i} className="max-w-xs w-full sm:w-[45%] lg:w-auto">
              <h4 className="font-bold text-2xl">{feature.title}</h4>
              <h5 className="mt-3 text-gray-400">{feature.desc}</h5>
            </div>
          ))}
        </div>

        <h3 className="font-bold text-4xl mt-10">Benefits</h3>
        <h5 className="text-gray-400 mt-4 pt-2 text-lg">{data.benefits}</h5>
      </div>

      {/* Sidebar */}
      <div className="flex flex-col lg:mr-8 mt-10 lg:mt-26 w-full lg:w-auto gap-6">
        
        {/* Form */}
        <div className="max-w-full lg:max-w-sm mx-auto lg:mx-0 bg-[#F5F5F5] rounded-3xl p-6">
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
        <div className="bg-[#6D30FB] mt-6 lg:mt-10 text-white w-full lg:w-[375px] h-auto lg:h-[436px] rounded-3xl p-8 flex flex-col justify-start gap-6">
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
  );
}

export default Detail;
