import React from "react";
import { Link, useParams } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import { blogCards } from '../../constants/index'

function Hero() {
  const { slug } = useParams();
  const blog = blogCards.find((b) => b.slug === slug);

  return (
    <section
      className="text-white w-full h-[20rem] sm:h-[30rem] bg-cover bg-center bg-no-repeat flex justify-center items-center flex-col"
      style={{ backgroundImage: "url('/hero_bg.jpg')" }}
    >
      <h1 className="font-bold text-2xl sm:text-3xl text-center px-4 sm:px-0">
        {blog ? blog.title : "Blog Not Found"}
      </h1>

      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-4 sm:mt-8 text-lg sm:text-xl items-center justify-center text-center">
        <Link to="/">
          <h5 className="hover:text-[#6D30FB]">Home</h5>
        </Link>
        <FaArrowRightLong size={20} className="sm:mt-0 mt-1" />
        <h5 className="text-[#6D30FB]">Blogs</h5>
        <FaArrowRightLong size={20} className="sm:mt-0 mt-1" />
        <h5 className="text-[#6D30FB]">{blog ? blog.title : "Not Found"}</h5>
      </div>
    </section>
  );
}

export default Hero;
