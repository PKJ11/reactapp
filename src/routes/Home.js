import React from 'react'
import Navbar from '../MyComponents/Navbar' ; 
import HeroImg from '../MyComponents/HeroImg';
import Footer from '../MyComponents/Footer';
import Work from '../MyComponents/Work';
const home = () => {
  return (
    <div>
    <Navbar/>
    <HeroImg/>
    <Work/>
    <Footer/>
    </div>
  )
}

export default home
