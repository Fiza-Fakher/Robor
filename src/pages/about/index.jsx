import React from 'react'
import FAQ from '../../components/FAQ'
import Hero from '../../components/about/Hero'
import AboutUs from '../../components/about/AboutUs'
import Process from '../../components/about/Process'
import Blog from '../../components/home/Blog'
import Team from '../../components/about/Team'

function About() {
  return (
    <>
    <div className="overflow-x-hidden w-full">
    <Hero/> 
    <AboutUs/>
    <Process/>
    <Team/>
    <FAQ/>
    <Blog/>
     </div>
    </>
  )
}

export default About