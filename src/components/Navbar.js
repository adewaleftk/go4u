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
        <div>
            <nav>
                <div className="logo">
                    <a href="/">
                    <img src={require('../images/GO4U-LOGO.png')} alt="Logo" />
                    </a>
                </div>
                <ul className="nav-links">
                    <li><a href="/">Home</a></li>
                    <li><a href="/">Access</a></li>
                    <li><a href="/">Earn</a></li>
                    <li><a href="/">Contact</a></li>
                </ul>
                <div className="burger">
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>
            </nav>
        </div>
  );
}

export default Navbar;