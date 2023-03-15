import React from 'react'
import "../styles/header.css";

function Header() {
  return (
    <div className="main-header" >
        <h1 className="look">Looking for where to order your favorite dish at</h1>
        <h1 className="the">the nearest restaurant?</h1>
        
        <div className="go4uIs">GO4U is here to offer you the best. Coming soon on:</div>
        <br />
        <div className="buttons">
          <div className="playStore">
            <a href="playstore.com" target="_blank" className="playStoreLink">Play Store</a>
            </div>
        <div className="appStore">
          <a href="appstore.com" target="_blank" className="appStoreLink">App Store</a>
          </div>
        </div>
    </div>
  );
}

export default Header;