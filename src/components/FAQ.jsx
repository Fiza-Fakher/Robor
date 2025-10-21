import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { faq } from "../constants";

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <section className="bg-white mt-24 pb-20 px-4 sm:px-6 md:px-12 lg:pt-30">
        <div className="flex flex-col md:flex-row items-center justify-between flex-wrap">
        
          <div className="flex flex-col w-full md:w-1/2">
            <div className="flex justify-start items-center gap-4 sm:gap-6 mt-6">
              <h5 className="uppercase text-[#6D30FB] font-semibold text-lg sm:text-xl md:text-2xl">
                FAQ'S
              </h5>
              <div className="w-16 sm:w-20 h-[1px] bg-black"></div>
            </div>
            <h1 className="flex flex-col font-bold mt-8 md:mt-12 text-4xl sm:text-5xl md:text-6xl">
              <span>Frequently asked </span>
              <span className="pt-2 md:pt-4">questions</span>
            </h1>
          </div>

          
          <div className="w-full md:w-1/2 flex justify-center md:justify-end items-center mt-8 md:mt-0 pr-0 md:pr-6">
            <h1 className="flex items-center text-[#F8F8F8] font-bold text-[150px] sm:text-[200px] md:text-[280px]">
              <span>R</span>
              <img
                src="/homepage/about.jpg"
                alt=""
                className="w-16 h-16 sm:w-28 sm:h-28 md:w-40 md:h-40 object-cover mx-2"
              />
              <span>b</span>
            </h1>
          </div>
        </div>

        
        <div className="mt-6 flex flex-col justify-center items-center w-full">
          {faq.map((item, index) => (
            <div
              key={index}
              className="flex flex-col p-4 sm:p-6 items-start justify-center bg-[#F5F5F5] w-full sm:w-[95%] md:w-[98%] rounded-xl mt-4 sm:mt-6 cursor-pointer transition-all lg:w-full"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center w-full">
                <h1 className="text-lg sm:text-xl md:text-xl font-semibold">
                  {item.question}
                </h1>
                {openIndex === index ? (
                  <FaMinus className="text-[#6D30FB]" />
                ) : (
                  <FaPlus className="text-[#6D30FB]" />
                )}
              </div>

              {openIndex === index && (
                <p className="text-gray-400 mt-4 text-sm sm:text-base md:text-lg w-full sm:w-[97%]">
                  {item.ans}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default FAQ;
