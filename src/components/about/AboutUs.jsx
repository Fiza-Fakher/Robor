import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { aboutUsCards } from "../../constants";

function AboutUs() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  const icons = [
    { title: "Project Completed", number: 68, suffix: "M" },
    { title: "Creative Minds", number: 16, suffix: "K" },
    { title: "Happy Customers", number: 62, suffix: "M" },
    { title: "Innovative Projects", number: 7, suffix: "K" },
    { title: "Collaborative Team", number: 38, suffix: "M" },
  ];

 

  return (
    <>
      {/* ---------- Main About Section ---------- */}
      <section className="flex flex-col lg:flex-col justify-between items-start gap-12 pt-10 px-6 lg:space-y-0 space-y-10">

        
        {/* Left Images */}
        <div className="lg:w-1/2 w-full flex flex-col items-center lg:items-start">
          <img src="/about/about_1.jpg" alt="" className="rounded-3xl w-full" />
          <div className="flex justify-center lg:justify-start items-center gap-10 ml-0 lg:ml-6 flex-wrap">
            <img src="/homepage/about.jpg" alt="" className="h-50 mt-10" />
            <img
              src="/about/about_2.jpg"
              alt=""
              className="border-white border-[10px] rounded-3xl -mt-20 lg:-mt-110 lg:ml-90"
            />
          </div>
        </div>

        {/* Right Text */}
        <div className=" w-full">
          <div className="flex justify-start items-center gap-6 ml-0 lg:ml-4 pt-4">
            <h5 className="uppercase text-xl font-semibold text-[#6D30FB]">
              Who we are?
            </h5>
            <div className="w-30 h-[1px] bg-black"></div>
          </div>

          <h1 className="font-bold w-full text-5xl md:text-6xl leading-tight text-center lg:text-left pt-2 px-4 lg:px-0">
  Leading the Future of Business Innovation with Tailor-Made AI Solutions
</h1>

          <h6 className="text-gray-400 flex flex-col text-lg pt-4 pl-0 lg:pl-4 pb-2 leading-relaxed text-center lg:text-left">
            <span className="mt-4">
              We begin by understanding your business goals, challenges, and
              opportunities for AI integration. Our experts assess your current
              systems and identify areas where AI can bring the most impact.
              Our team designs a tailor-made AI solution based on your specific
              requirements. We develop machine learning models, build algorithms,
              and create prototypes to ensure the solution aligns with your
              business objectives.
            </span>
          </h6>

         <div className="flex justify-center items-start gap-10 lg:gap-120 pt-6 pb-10 flex-wrap px-4">
  {aboutUsCards.map((items, index) => (
    <div key={index} className="flex flex-col items-center text-center w-full sm:w-80 lg:w-96">
      <img src={items.icon} alt={items.title} className="w-16 h-16 mb-4" />
      <h2 className="text-2xl font-bold mb-3">{items.title}</h2>
      <p className="text-lg text-gray-600 leading-relaxed">
        {items.des}
      </p>
    </div>
  ))}
</div>
          <div className="flex justify-center lg:justify-start">
            <button className="flex justify-center items-center gap-2 h-16 w-50 border bg-[#4826A4] text-white rounded-full mt-4 lg:ml-6">
              More About Us <FaArrowRightLong />
            </button>
          </div>
        </div>
      </section>

      
      <section
        ref={ref}
        className="flex justify-center items-center gap-8 pt-34 flex-wrap pb-20"
      >
        {icons.map((item, index) => (
          <div
            className="w-53 h-53 border border-gray-400 rounded-full flex flex-col justify-center items-center text-center"
            key={index}
          >
            <h3 className="font-semibold text-4xl text-[#0C2137] flex items-center">
              {inView && <CountUp end={item.number} duration={2.5} />}
              <span>{item.suffix}</span>
            </h3>
            <p className="text-gray-400 text-lg pt-4">{item.title}</p>
          </div>
        ))}
      </section>
    </>
  );
}

export default AboutUs;
