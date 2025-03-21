import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
import logo from '../../assets/PNlogo.png'



const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={logo} alt="" width="30px" />
        <ul>

       <li><NavLink>Home</NavLink></li>
       <li><NavLink>About</NavLink></li>
       <li><NavLink>Skill</NavLink></li>
       <li><NavLink>Project</NavLink></li>
       <li><NavLink>Contact</NavLink></li>
        </ul>
        <button>Resume</button>

    </div>
  )
}

export default Navbar