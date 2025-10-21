import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { MdPersonOutline } from "react-icons/md";
import { CiCalendar } from "react-icons/ci";
import { blogCards } from '../../constants/index';
import { Link } from "react-router-dom";

function Blog() {
  return (
    <>
      <section className="pt-12 sm:pt-30 pb-12 sm:pb-30">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pt-6 pl-4 sm:pl-4">
          <h1 className="font-bold text-3xl sm:text-6xl mb-4 sm:mb-0">
            Our Latest News & Blog
          </h1>
          <button className="h-12 sm:h-14 w-full sm:w-43 mr-0 sm:mr-8 flex justify-center items-center rounded-full gap-3 text-lg border-2 sm:border-3 border-gray-400">
            View All Post <FaArrowRight />
          </button>
        </div>

        <div className="flex flex-wrap justify-center gap-6 mt-8 sm:mt-12">
          {blogCards.map((blog, index) => (
            <div key={index} className="mt-8 w-full sm:w-auto">
              <Link to={`/blog/${blog.slug}`}>
                <img
                  src={blog.img}
                  alt=""
                  className="rounded-3xl transition-transform duration-300 hover:scale-105 cursor-pointer w-full"
                />
              </Link>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 pt-6 text-gray-500">
                <h4 className="flex items-center gap-2 text-lg sm:text-xl hover:text-[#6D30FB] cursor-pointer">
                  <MdPersonOutline size={24} className="text-[#6D30FB]" />
                  {blog.author}
                </h4>

                <h4 className="flex items-center gap-2 text-lg sm:text-xl hover:text-[#6D30FB] cursor-pointer">
                  <CiCalendar size={24} className="text-[#6D30FB]" />
                  {blog.date}
                </h4>
              </div>

              <div>
                <Link to={`/blog/${blog.slug}`}>
                  <h2 className="text-xl sm:text-2xl font-bold w-full sm:w-85 pt-6 cursor-pointer hover:text-[#6D30FB]">
                    {blog.title}
                  </h2>
                </Link>
              </div>

              <div className="cursor-pointer group flex flex-col pt-6">
                <Link to={`/blog/${blog.slug}`}>
                  <h5 className="flex items-center gap-2 text-lg font-semibold group-hover:text-[#6D30FB]">
                    Read More <FaArrowRight size={20} className="mt-1" />
                  </h5>
                </Link>
                <div className="h-[1px] mt-1 w-20 sm:w-28 bg-black transition-all duration-300 group-hover:w-22 group-hover:bg-[#6D30FB]"></div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Blog;
