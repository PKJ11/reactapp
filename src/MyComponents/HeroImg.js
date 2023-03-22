import React from 'react'
import './HeroImg.css'
import "../App.css"
import IntroImg from "../assests/portfolio1.jpg"
import { Link } from 'react-router-dom'
const HeroImg = () => {
  return (
    <div className='hero'>
      <div className="mask">
        <img className="intro-img" src={IntroImg} />
      </div>
      <div className="content">
        <p>Hi , I'm a Freelancer </p>
        <h1>React Developer</h1>
        <div className='btn-container'>
          <Link to="/project" >
            <div className="btn">
              Projects
            </div>
          </Link>
          <Link to="/contact" >
            <div className="btn btn-light">
              Contact
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HeroImg
