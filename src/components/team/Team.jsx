import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa6";
import { teamCards } from "../../constants";

function Team() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6">
    
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-2">
  <div className="w-3 h-3 bg-[#6D30FB] rounded-full"></div>
  <h3 className="uppercase text-[#6D30FB] text-lg font-medium tracking-wide">
    AI Expert Team
  </h3>
</div>

          <h2 className="text-3xl sm:text-5xl font-semibold mt-2">
            Our Expert Creative Minds
          </h2>
        </div>

        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-10">
          {teamCards.map((member, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg"
            >
              {/* Image */}
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-64 sm:h-[350px] object-cover bg-gray-300 transition-transform duration-500 group-hover:scale-105"
              />

              
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

              
              <div className="absolute top-1/2 left-4 -translate-y-1/2 flex flex-col gap-3 sm:gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <a href="#" className="p-2 sm:p-3 bg-white rounded-full text-black hover:bg-[#6D30FB] hover:text-white transition">
                  <FaFacebookF size={16} />
                </a>
                <a href="#" className="p-2 sm:p-3 bg-white rounded-full text-black hover:bg-[#6D30FB] hover:text-white transition">
                  <FaTwitter size={16} />
                </a>
                <a href="#" className="p-2 sm:p-3 bg-white rounded-full text-black hover:bg-[#6D30FB] hover:text-white transition">
                  <FaInstagram size={16} />
                </a>
                <a href="#" className="p-2 sm:p-3 bg-white rounded-full text-black hover:bg-[#6D30FB] hover:text-white transition">
                  <FaWhatsapp size={16} />
                </a>
              </div>

              {/* Member Name */}
              <div className="absolute bottom-4 left-0 w-full text-center text-white z-10">
                <h3 className="text-base sm:text-lg font-semibold">{member.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;
