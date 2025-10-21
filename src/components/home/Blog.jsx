import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { MdPersonOutline } from "react-icons/md";
import { CiCalendar } from "react-icons/ci";
import { Link } from "react-router-dom";
import { homeBlogs } from "../../constants";

function Blog() {
 

  return (
    <>
      <section className="pt-30 pb-30">
        <div className="flex justify-start items-center gap-6 ml-4">
          <h5 className="uppercase text-xl font-semibold text-[#6D30FB]">
            Who we are?
          </h5>
          <div className="w-30 h-[1px] bg-black"></div>
        </div>
        <div className="flex justify-between items-center pt-6 pl-4 ">
          <h1 className="font-bold text-6xl">Our Latest News & Blog</h1>
          <Link to='/blog'><button className="h-14 w-43 mr-8 flex justify-center items-center rounded-full gap-3 text-lg border-3 border-gray-400">
            View All Post <FaArrowRight />
          </button></Link>
        </div>
        <div className="flex flex-wrap justify-center gap-6 mt-8">
          {homeBlogs.map((blog, index) => (
            <div key={index}>
              <img src={blog.img} alt="" className="rounded-3xl transform-transition hover:scale-105 cursor-pointer duration-300" />
              <div className="flex items-center gap-2 pt-6">
                <h4 className="flex items-center gap-2 text-xl text-gray-500 hover:text-[#6D30FB] cursor-pointer">
                  <MdPersonOutline size={24} className="text-[#6D30FB]" />
                  {blog.author}
                </h4>

                <h4 className="flex items-center gap-2 text-xl text-gray-500 hover:text-[#6D30FB] cursor-pointer">
                  <CiCalendar size={24} className="text-[#6D30FB]" />
                  {blog.date}
                </h4>
              </div>
              <h2 className="text-2xl font-bold w-85 pt-6">{blog.title}</h2>
              <div className="cursor-pointer group flex flex-col pt-6">
                <Link to='/blog'><h5 className=" gap-2 text-lg font-semibold flex group-hover:text-[#6D30FB]">
                  Read More <FaArrowRight size={20} className="mt-1" />
                </h5></Link>
                <div className="h-[1px] mt-1 w-28 bg-black transition-all duration-300 group-hover:w-22 group-hover:bg-[#6D30FB]"></div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Blog;
