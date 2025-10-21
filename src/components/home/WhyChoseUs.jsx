import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { whyPoints } from "../../constants";


function WhyChoseUs() {
 

  const text = "AI AND AUTOMATION INTEGRATION · ROBOT · ";
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  return (
    <section className="bg-black text-white py-20 px-6 sm:px-8 md:px-10">
      
      <div className="flex flex-col sm:flex-row gap-4 items-center mb-6">
        <h5 className="uppercase text-[#6D30FB] text-center sm:text-left">Why choose us</h5>
        <div className="h-[1px] w-10 bg-white hidden sm:block"></div>
      </div>

      <h2 className="text-4xl font-bold flex flex-col mb-12 text-center sm:text-left">
        <span>Our goal is to build a world where</span>
        <span>technology serves humanity.</span>
      </h2>

      
      <div className="flex flex-col lg:flex-row items-center justify-center gap-10">
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src="/homepage/why-us.png"
            alt="Why Us"
            className="rounded-4xl w-[90%] max-w-[900px]"
          />
        </div>

        <div ref={ref} className="bg-black text-white rounded-xl text-center w-full lg:w-1/2 flex flex-col justify-center items-center mt-10 lg:mt-0">
          <div className="flex justify-center items-start leading-none">
            <h1 className="text-[180px] sm:text-[200px] md:text-[240px] font-bold">
              {inView ? <CountUp end={24} duration={2} /> : 0}
            </h1>
            <span className="text-[100px] sm:text-[120px] md:text-[150px] font-bold mt-16 ml-6">+</span>
          </div>
          <p className="text-4xl sm:text-5xl font-bold mt-10 sm:mt-20 text-right flex flex-col items-end">
            <span>Years Of</span> <span>Experience</span>
          </p>
        </div>
      </div>

      
      <div className="flex flex-col items-start justify-center gap-20 mt-20 sm:px-4 md:px-10">
        
        <div className="flex flex-col gap-10">
          {whyPoints.slice(0, 2).map((item, index) => (
            <div key={index} className="flex flex-col sm:flex-row items-start gap-6">
              <h3 className="text-4xl font-bold italic text-[#2E2E2E] leading-none">
                {item.numbering}
              </h3>
              <div className="flex flex-col">
                <h2 className="text-3xl font-bold text-white">{item.title}</h2>
                <p className="text-lg pt-4 text-[#B3B3B3] leading-relaxed max-w-lg">
                  {item.des}
                </p>
              </div>
            </div>
          ))}
        </div>


        <div className="flex flex-col lg:flex-row items-center gap-20">
          
          <div className="relative w-56 h-56 sm:w-64 sm:h-64">
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background:
                  "radial-gradient(circle, transparent 60%, #B3B3B3 60%, #B3B3B3 100%)",
              }}
            />
            <svg
              className="absolute inset-0 w-full h-full animate-spin"
              style={{ animationDuration: "20s", animationTimingFunction: "linear" }}
              viewBox="0 0 200 200"
            >
              <defs>
                <path
                  id="circlePath"
                  d="M 100, 100 m -80, 0 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0"
                />
              </defs>
              <text className="fill-white text-[10px] font-medium tracking-widest uppercase">
                <textPath href="#circlePath" startOffset="0%">
                  {text.repeat(2)}
                </textPath>
              </text>
            </svg>

            <div className="absolute inset-[20%] rounded-full bg-black flex items-center justify-center">
              <svg width="50" height="50" viewBox="0 0 60 60" fill="none" className="text-white">
                <path
                  d="M15 30 L45 30 M45 30 L35 20 M45 30 L35 40"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          {/* Bottom 2 Cards */}
          <div className="flex flex-col gap-10 mt-10 lg:mt-0">
            {whyPoints.slice(2, 4).map((item, index) => (
              <div key={index} className="flex flex-col sm:flex-row items-start gap-6">
                <h3 className="text-4xl font-bold italic text-[#2E2E2E] leading-none">
                  {item.numbering}
                </h3>
                <div className="flex flex-col">
                  <h2 className="text-3xl font-bold text-white">{item.title}</h2>
                  <p className="text-lg pt-4 text-[#B3B3B3] leading-relaxed max-w-lg">
                    {item.des}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChoseUs;
