import React from 'react'
import "../styles/mobileHeader.css";

function MobileHeader() {
  return (
    <div className="responsiveHeader">
        <p className="go4u">GO4U</p>
        <div className="info">
            <p>Order your favorite dish at</p>
            <p>the nearest restaurant</p>
        </div>
        <div className="buttons">
        <a href="https://www.twitter.com/go4u_ng">
                <img src={require('../images/playstore.png')} alt="Google Play" /> 
        </a>
        <a href="https://www.twitter.com/go4u_ng">
            <img src={require('../images/appstore.png')} alt="App Store" /> 
        </a>
        </div>
    </div>
  )
}

export default MobileHeader;