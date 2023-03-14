import React from 'react'
// import { useRef } from 'react';
// import { FaBars, FaTimes } from "react-icons/fa"
import "../styles/navbar.css";

function Navbar() {
    // const navRef = useRef();

    // const showNavbar = () => {
    //     navRef.current.classList.toggle("responsive_nav");
    // }
  return (
    // <header>
    //     <a href="/">
    //         <img src={require('../images/GO4U-LOGO.png')} alt="Logo" />
    //     </a>
    //     <nav ref={navRef}>
    //         <a href='/#' className="navbar-link">Home</a>
    //         <a href='/#' className="navbar-link">Early Access</a>
    //         <a href='/#' className="navbar-link">Earn</a>
    //         <a href='/#' className="navbar-link">Contact</a>
    //         <button className="nav-btn nav-close-btn" onClick={showNavbar}>
    //             <FaTimes/>
    //         </button>
    //     </nav>
    //     <button className="nav-btn nav-close-btn" onClick={showNavbar}>
    //         <FaBars/>
    //     </button>
    // </header>
    <nav className="navbar">
        <div className="nav-container">
      <div className="logo">
        <a href="/">
        <img src={require('../images/GO4U-LOGO.png')} alt="Logo" />
        </a>
      </div>
      <div className="links">
        <a href="/">Home</a>
        <a href="/">Access</a>
        <a href="/">Earn</a>
        <a href="/">Contact</a>
      </div>
      </div>
    </nav>
  );
}

export default Navbar;