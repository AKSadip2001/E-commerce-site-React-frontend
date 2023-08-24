import React from 'react'
import {Link} from "react-router-dom"

import "./navbar.css";

function Navbar() {
  return (
    <div className='navbar'>
      <div className='links'>
          <Link to="/home">MyShop</Link>
      </div>

      <div className='links'>
          <Link to="/home" className='active' id='home'>Home</Link>
          <Link to="/cart" className='' id='cart'>Cart</Link>
      </div>
    </div>
  )
}

export default Navbar
