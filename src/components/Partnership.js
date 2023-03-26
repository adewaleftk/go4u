import React from 'react';
import "../styles/partnership.css";
import SocialMediaIcons from './SocialMediaIcons';

function Partnership() {
  return (
    <div className="partnership">
        <div className="partnershipInfo">
            <h2>Want to partner with us?</h2><br />
            <p>Are you a restaurant owner looking to grow your business, or a</p>
            <p>logistics company looking to expand your reach. Or you would</p>
            <p>like to be part of what we are building.</p>
            <div className="getInTouchButton">
              
                <a href="mailto:support@Go4u.ng" target="_blank"  rel="noopener noreferrer" >Get In Touch</a>
            </div>
        </div>
        <SocialMediaIcons />
    </div>
  )
}

export default Partnership;