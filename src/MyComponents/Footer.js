import React from 'react'
import "./Footer.css"
import { FaFacebook, FaHome, FaLink, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from 'react-icons/fa'
const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-container">
        <div className="left">
            <div className="location">
                <FaHome size={20} style={{color:"#fff",marginright:"2rem"}}/>
                <div>
                    <p>H.No 26 Harbans Lay out Issasni</p>
                    <p>Nagpur, Maharastra.</p>
                </div>
            </div>
            <div className="phone">
                <h4>
                <FaPhone size={20} style={{color:"#fff",marginright:"2rem"}}/> +91-77556916144
                </h4>
            </div>
            <div className="mail">
                <h4>
                <FaMailBulk size={20} style={{color:"#fff",marginright:"2rem"}}/> pratik46@gmail.com
                </h4>
            </div>
        </div>
        <div className="right">
            <h4>About The Company</h4>
            <p>This is Pratik kumar jha. <br /> I enjoy discussing new Project and design challenges .</p>
            <div className="socials">
            <FaFacebook size={20} style={{color:"#fff",marginRight:"1rem"}}/>
            <FaTwitter size={20} style={{color:"#fff",marginRight:"1rem"}}/>
            <FaLinkedin size={20} style={{color:"#fff",marginRight:"1rem"}}/>
            </div>
        </div>
      </div>

    </div>
  )
}

export default Footer
