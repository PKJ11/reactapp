import React from 'react'
import "./Form.css"
const FormC = () => {
  return (
    <div className='form'>
      <label >You Name </label>
      <input type="text" />
      <label >Email</label>
      <input type="email" />
      <label >Subject </label>
      <input type="text" />
      <label >Message</label>
      <textarea rows="6" placeholder='Type your message here' />
      <button className='btn'>Submit</button>
    </div>
  )
}

export default FormC
