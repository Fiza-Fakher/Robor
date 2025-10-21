import React from "react";
import  Hero  from "../../components/home/Hero"
import WhoWeAre from "../../components/home/WhoWeAre"
import Services from "../../components/home/Services"
import WhyChoseUs from "../../components/home/WhyChoseUs"
import Case from "../../components/home/Case"
import Technology from "../../components/home/Technology"
import FAQ from "../../components/FAQ"
import Pricing from "../../components/home/Pricing"
import Blog from "../../components/home/Blog"

function Home() {
  return (
    <>
    <div className="overflow-x-hidden w-full"> 
      <Hero />
      <WhoWeAre />
      <Services />
      <WhyChoseUs />
      <Case />
      <Technology />
      <FAQ />
      <Pricing />
      <Blog />
    </div>
    </>
  );
}

export default Home;
