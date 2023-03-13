import React from 'react';
import "../styles/footer.css";

function Footer() {
  return (
    <div className="footer">
        <div className="logoAndGO4U">
            <div className="footerLogo">
                <img src={require('../images/GO4U-footer.png')} alt="Footer Logo" />
            </div>
        <div className="go4u">
            <img src={require('../images/GO4U.png')} alt="GO4U Logo" />
        </div>
        </div>
        <div className="socialMediaIcons">
            <div className="twitter">
                <a href="https://www.twitter.com">
                    <img src={require('../images/twitter.png')} alt="Twitter Logo" /> 
                </a>
            </div>
            <div className="facebook">
                <a href="https://www.facebook.com">
                    <img src={require('../images/facebook.png')} alt="Facebook Logo" />
                </a>
            </div>
            <div className="instagram">
                <div className="instagramLogo">
                <a href="https://www.instagram.com">
                    <img src={require('../images/instagram.png')} alt="Instagram Logo" />
                </a>
                </div>
            </div>
        </div>
        <div className="copyright">
            Copyright 2023 Go4u Technologies
        </div>
    </div>
  )
}

export default Footer;