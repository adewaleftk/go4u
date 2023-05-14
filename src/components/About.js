import React from 'react';
import "../styles/about.css";

function About() {
  return (
    <div className="about">
        <div className="aboutlogo">
            <div  className="aboutLogo">
            <a href="/" >
                <img src={require('../images/GO4U-LOGO.png')} alt="Logo" />
            </a>
            </div>
            <div  className="aboutGo4u">
            <a href="/">
                <img src={require('../images/GO4U_mobile.png')} alt="Navbar Logo"/>
            </a> 
            </div>
        </div>
        <div className="aboutWords">
            <p>We are a food delivery platform connecting</p>
            <p>customers to nearby restaurants through a</p>
            <p>network of on-demand delivery personnel.</p>
        </div>
        <div className="aboutIcons">
            <a href="https://www.linkedin.com/company/go4ung">
                <img src={require('../images/linkedin.png')} alt="LinkedIn Logo" />
            </a>
            <a href="https://www.facebook.com/go4u_ng">
                <img src={require('../images/aboutFB.png')} alt="Facebook Logo" />
            </a>
            <a href="https://www.twitter.com/go4u_ng">
                <img src={require('../images/aboutTwitter.png')} alt="Twitter Logo" />
            </a>
            <a href="https://www.instagram.com/go4u_ng">
                <img src={require('../images/aboutIG.png')} alt="Instagram Logo" />
            </a>
        </div>
        <div className="aboutCopyright">
            <p>Copyrighted &copy; GO4U Technologies</p>
        </div>
    </div>
  )
}

export default About