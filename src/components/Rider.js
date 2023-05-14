import React from "react";
import "../styles/rider.css";

function Rider() {
  return (
    <div className="rider">
        <div className="riderImage">
            <img src={require('../images/Rider.png')} alt="Dispatch Rider" />
        </div>
        <div className="earnInfo">
            <div>
                <p className="earn">Earn as a GO4U rider</p>
            </div>
            <div className="moreInfo">
                    <h2>Become a rider</h2>
                    <p>You decide when, where, and how much</p>
                    <p>you work. Choose whether or not to accept</p>
                    <p>orders,find demand near you. You can</p>
                    <p> forget about reporting to an office-- or a</p>
                    <p> boss.</p>
            </div>
            <div className="applyBox">
            <a href="mailto:support@Go4u.ng" target="_blank"  rel="noopener noreferrer">Apply Now</a>
            </div>
        </div>
    </div>
  )
}

export default Rider;