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
        <div className="comingSoon">
          <p>Coming Soon On:</p>
        </div>
        <div className="buttons">
          <button>Play Store</button>
          <button>App Store</button>
        </div>
    </div>
  )
}

export default MobileHeader;