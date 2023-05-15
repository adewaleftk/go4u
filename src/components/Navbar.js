import React, { useState } from "react";
import "../styles/navbar.css";


function Navbar () {

  const [active, setActive] = useState('nav_menu');
  const [toggleIcon, setToggleIcon] = useState("nav_toggler");
  const navToggle = () => {
    active === 'nav_menu' ? setActive('nav_menu nav_active') : setActive('nav_menu');

    toggleIcon === 'nav_toggler' ? setToggleIcon('nav_toggler toggle') : setToggleIcon('nav_toggler');
  }

  return (
    <nav className="navbar">
      <div className="mobileLogos">
        <div  className="nav-logo">
          <a href="/" >
            <img src={require('../images/GO4U-LOGO.png')} alt="Logo" />
          </a>
      </div>
      <div className="go4u-header">
          <a href="/">
            <img src={require('../images/GO4U_mobile.png')} alt="Navbar Logo"/>
          </a>  
      </div>
      </div>
      <div onClick={navToggle} className={toggleIcon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
      <ul className={active}>
        <li className="nav-item">
          <a href="/" className="nav-link" >
            Home
          </a>
        </li>
        <li className="nav-item">
          <a href="/about" className="nav-link" >
            Early Access
          </a>
        </li>
        <li className="nav-item">
          <a href="/shop" className="nav-link" >
            Earn
          </a>
        </li>
        <li className="nav-item">
          <a href="/contact" className="nav-link" >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar

