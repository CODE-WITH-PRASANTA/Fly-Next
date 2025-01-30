import React, { useEffect, useState, useRef } from 'react'; 
import './ProfessionalCount.css'; // Link to CSS file
import FlightBg from '../../assets/Flight-bg-count.png'; // Background image

const ProfessionalCount = () => {
  const targetCounts = [95, 68, 290, 195]; // Target numbers
  const [counts, setCounts] = useState([0, 0, 0, 0]); // Current counts
  const [hasAnimated, setHasAnimated] = useState(false); // To track if animation has already occurred
  const sectionRef = useRef(null); // Reference to the section

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          startCounting();
          setHasAnimated(true); // Ensure it animates only once
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]); // Re-run only if `hasAnimated` changes

  const startCounting = () => {
    const intervals = [];

    targetCounts.forEach((target, index) => {
      let currentCount = 0;
      const interval = setInterval(() => {
        currentCount += Math.ceil(target / 100); // Increment value based on target
        if (currentCount >= target) {
          currentCount = target; // Ensure it doesn't go above the target
          clearInterval(interval); // Clear interval once the target is reached
        }
        setCounts((prevCounts) => {
          const newCounts = [...prevCounts];
          newCounts[index] = currentCount;
          return newCounts;
        });
      }, 50); // Update every 50ms
      intervals.push(interval);
    });

    // Cleanup intervals in case of unmount
    return () => {
      intervals.forEach((interval) => clearInterval(interval));
    };
  };

  return (
    <div
      className="professional-count bg-overlay-black"
      style={{ backgroundImage: `url(${FlightBg})` }}
      ref={sectionRef} // Attach ref to the section
    >
      <div className="count-container">
        <div className="count-item">
          <h2 className="count-number">{counts[0]}</h2>
          <p className="count-label">Professional Pilots</p>
        </div>
        <div className="count-divider"></div>
        <div className="count-item">
          <h2 className="count-number">{counts[1]}</h2>
          <p className="count-label">Jet Airplanes</p>
        </div>
        <div className="count-divider"></div>
        <div className="count-item">
          <h2 className="count-number">{counts[2]}</h2>
          <p className="count-label">World Airports</p>
        </div>
        <div className="count-divider"></div>
        <div className="count-item">
          <h2 className="count-number">{counts[3]}</h2>
          <p className="count-label">Directions</p>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalCount;
