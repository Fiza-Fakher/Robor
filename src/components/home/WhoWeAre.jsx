import React from "react";
import FastMarquee from "react-fast-marquee";
import { LuSparkle } from "react-icons/lu";
import { whoCards,whoContent } from "../../constants";

function WhoWeAre() {
  

  
  return (
    <>
      <div className="pb-25 overflow-hidden">
        <section className="pt-20 pb-12">
          <div className="flex justify-start items-center gap-4 sm:gap-6 ml-2 sm:ml-4 flex-wrap">
            <h5 className="uppercase text-lg sm:text-xl font-semibold text-[#6D30FB]">
              Who we are?
            </h5>
            <div className="w-20 sm:w-30 h-[1px] bg-black"></div>
          </div>

          <h2 className="flex flex-col text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold pt-6 sm:pt-8 ml-3 sm:ml-6 leading-snug">
            <span>At our AI startup, we follow a streamlined</span>
            <span className="pt-3 sm:pt-4">
              approach to ensure the best outcomes for
            </span>
            <span className="pt-3 sm:pt-4"> your business.</span>
          </h2>

          <div className="overflow-hidden">
            <h1 className="text-[100px] sm:text-[200px] md:text-[260px] lg:text-[320px] font-bold pt-10 sm:pt-12 flex items-center text-[#F8F8F8]">
              <span>Rob</span>
              <img
                src="/homepage/about.jpg"
                alt=""
                className="w-24 sm:w-44 md:w-56 lg:w-auto object-cover"
              />
              <span>or</span>
            </h1>
          </div>

          <div className="flex justify-center items-center gap-4 flex-wrap px-4 sm:px-0">
            {whoCards.map((items, index) => (
              <div key={index} className="max-w-full sm:max-w-[400px] lg:max-w-none">
                <img
                  src={items.image}
                  alt=""
                  className="rounded-3xl w-full sm:w-[400px] lg:w-180 transition-transform hover:scale-105 cursor-pointer duration-300"
                />
                <img src={items.icon} alt="" className="pt-4 sm:pt-6" />
                <h2 className="text-xl sm:text-2xl pt-4 font-bold">{items.title}</h2>
                <p className="pt-3 sm:pt-4 text-base sm:text-lg text-gray-600 w-full sm:w-130">
                  {items.des}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-[#F4F1FC] text-black flex justify-center items-center w-full h-20 sm:h-24 lg:h-30 mt-10 sm:mt-12 text-lg sm:text-2xl capitalize font-bold">
          <FastMarquee>
            {whoContent.map((items, index) => (
              <div key={index} className="flex justify-center items-center ml-6">
                <h1>{items}</h1>
                <LuSparkle className="ml-2 text-[#6D30FB]" />
              </div>
            ))}
          </FastMarquee>
        </section>
      </div>
    </>
  );
}

export default WhoWeAre;
