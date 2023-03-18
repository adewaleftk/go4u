import React from 'react';
import "../styles/navbar.css";

function Navbar() {
  
  return (
    
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