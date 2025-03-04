import React from 'react';
import { FaPlane } from 'react-icons/fa'; // Import airplane icon
import './AboutusElement.css';

// Assets of the page
import bgimg from '../../assets/About-bg.png';
import callandbookbg from '../../assets/element-7.png';
import rightsidestylebg from '../../assets/element-8.png';

const AboutUsElement = () => {
  return (
    <div className="about-container" style={{ backgroundImage: `url(${bgimg})` }}>
      <div className="background-overlay"></div>
      <div className="about-content">
        <div className="text-section">
          <p className="section-title">About Fly<span>next</span></p>
          <h1 className="main-heading">
            Private Jet Charters save your <span className="fly-text">time</span> and give more comfort
          </h1>
          <p className="about-description">
            Flynext is the only way to fully travel on your terms. Whether it’s accessing a remote
            destination or taking back control of productivity and flight scheduling.
          </p>
        </div>

        <div className="call-to-action">
          <div className="call-card" style={{ backgroundImage: `url(${callandbookbg})` }}>
            <div className="call-details">
              <p className="call-text">Call for book quick:</p>
              <p className="call-number">+91 637-254-5244</p>
            </div>
            <button className="about-book-now">
              <FaPlane className="plane-icon" /> Book Now
            </button>
          </div>
        </div>
      </div>
      <div className="right-style" style={{ backgroundImage: `url(${rightsidestylebg})` }}></div>
    </div>
  );
};

export default AboutUsElement;
