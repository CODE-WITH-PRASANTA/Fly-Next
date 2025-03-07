import React from 'react';
import './AboutPrivatejet.css';

// Assets
import PrivateJetimg from '../../assets/private-jet-img.png';

const AboutPrivatejet = () => {
  return (
    <div className="About-privatejet-container">
    <div className="About-privatejet-content">
      <div className="About-privatejet-image">
        <img src={PrivateJetimg} alt="Private Jet Interior" />
      </div>
  
      <div className="About-privatejet-text">
        <h5 className="About-privatejet-subtitle">About Private Jet</h5>
        <h2 className="About-privatejet-title">Private Jet Charter</h2>
        <p className="About-privatejet-description">
          The development of center-aisle cabin business jets was accelerated by an 
          August 1956 United States Air Force (USAF) letter of the requirement for two 
          “off-the-shelf” aircraft: the larger UCX (cargo) and smaller UTX (trainer). 
          These requirements differed from standard Air Force.
        </p>
        <ul className="About-privatejet-features">
          <li>✅ <strong>Unmatched technology. Superior performance.</strong></li>
          <li>✅ <strong>Unmatched technology. Superior performance.</strong></li>
          <li>✅ Industry-exclusive upper technology panel and longest-ranged.</li>
          <li>✅ Exclusive upper technology panel and longest-ranged.</li>
        </ul>
        <button className="About-privatejet-book-btn">✈️ Book Now</button>
      </div>
    </div>
  
    <div className="About-privatejet-contact-sidebar">
      <span>📞 +1 814 929 4263</span>
    </div>
  </div>
  
  );
};

export default AboutPrivatejet;
