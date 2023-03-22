import React from 'react'
import {Link} from "react-router-dom" ;
import "./Pricing.css"
const Pricing = () => {
    return (
        <div className='pricing'>
            <div className='card-container'>
               <div className="card">
                  <h3>-Basic-</h3>
                  <span className='bars'></span>
                  <p className='btc'>$ 100</p>
                  <p>- 3 Pages - </p>
                  <p>- Featured -</p>
                  <p>- Responsive Design</p>
                  <Link to="/contact" className="btn">
                    Purchase Now
                  </Link>
               </div>

               <div className="card">
                  <h3>- Premium -</h3>
                  <span className='bars'></span>
                  <p className='btc'>$ 400</p>
                  <p>- 3 Pages - </p>
                  <p>- Featured -</p>
                  <p>- Responsive Design</p>

                  <Link to="/contact" className="btn">
                    Purchase Now
                  </Link>
               </div>

               <div className="card">
                  <h3>-Business-</h3>
                  <span className='bars'></span>
                  <p className='btc'>$ 800</p>
                  <p>- 3 Pages - </p>
                  <p>- Featured -</p>
                  <p>- Responsive Design</p>
                  <Link to="/contact" className="btn">
                    Purchase Now
                  </Link>
               </div>
            </div>

        </div>
    )
}

export default Pricing
