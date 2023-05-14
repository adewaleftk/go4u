import React from 'react'
import "../styles/mobileHeader.css";

function MobileHeader() {
  return (
    <div className="responsiveHeader">
        
        <div className="info">
          <p>Looking for where to order</p>
            <p>your favorite dish at the</p>
            <p>nearest restaurant ?</p>
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