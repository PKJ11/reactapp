import React from 'react'
import './HeroImg2.css'
import "../App.css"
import IntroImg from "../assests/portfolio2.jpg"

const HeroImg = (props) => {
  return (
    <div className='hero2'>
      <div className="mask2">
        <img className="intro-img2 " src={IntroImg}/>
      </div>
      <div className="content">
        
        <h1>{props.title}</h1>
        <p>{props.para} </p>
      </div>
    </div>
  )
}

export default HeroImg