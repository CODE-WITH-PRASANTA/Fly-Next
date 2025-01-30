import React from 'react';
import './BenefitsSection.css';
import { FaGlobe, FaMoneyBillWave, FaUserGraduate, FaClock, FaClipboardCheck, FaSmile } from 'react-icons/fa';

const BenefitsSection = () => {
  return (
    <section className="benefits-section">
      <div className="benefits-container">
        <h5>Discover Flynext Benefits</h5>
        <h2>Discover Private Jet Benefits</h2>
        <div className="benefits-grid">
          <div className="benefit-item">
            <FaGlobe className="benefit-icon" />
            <h3>Luxury & Comfort Travel</h3>
            <p>
              As well as getting to fly to many different destinations as part of their job, airplane pilots get big discounts on money.
            </p>
          </div>
          <div className="benefit-item">
            <FaMoneyBillWave className="benefit-icon" />
            <h3>Smart Costing Flight</h3>
            <p>
              Flying should be a pleasure, and we'll make your charter experience as luxurious and more comfortable as soon as possible.
            </p>
          </div>
          <div className="benefit-item">
            <FaUserGraduate className="benefit-icon" />
            <h3>Career Progression</h3>
            <p>
              The first small jet-powered civil aircraft was the Morane-Saulnier MS.760 Paris, developed privately since the 1940s.
            </p>
          </div>
          <div className="benefit-item">
            <FaClock className="benefit-icon" />
            <h3>Flexible Schedule</h3>
            <p>
              Our technology consistently delivers the best pricing for charters – and the unique ability to buy individual seats all over the world.
            </p>
          </div>
          <div className="benefit-item">
            <FaClipboardCheck className="benefit-icon" />
            <h3>Excellent Advantages</h3>
            <p>
              Search the world with ease and transparency. As the only tech-forward private aviation company, XO is able to bring you.
            </p>
          </div>
          <div className="benefit-item">
            <FaSmile className="benefit-icon" />
            <h3>Coolest Environment</h3>
            <p>
              Charter an entire jet, or offer the seats you don't need through our app – a need for full or even fractional jet ownership.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
