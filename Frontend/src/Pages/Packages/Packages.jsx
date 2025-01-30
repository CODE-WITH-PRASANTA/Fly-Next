import React, { useState, useEffect, useRef } from 'react';
import './Packages.css';
import { FaGlobe, FaMoneyBillWave, FaUserGraduate, FaClock, FaClipboardCheck, FaSmile } from 'react-icons/fa';
import innerBgImage from '../../assets/inner-bg.png'; // Replace with the actual image file path
import OurPackages from '../../Components/OurPackages/OurPackages';
import ContactForm from '../../Components/ContactForm/ContactForm';

const StatItem = ({ targetNumber, label, startCounting }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startCounting) return; // Only start counting when the section is visible
    let start = 0;
    const duration = 2000; // Animation duration in ms
    const increment = Math.ceil(targetNumber / (duration / 60)); // Calculate increment for ~60fps
    const interval = setInterval(() => {
      start += increment;
      if (start >= targetNumber) {
        start = targetNumber;
        clearInterval(interval);
      }
      setCount(start);
    }, 40); // Update every 16ms (~60fps)

    return () => clearInterval(interval); // Clean up interval
  }, [targetNumber, startCounting]);

  return (
    <div className="stat-item">
      <h2>{count}</h2>
      <p>{label}</p>
    </div>
  );
};

const Packages = () => {
  const statsRef = useRef(null); // Reference for the stats section
  const [startCounting, setStartCounting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setStartCounting(true); // Start counting when section is visible
          observer.disconnect(); // Stop observing once triggered
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect(); // Clean up observer
  }, []);

  return (
    <>
      <div className="packages-heading-section">
        <div className="packages-heading-container">
          <h1 className="packages-title">Our Packages</h1>
          <p className="packages-breadcrumb">
            Home <span className="breadcrumb-separator">&gt;</span> Our Packages
          </p>
        </div>
      </div>

      {/* Benefits Section */}
      <section className="Package-benefits-section">
        <div className="Package-benefits-container">
          <h5>Discover Flynext Benefits</h5>
          <h2>Discover Our Helicopter 🚁 and Private Jet ✈️ Benefits</h2>
          <div className="Package-benefits-grid">
            <div className="Package-benefit-item">
              <FaGlobe className="Package-benefit-icon" />
              <h3>Luxury & Comfort Travel</h3>
              <p>
                As well as getting to fly to many different destinations as part of their job, airplane pilots get big discounts on money.
              </p>
            </div>
            <div className="Package-benefit-item">
              <FaMoneyBillWave className="Package-benefit-icon" />
              <h3>Smart Costing Flight</h3>
              <p>
                Flying should be a pleasure, and we'll make your charter experience as luxurious and more comfortable as soon as possible.
              </p>
            </div>
            <div className="Package-benefit-item">
              <FaUserGraduate className="Package-benefit-icon" />
              <h3>Career Progression</h3>
              <p>
                The first small jet-powered civil aircraft was the Morane-Saulnier MS.760 Paris, developed privately since the 1940s.
              </p>
            </div>
            <div className="Package-benefit-item">
              <FaClock className="Package-benefit-icon" />
              <h3>Flexible Schedule</h3>
              <p>
                Our technology consistently delivers the best pricing for charters – and the unique ability to buy individual seats all over the world.
              </p>
            </div>
            <div className="Package-benefit-item">
              <FaClipboardCheck className="Package-benefit-icon" />
              <h3>Excellent Advantages</h3>
              <p>
                Search the world with ease and transparency. As the only tech-forward private aviation company, XO is able to bring you.
              </p>
            </div>
            <div className="Package-benefit-item">
              <FaSmile className="Package-benefit-icon" />
              <h3>Coolest Environment</h3>
              <p>
                Charter an entire jet, or offer the seats you don't need through our app – a need for full or even fractional jet ownership.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <div
        className="stats-section"
        ref={statsRef} // Attach reference to stats section
        style={{ backgroundImage: `url(${innerBgImage})` }}
      >
        <StatItem targetNumber={95} label="Professional Pilots" startCounting={startCounting} />
        <StatItem targetNumber={68} label="Jet Airplanes" startCounting={startCounting} />
        <StatItem targetNumber={290} label="World Airports" startCounting={startCounting} />
        <StatItem targetNumber={195} label="Directions" startCounting={startCounting} />
      </div>


      <OurPackages />
      <ContactForm />
    </>
  );
};

export default Packages;
