import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../images/logo.ico'
function Navbar() {
  return (
    <div className='nav'>
        <img src={logo} alt="" />
        <ul id='list'>
            <li>
                <Link to='/' id='link'>Home</Link>
            </li>
            <li>
                <Link to='/About' id='link'>About</Link>
            </li>
            <li>
                <Link to="/Courses" id='link'>Courses</Link>
            </li>
            <li>
                <Link to="/contact" id='link'>Contact us</Link>
            </li>
        </ul>
    </div>
  )
}

export default Navbar
