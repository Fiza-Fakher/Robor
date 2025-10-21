import React from "react";

function Process() {
  return (
    <section className="bg-[#F5F5F5] py-16 md:py-20 px-6 md:px-20 flex flex-col md:flex-row justify-between items-center gap-12 rounded-3xl mb-0 pb-0 overflow-hidden">
      
      {/* LEFT CONTENT */}
      <div className="md:w-1/2 w-full">
        <div className="flex items-center gap-4 mb-4">
          <h5 className="uppercase text-sm font-semibold text-[#6D30FB] tracking-wider">
            Work Process
          </h5>
          <div className="w-16 h-[1px] bg-black"></div>
        </div>

        <h1 className="text-5xl md:text-6xl font-bold text-[#1A1A1A] leading-tight mb-6">
          How Does it Work?
        </h1>

        <p className="text-gray-500 mb-10 leading-relaxed text-lg">
          Choosing us means partnering with a forward-thinking team that’s invested
          in your success as you are. Together, we’ll unlock the full potential
          of AI to transform your business.
        </p>

        {/* PROCESS STEPS */}
        <div className="space-y-8 relative border-l-2 border-[#6D30FB] pl-10">
          
          <div className="relative">
            <div className="absolute -left-12 -top-1 w-10 h-10 rounded-full border-2 border-[#6D30FB] bg-white flex justify-center items-center font-semibold text-[#6D30FB]">
              1
            </div>
            <h3 className="font-bold text-xl mb-2">Discovery and Strategy</h3>
            <p className="text-gray-600">
              We start with in-depth discussions to understand your challenges,
              goals, and business processes.
            </p>
          </div>

          <div className="relative">
            <div className="absolute -left-12 -top-1 w-10 h-10 rounded-full border-2 border-[#6D30FB] bg-white flex justify-center items-center font-semibold text-[#6D30FB]">
              2
            </div>
            <h3 className="font-bold text-xl mb-2">Development & Implementation</h3>
            <p className="text-gray-600">
              We collect, clean, and analyze data to develop AI models tailored
              to your use case.
            </p>
          </div>

          <div className="relative">
            <div className="absolute -left-12 -top-1 w-10 h-10 rounded-full border-2 border-[#6D30FB] bg-white flex justify-center items-center font-semibold text-[#6D30FB]">
              3
            </div>
            <h3 className="font-bold text-xl mb-2">Optimization and Support</h3>
            <p className="text-gray-600">
              We continuously monitor the AI solution to ensure it delivers
              consistent and accurate results.
            </p>
          </div>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="md:w-1/2 w-full flex justify-center">
        <img
          src="/about/process_1.jpg"
          alt="AI Work Process"
          className="rounded-3xl shadow-lg w-full md:w-[90%] object-cover"
        />
      </div>
    </section>
  );
}

export default Process;
