import React from 'react';
import { aboutTeam } from '../../constants';
import { FaFacebookF, FaTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa6";

function Team() {
  return (
    <section className="pt-10 mb-20 px-4 sm:px-6 lg:px-12 flex flex-col justify-center items-center">
      <h2 className="text-4xl sm:text-5xl font-semibold mb-10 text-center">
        Our Expert Creative Minds
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 sm:gap-10 w-full max-w-7xl">
        {aboutTeam.map((member, index) => (
          <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg">
            {/* Image */}
            <img
              src={member.img}
              alt={member.name}
              className="w-full h-[300px] sm:h-[350px] object-cover bg-gray-300 transition-transform duration-500 group-hover:scale-105"
            />

            
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 z-0 transition-all duration-500"></div>

            {/* Social Icons */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
              <a href="https://facebook.com" className="p-3 bg-white rounded-full text-black hover:bg-[#6D30FB] hover:text-white transition">
                <FaFacebookF size={16} />
              </a>
              <a href="https://x.com/" className="p-3 bg-white rounded-full text-black hover:bg-[#6D30FB] hover:text-white transition">
                <FaTwitter size={16} />
              </a>
              <a href="http://instagram.com" className="p-3 bg-white rounded-full text-black hover:bg-[#6D30FB] hover:text-white transition">
                <FaInstagram size={16} />
              </a>
              <a href="http://whatsappweb.com" className="p-3 bg-white rounded-full text-black hover:bg-[#6D30FB] hover:text-white transition">
                <FaWhatsapp size={16} />
              </a>
            </div>

            {/* Name */}
            <div className="absolute bottom-4 left-0 w-full text-center text-white z-10">
              <h3 className="text-lg sm:text-xl font-semibold">{member.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Team;
