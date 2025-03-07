import React from "react";
import "./BusinessjetSpecification.css";
import { FiSend, FiMapPin, FiNavigation, FiUsers } from "react-icons/fi";

// Assets
import BusinessjetSpecificationImg from "../../assets/Business-jet-specification.png";

const BusinessjetSpecification = () => {
  return (
    <section className="businessjet-specification">
      <div className="businessjet-specification-container">


        <div className="businessjet-specification-content">
          <div className="businessjet-specification-image">
            <img src={BusinessjetSpecificationImg} alt="Business Jet" />
          </div>
          <div className="businessjet-specification-details">
            <h4 className="businessjet-specification-title">Specification</h4>
            <h2 className="businessjet-specification-name">Embraer P-300E</h2>
            <p className="businessjet-specification-description">
              Our technology consistently delivers the best pricing for charters –
              and the unique ability to buy individual seats.
            </p>
            <p className="businessjet-specification-text">
              By constantly improving on the best, the Phenom 300E received further
              enhancements, becoming the most successful business jet of the past decade.
            </p>
            <ul className="businessjet-specification-list">
              <li className="businessjet-specification-item"> Industry-exclusive upper technology panel</li>
              <li className="businessjet-specification-item"> Unmatched technology. Superior performance.</li>
              <li className="businessjet-specification-item"> With its next-generation avionics, generous cabin</li>
              <li className="businessjet-specification-item"> The best-in-class cabin altitude.</li>
            </ul>
          </div>
        </div>

        <div className="businessjet-specification-stats">
      <div className="businessjet-specification-stat-box">
        <FiSend className="businessjet-specification-icon" />
        <span className="businessjet-specification-stat-value">2,036 <small>ft</small></span>
        <span className="businessjet-specification-stat-label">TAKE OFF DISTANCE</span>
      </div>
      <div className="businessjet-specification-stat-box">
        <FiMapPin className="businessjet-specification-icon" />
        <span className="businessjet-specification-stat-value">1,275 <small>nm</small></span>
        <span className="businessjet-specification-stat-label">MAX RANGE</span>
      </div>
      <div className="businessjet-specification-stat-box">
        <FiNavigation className="businessjet-specification-icon" />
        <span className="businessjet-specification-stat-value">305 <small>ktas</small></span>
        <span className="businessjet-specification-stat-label">AIRCRAFT SPEED</span>
      </div>
      <div className="businessjet-specification-stat-box">
        <FiUsers className="businessjet-specification-icon" />
        <span className="businessjet-specification-stat-value">7</span>
        <span className="businessjet-specification-stat-label">MAX PASSENGER</span>
      </div>
    </div>
    
        
      </div>
    </section>
  );
};

export default BusinessjetSpecification;
