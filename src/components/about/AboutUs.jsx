import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";

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

  const cards = [
    {
      icon: "/homepage/about_feature_icon1.svg",
      title: "100% Customers Satisfaction",
      des: "We bring a team of experienced AI specialists, data scientists, and industry experts committed to pushing boundaries.",
    },
    {
      icon: "/homepage/about_feature_icon2.svg",
      title: "Quality Assurance Guarantee",
      des: "We bring a team of experienced AI specialists, data scientists, and industry experts committed to pushing boundaries.",
    },
  ];

  return (
    <>
      {/* ---------- Main About Section ---------- */}
      <section className="flex flex-col lg:flex-row justify-between items-start gap-12 pt-10 px-6">
        
        {/* Left Images */}
        <div className="lg:w-1/2 w-full flex flex-col items-center lg:items-start">
          <img src="/about/about_1.jpg" alt="" className="rounded-3xl w-full" />
          <div className="flex justify-center lg:justify-start items-center gap-10 ml-0 lg:ml-6 flex-wrap">
            <img src="/homepage/about.jpg" alt="" className="h-50 mt-10" />
            <img
              src="/about/about_2.jpg"
              alt=""
              className="border-white border-[10px] rounded-3xl -mt-20 lg:-mt-30 lg:ml-30"
            />
          </div>
        </div>

        {/* Right Text */}
        <div className="lg:w-1/2 w-full">
          <div className="flex justify-start items-center gap-6 ml-0 lg:ml-4 pt-4">
            <h5 className="uppercase text-xl font-semibold text-[#6D30FB]">
              Who we are?
            </h5>
            <div className="w-30 h-[1px] bg-black"></div>
          </div>

          <h1 className="font-bold flex flex-col text-5xl md:text-6xl pt-2 pl-0 lg:pl-4 text-center lg:text-left">
            <span>Leading the Future of Business Innovation</span>
            <span>with Tailor-Made AI Solutions</span>
          </h1>

          <h6 className="text-gray-400 flex flex-col text-lg pt-4 pl-0 lg:pl-4 pb-2 leading-relaxed text-center lg:text-left">
            <span>
              We begin by understanding your business goals, challenges, and
              opportunities for AI integration. Our experts assess your current
              systems and identify areas where AI can bring the most impact.
            </span>
            <span className="mt-4">
              Our team designs a tailor-made AI solution based on your specific
              requirements. We develop machine learning models, build algorithms,
              and create prototypes to ensure the solution aligns with your
              business objectives.
            </span>
          </h6>

          <div className="flex justify-center lg:justify-around items-center gap-10 pt-6 pb-10 flex-wrap">
            {cards.map((items, index) => (
              <div key={index} className="text-center w-64">
                <img src={items.icon} alt="" className="pt-6 mx-auto" />
                <h2 className="text-2xl pt-4 font-bold">{items.title}</h2>
                <p className="pt-4 text-lg text-gray-400">{items.des}</p>
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

      {/* ---------- Counters Section ---------- */}
      <section
        ref={ref}
        className="flex justify-center items-center gap-8 pt-34 flex-wrap pb-20"
      >
        {icons.map((item, index) => (
          <div
            className="w-63 h-63 border border-gray-400 rounded-full flex flex-col justify-center items-center text-center"
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
