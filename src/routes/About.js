import React from 'react'
import Navbar from '../MyComponents/Navbar' ;
import Footer from '../MyComponents/Footer';
import HeroImg2 from '../MyComponents/HeroImg2';
import AboutContent from '../MyComponents/AboutContent';

const About = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg2 title="ABOUT US" para="I am a friendly frontend developer." />
      <AboutContent/>
      <Footer/>
    </div>
  )
}

export default About
