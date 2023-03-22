import React from 'react'
import Navbar from '../MyComponents/Navbar' ;
import Footer from '../MyComponents/Footer';
import HeroImg2 from '../MyComponents/HeroImg2';
import FormC from "../MyComponents/FormC"

const Contact = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg2 title="Contact" para="Here Are the ways you can approch me for your work."/>
      <FormC/>
      <Footer/>
    </div>
  )
}

export default Contact
