import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaArrowUp } from "react-icons/fa";

function Footer() {
  return (
    <>
      <div className="bg-[#051600] pt-4 pb-0 flex flex-col items-center">
        
        {/* --- Top Green Section --- */}
        <div className="flex flex-col lg:flex-row justify-between items-center w-[98%] px-10 pb-20">
          <div className="flex flex-col">
            <div className="flex justify-start items-center gap-6">
              <h5 className="uppercase text-2xl font-semibold text-white">
                Get started
              </h5>
              <div className="w-30 h-[1px] bg-white"></div>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-white flex flex-col pt-6">
              <span>Let's Make</span>
              <span className="pt-4">Something Great</span>
              <span className="pt-4">Together</span>
            </h1>
            <button className="h-16 w-56 bg-[#6D30FB] text-white rounded-full flex justify-center items-center gap-4 text-lg mt-10 hover:bg-white hover:text-[#6D30FB] transition-all duration-300">
              Contact Us <FaArrowRight />
            </button>
          </div>
          <img src="/homepage/footer.png" alt="" className="mt-10 lg:mt-0" />
        </div>

        {/* --- Purple Gradient Footer --- */}
        <div className="bg-gradient-to-r from-[#1E1B2E] via-[#2E1B4B] to-[#3B1B67] text-white py-16 px-10 rounded-t-[3rem] rounded-b-[3rem] relative w-[98%]">

          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10">

            {/* --- Column 1: Logo & Info --- */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img src="/logo.png" alt="logo" className="w-20" />
                
              </div>
              <p className="text-gray-300 leading-relaxed text-[15px]">
                Data privacy and security are at the core of our operations,
                ensuring compliance with global standards like GDPR and HIPAA.
              </p>

              {/* Social icons */}
              <div className="flex gap-4 mt-5">
                {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, i) => (
                  <div
                    key={i}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-black hover:bg-[#6D30FB] hover:text-white transition-all duration-300 cursor-pointer"
                  >
                    <Icon size={18} />
                  </div>
                ))}
              </div>
            </div>

            {/* --- Column 2: Useful Links --- */}
            <div>
              <h3 className="text-xl font-semibold mb-2">Useful Links</h3>
              <div className="h-[2px] w-10 bg-[#6D30FB] mb-4"></div>
              <ul className="space-y-2 text-gray-300">
                {["Home", "About Us", "Blog Standard", "Project", "Contact Us"].map((item, i) => (
                  <li key={i} className="hover:text-[#6D30FB] cursor-pointer">{item}</li>
                ))}
              </ul>
            </div>

            {/* --- Column 3: Company --- */}
            <div>
              <h3 className="text-xl font-semibold mb-2">Company</h3>
              <div className="h-[2px] w-10 bg-[#6D30FB] mb-4"></div>
              <ul className="space-y-2 text-gray-300">
                {["What we Offer", "Our Story", "Latest Posts", "Help Center", "Our Partners"].map((item, i) => (
                  <li key={i} className="hover:text-[#6D30FB] cursor-pointer">{item}</li>
                ))}
              </ul>
            </div>

            {/* --- Column 4: Our Service --- */}
            <div>
              <h3 className="text-xl font-semibold mb-2">Our Service</h3>
              <div className="h-[2px] w-10 bg-[#6D30FB] mb-4"></div>
              <ul className="space-y-2 text-gray-300">
                {["Robotic Automation", "Education & Science", "Machine Learning", "Predictive Analysis", "Data Security"].map((item, i) => (
                  <li key={i} className="hover:text-[#6D30FB] cursor-pointer">{item}</li>
                ))}
              </ul>
            </div>

            {/* --- Column 5: Get the App --- */}
            <div>
              <h3 className="text-xl font-semibold mb-2">Get the app</h3>
              <div className="h-[2px] w-10 bg-[#6D30FB] mb-4"></div>
              <p className="text-gray-300 text-[15px] mb-4">
                We suggest connecting apps
              </p>
              <div className="flex flex-col gap-3">
                <img
                  src="google-btn.png"
                  alt="Google Play"
                  className="w-40 rounded-full cursor-pointer hover:scale-105 transition-all duration-300"
                />
                <img
                  src="app-store-btn.png"
                  alt="App Store"
                  className="w-40 rounded-full cursor-pointer hover:scale-105 transition-all duration-300"
                />
              </div>
            </div>
          </div>

          
        </div>

        {/* --- Bottom Copyright Row --- */}
        <div className="w-[98%] text-lg text-gray-300 flex flex-col md:flex-row justify-between items-center text-sm py-5 px-6 rounded-b-[3rem]">
          <p>© 2025 Robor. All Rights Reserved.</p>
          <div className="flex gap-4">
            <p className="hover:text-[#6D30FB] cursor-pointer">Privacy Policy</p>
            <p className="hover:text-[#6D30FB] cursor-pointer">Terms of Services</p>
            <p className="hover:text-[#6D30FB] cursor-pointer">Disclaimer</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
