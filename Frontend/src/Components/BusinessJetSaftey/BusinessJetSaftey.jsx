import React from "react";
import "./BusinessJetSaftey.css";

// Assets
import PlaneImg from "../../assets/plane-img.png";

const BusinessJetSafety = () => {
  return (
    <div className="Businessjet-safety-section">

      <h4 className="Businessjet-safety-title">Safety</h4>
      <h2 className="Businessjet-safety-heading">Embraer P-300E Safety</h2>


      <div className="Businessjet-safety-content">
        {/* Left Column (Items 1 & 2) */}
        <div className="Businessjet-safety-column Businessjet-safety-left">
          <div className="Businessjet-safety-item">
            <span className="Businessjet-safety-number">1</span>
            <h3 className="Businessjet-safety-subtitle">User-friendly system added</h3>
            <p className="Businessjet-safety-text">
              There is a very fast AVANCE L5 system for internet access, and it did not disappoint.
            </p>
          </div>

          <div className="Businessjet-safety-item">
            <span className="Businessjet-safety-number">2</span>
            <h3 className="Businessjet-safety-subtitle">Punching way above its weight</h3>
            <p className="Businessjet-safety-text">
              The first small jet-powered civil aircraft was the Morane-Saulnier MS.760 Paris, developed privately.
            </p>
          </div>
        </div>

        {/* Plane Image in Center */}
        <div className="Businessjet-safety-plane-container">
          <div className="Businessjet-safety-plane-bg"></div>
          <img src={PlaneImg} alt="Jet Plane" className="Businessjet-safety-plane-img" />
        </div>

        {/* Right Column (Items 3 & 4) */}
        <div className="Businessjet-safety-column Businessjet-safety-right">
          <div className="Businessjet-safety-item">
            <span className="Businessjet-safety-number">3</span>
            <h3 className="Businessjet-safety-subtitle">Binge-watching on board</h3>
            <p className="Businessjet-safety-text">
              Our technology consistently delivers the best pricing for charters’ ability to buy.
            </p>
          </div>

          <div className="Businessjet-safety-item">
            <span className="Businessjet-safety-number">4</span>
            <h3 className="Businessjet-safety-subtitle">The most delivered jet of the decade</h3>
            <p className="Businessjet-safety-text">
              Charter an entire jet, or offer the seats you don’t need through our app. Either way, there’s no longer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessJetSafety;
