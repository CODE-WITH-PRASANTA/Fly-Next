import React from 'react';
import './LuxuryDeal.css';

import AirAmbulancepic from '../../assets/air-ambulance.png';
import Privatejetpic from '../../assets/private-jet.png';
import Businessjetpic from '../../assets/Business-jet.png';
import Privatehelicopter from '../../assets/private-helicopter.png';
import { FaHelicopter } from 'react-icons/fa';

const LuxuryDeal = () => {
  return (
    <div className="luxury-deal-container">
      <h2 className="luxury-title">Luxury Charters</h2>
      <h3 className="luxury-subtitle">Luxury Deals For You</h3>
      <div className="luxury-cards">
        <div className="luxury-card">
          <img src={Businessjetpic} alt="Business Jet" className="luxury-image" />
          <h4 className="luxury-card-title">Business Jet Charter</h4>
          <p className="luxury-card-desc">Beech BE300 Super King</p>
          <p className="luxury-card-details">
            8 - 14 Seats &nbsp; | &nbsp; Price: $9,000/hr
          </p>
          <div className="luxury-divider"></div>
          <button className="luxury-book-button">
            <FaHelicopter className="luxury-icon" /> Book Now
          </button>
        </div>
        <div className="luxury-card">
          <img src={Privatehelicopter} alt="Private Helicopter" className="luxury-image" />
          <h4 className="luxury-card-title">Private Helicopter</h4>
          <p className="luxury-card-desc">Charter a A500</p>
          <p className="luxury-card-details">
            8 - 14 Seats &nbsp; | &nbsp; Price: $9,000/hr
          </p>
          <div className="luxury-divider"></div>
          <button className="luxury-book-button">
            <FaHelicopter className="luxury-icon" /> Book Now
          </button>
        </div>
        <div className="luxury-card">
          <img src={AirAmbulancepic} alt="Air Ambulance" className="luxury-image" />
          <h4 className="luxury-card-title">Air Ambulance</h4>
          <p className="luxury-card-desc">Beech BE300 Super King</p>
          <p className="luxury-card-details">
            8 - 14 Seats &nbsp; | &nbsp; Price: $9,000/hr
          </p>
          <div className="luxury-divider"></div>
          <button className="luxury-book-button">
            <FaHelicopter className="luxury-icon" /> Book Now
          </button>
        </div>
        <div className="luxury-card">
          <img src={Privatejetpic} alt="Private Jet" className="luxury-image" />
          <h4 className="luxury-card-title">Private Jet Charter</h4>
          <p className="luxury-card-desc">Legacy 600</p>
          <p className="luxury-card-details">
            8 - 14 Seats &nbsp; | &nbsp; Price: $9,000/hr
          </p>
          <div className="luxury-divider"></div>
          <button className="luxury-book-button">
            <FaHelicopter className="luxury-icon" /> Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default LuxuryDeal;
