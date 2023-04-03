import React from 'react'
import "../styles/header.css";


function Header() {
  return (
    <div className="main-header" >
      <div className="intro">
        <p className="look">Looking for where to order your favorite dish at</p>
        <p className="the">the nearest restaurant?</p>
      </div>  
        <div className="go4uIs"><p>GO4U is here to offer you the best. Coming soon on:</p></div>
    
        <div className="buttons">
          <div className="playStore">
            <a href="/" className="playStoreLink">Play Store</a>
            </div>
        <div className="appStore">
          <a href="/" className="appStoreLink">App Store</a>
          </div>
        </div>
    </div>
  );
}

export default Header;