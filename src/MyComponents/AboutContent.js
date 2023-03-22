import React from 'react'
import "./AboutContent.css"
import {Link} from "react-router-dom" ; 
import ReactImg from "../assests/ract0.png"
import ReactImg2 from "../assests/r.jpg"
const AboutContent = () => {
  return (
    <div className='about'>
      <div className="left">
        <h1>Who Am I?</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eligendi impedit ipsam quidem nisi fugiat, necessitatibus vel quos deleniti enim.</p>
        <Link to="/contact"className="btn ">Contact</Link>
      </div>
      <div className="right">
        <div className="img-container">
            <div className="img-stack top">
                <img src={ReactImg} alt="" />
            </div>
            <div className="img-stack bottom">
                <img src={ReactImg2} alt="" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default AboutContent
