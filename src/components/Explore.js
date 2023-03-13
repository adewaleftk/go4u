import React from 'react'
import "../styles/explore.css";

function Explore() {
  return (
    <div className="allExplore">
        <div className="exploreWords">
          <p className="exploreHeading">Explore varieties</p>
        <div>
            <p className="orderFrom">Order from several</p>
        </div>
        <div>
            <p className="restaur">restaurants around you</p>
        </div>
        <div>
            <p className="orderFor">Order for food on your mobile device and</p>
        </div>
        <div>
            <p className="track">track its delivery to your location</p>
        </div>
        </div>
        <div className="appHome">
            <img src={require('../images/Rectangle1.png')} alt="appHome" />
        </div>
    </div>
  )
}

export default Explore;