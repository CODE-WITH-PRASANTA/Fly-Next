import React from 'react';
import './OurPackages.css';

import { FaYoutube, FaPlane } from 'react-icons/fa';

import Package1 from '../../assets/package-01.png';
import Package2 from '../../assets/package-2.png';
import Package3 from '../../assets/package-3.png';

const OurPackages = () => {
  return (
    <div className="our-packages">
      <div className="our-packages-header">
        <h5>Flynext Package</h5>
        <h1>Flynext Tour Packages</h1>
      </div>
      <div className="packages-grid">
        <div className="package-card">
          <img src={Package1} alt="Island of the Goods" className="package-image" />
          <div className="package-content">
            <div className="package-price">$115.00</div>
            <h3>Island of the Goods</h3>
            <p>Date: Thursday, Nov 4, 2021</p>
            <p>Person: 2 Adults</p>
            <div className="package-actions">
              <a href="#" className="book-now">
                <FaPlane className="icon-left" />
                Book Now
              </a>
              <FaYoutube className="icon-right" />
            </div>
          </div>
        </div>
        <div className="package-card">
          <img src={Package2} alt="City of the Goods" className="package-image" />
          <div className="package-content">
            <div className="package-price">$110.00</div>
            <h3>City of the Goods</h3>
            <p>Date: Friday, Dec 7, 2021</p>
            <p>Person: 3 Adults</p>
            <div className="package-actions">
              <a href="#" className="book-now">
                <FaPlane className="icon-left" />
                Book Now
              </a>
              <FaYoutube className="icon-right" />
            </div>
          </div>
        </div>
        <div className="package-card">
          <img src={Package3} alt="Desert of the Goods" className="package-image" />
          <div className="package-content">
            <div className="package-price">$120.00</div>
            <h3>Desert of the Goods</h3>
            <p>Date: Sunday, Sep 3, 2021</p>
            <p>Person: 4 Adults</p>
            <div className="package-actions">
              <a href="#" className="book-now">
                <FaPlane className="icon-left" />
                Book Now
              </a>
              <FaYoutube className="icon-right" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurPackages;
