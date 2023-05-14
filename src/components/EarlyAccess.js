import React, { useState } from 'react';
import "../styles/earlyAccess.css";

function EarlyAccess() {
    const [email, setEmail] = useState('');

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
      };
      
      const handleSubmit = (event) => {
        event.preventDefault();
        // send email to server
      };
      
  return (
    <div className='earlyAccess'>
        <div className="appLoading">
            <img src={require('../images/Rectangle.png')} alt='app-loading-page'className="app-l"/>
        </div>
        <div className="getEarlyAccess">
            <div className="getEarlyAccessWord">
                <p>Get Early Access</p>
            </div>
            <div className="bePart">
                <p>Be part of the first users</p>
            </div>
            <div className="earlyWords">
                <p>We are redefining the on-demand food delivery</p>
                <p>business by making it easy for you to satisfy your</p>
                <p>cravings in the shortest possible time.</p>
            </div>
            <div className="mobileEarlyWords">
              <p>Join the <span>GO4U</span> waitlist today and be the first</p>
              <p>to know when we launch! Get your favorite</p>
              <p>meals delivered right to your doorsteps with</p>
              <p>just a few clicks</p>
            </div>
            <div className="allSubmit">
                <form onSubmit={handleSubmit}>
                <label>
                    <input type="email" value={email} placeholder="Email address" onChange={handleEmailChange} className="subscribeInput"/>
                </label>
                <button type="submit" className="submit">Submit</button>
                </form>
            </div>
        </div>
    </div>
  );
}

export default EarlyAccess;