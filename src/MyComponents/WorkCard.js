import React from 'react'
import "./WorkCard.css"
import { NavLink } from 'react-router-dom'

const WorkCard = (props) => {
  return (
    <div className="project-card">
            <img src={props.imgsrc} alt="" />
            <h2 className='project-title'>{props.title}</h2>
            <div className="pro-details">
                <p>{props.text}</p>

                <div className="pro-btns">
                    <NavLink to="" className="btn">View</NavLink>
                    <NavLink to="" className="btn">Sources</NavLink>
                </div>
            </div>
        </div>
  )
}

export default WorkCard
