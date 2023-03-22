import React from 'react'
import Navbar from '../MyComponents/Navbar' ;
import Footer from '../MyComponents/Footer';
import HeroImg2 from '../MyComponents/HeroImg2';
import Pricing from '../MyComponents/Pricing';
import Work from '../MyComponents/Work';
const project = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg2 title="PROJECTS" para="These are my some of the Projects."/>
      <Work/>
      <Pricing/>
      <Footer/>
    </div>
  )
}

export default project
