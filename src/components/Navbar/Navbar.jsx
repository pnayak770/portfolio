import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import logovedio from "../../assets/logo.mp4";
import { data } from "../../assets/data.js";


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  console.log(menuOpen)

  return (
    <div className="navbar">
      {/* <img src={logo} alt="" width="30px" /> */}
      <video autoPlay muted playsInline width="100" height="100">
        <source src={logovedio} type="video/mp4" />
      </video>
      
      <ul className={menuOpen?"open":"close"}>
        <li>
          <NavLink to="/" onClick={()=>setMenuOpen(false)}>Home</NavLink>
        </li>
        {/* <li><NavLink to="/">About</NavLink></li> */}
        <li>
          <NavLink to="/skills" onClick={()=>setMenuOpen(false)}>Skill</NavLink>
        </li>
        <li>
          <NavLink to="/project" onClick={()=>setMenuOpen(false)}>Project</NavLink>
        </li>
        <li>
          <NavLink to="contact" onClick={()=>setMenuOpen(false)}>Contact</NavLink>
        </li>
      </ul>
      <a href={data.cv} download>
        <button>Resume</button>
       
      </a>
      <span className="material-symbols-outlined" onClick={()=>{
        setMenuOpen(!menuOpen) 
      }}> {menuOpen ? "close" : "menu"}</span>
    </div>
  );
};

export default Navbar;
