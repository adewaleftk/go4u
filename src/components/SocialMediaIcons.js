import React from 'react'
import '../styles/socialMediaIcons.css';

function SocialMediaIcons() {
  return (
        <div className="social-media-icons">
            <div className="twitter">
                <a href="https://www.twitter.com/go4u_ng">
                    <img src={require('../images/mobile_twitter.png')} alt="Twitter Logo" /> 
                </a>
            </div>
            <div className="facebook">
                <a href="https://www.facebook.com/go4u_ng">
                    <img src={require('../images/mobile_facebook.png')} alt="Facebook Logo" />
                </a>
            </div>
            <div className="instagram">
                <div className="instagramLogo">
                <a href="https://www.instagram.com/go4u_ng">
                    <img src={require('../images/mobile_instagram.png')} alt="Instagram Logo" />
                </a>
                </div>
            </div>
        </div>
  )
}

export default SocialMediaIcons;