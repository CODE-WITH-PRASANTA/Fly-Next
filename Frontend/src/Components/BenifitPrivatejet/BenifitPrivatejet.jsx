import React from 'react';
import './BenifitPrivatejet.css';
import { FaPlay } from 'react-icons/fa';

// Assets
import FeaturePrivatejet1 from '../../assets/feature-private-jet-2.png';
import FeaturePrivatejet2 from '../../assets/feature-private-jet.png';
import SafetyIcon from '../../assets/security-icon.png';
import LocationIcons from '../../assets/location-icon.png';
import Flexbleicon from '../../assets/Flexible-icon.png';
import ModernPrivateIcon from '../../assets/plane-icon.png';

const BenifitPrivatejet = () => {
  return (
    <div className="Benifit-Privatejet-section">


      <div className="Benifit-Privatejet-content">

        
        <div className="Benifit-Privatejet-images">
          <img src={FeaturePrivatejet1} alt="Private Jet Interior" className="Benifit-Privatejet-image-top" />
          <div className="Benifit-Privatejet-video-wrapper">
            <img src={FeaturePrivatejet2} alt="Private Jet Video Thumbnail" className="Benifit-Privatejet-image-bottom" />
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noopener noreferrer" className="Benifit-Privatejet-play-button">
              <FaPlay className="Benifit-Privatejet-play-icon" />
            </a>
          </div>
        </div>


        <div className="Benifit-Privatejet-text">
          <h5 className="Benifit-Privatejet-sub-heading">Benefits of Service</h5>
          <h2 className="Benifit-Privatejet-main-heading">Benefits of Private Jet.</h2>
          <p className="Benifit-Privatejet-description">
            By constantly improving on the best. It’s in this spirit that the Phenom 300E received further enhancements, becoming the most successful.
          </p>
          <div className="Benifit-Privatejet-grid">
            <div className="Benifit-Privatejet-item">
              <img src={SafetyIcon} alt="Safety" className="Benifit-Privatejet-icon" />
              <h4 className="Benifit-Privatejet-item-heading">Safety Accred Aircraft.</h4>
              <p className="Benifit-Privatejet-item-text">We give you access & service accredited aircraft.</p>
            </div>
            <div className="Benifit-Privatejet-item">
              <img src={LocationIcons} alt="Location" className="Benifit-Privatejet-icon" />
              <h4 className="Benifit-Privatejet-item-heading">Anywhere. Any time.</h4>
              <p className="Benifit-Privatejet-item-text">Search the world with ease and transparency.</p>
            </div>
            <div className="Benifit-Privatejet-item">
              <img src={Flexbleicon} alt="Flexible" className="Benifit-Privatejet-icon" />
              <h4 className="Benifit-Privatejet-item-heading">Flexible private flying.</h4>
              <p className="Benifit-Privatejet-item-text">Charter an entire jet, or offer the seats you don’t need.</p>
            </div>
            <div className="Benifit-Privatejet-item">
              <img src={ModernPrivateIcon} alt="Modern" className="Benifit-Privatejet-icon" />
              <h4 className="Benifit-Privatejet-item-heading">Modern Private Jet</h4>
              <p className="Benifit-Privatejet-item-text">Our technology consistently delivers the best pricing.</p>
            </div>
          </div>
        </div>



      </div>
    </div>
  );
};

export default BenifitPrivatejet;