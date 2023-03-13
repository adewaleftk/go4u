import React from "react";
import "../styles/rider.css";

function Rider() {
  return (
    <div className="rider">
        <div className="riderImage">
            <img src={require('../images/Rider.png')} alt="Dispatch Rider" className="riderPic" />
        </div>
        <div className="earnInfo">
            <div>
                <p className="earn">Earn as a GO4U rider</p>
            </div>
            <div className="moreInfo">
                <div>
                    <h2>Become a rider</h2>
                </div>
                <div>
                    <p>You decide when, where, and how much you</p>
                </div>
                <div>
                    <p>work. Choose whether or not to accept orders,</p>
                </div>
                <div>
                    <p>find demand near you. You can forget about</p>
                </div>
                <div>
                    <p>reporting to an office-- or a boss.</p>
                </div>
            </div>
            <div className="applyBox">
            <a href="www.whatever.com" target="_blank" className="applyLink">Apply</a>
            </div>
        </div>
    </div>
  )
}

export default Rider;