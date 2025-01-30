import React, { useState, useEffect } from 'react'; // Added useState and useEffect import
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import './ContactSection.css'
import { FaArrowUp } from 'react-icons/fa';


const ContactSection = () => {

    const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);



  return (
    <>
    <div className="contact-section">
      <div className="contact-map-container">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.848207496499!2d90.41251861498159!3d23.751436794582716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8582a91a83d%3A0x1358c7a013ff1c6b!2sManama%20M.S%20Toren!5e0!3m2!1sen!2sbd!4v1618994399838!5m2!1sen!2sbd"
          className="contact-map-iframe"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
      <div className="contact-info-container">
        <h3 className="contact-info-heading">Luxury Charters</h3>
        <h1 className="contact-info-title">How to Contact with Us?</h1>
        <p className="contact-info-description">
          The first small jet-powered civil aircraft was the Morane-Saulnier MS.760 Paris, developed privately in the early 1950s from the MS.755.
        </p>
        <div className="contact-info-item">
          <FaMapMarkerAlt className="contact-icon" />
          <div className="contact-details">
            <h4 className="contact-detail-title">Our Location</h4>
            <p className="contact-detail-text">963 heloe Ua-Torrento, CA 95448</p>
            <a href="https://goo.gl/maps/example" target="_blank" rel="noopener noreferrer" className="contact-detail-link">
              Find Us On Google Map
            </a>
          </div>
        </div>
        <div className="contact-info-item">
          <FaPhoneAlt className="contact-icon" />
          <div className="contact-details">
            <h4 className="contact-detail-title">Our Phone</h4>
            <p className="contact-detail-text">+1 814 929 4263</p>
            <p className="contact-detail-text">+1 814 929 4264</p>
          </div>
        </div>
        <div className="contact-info-item">
          <FaEnvelope className="contact-icon" />
          <div className="contact-details">
            <h4 className="contact-detail-title">Our Email</h4>
            <p className="contact-detail-text">contact@flynext.com</p>
            <p className="contact-detail-text">contact01@flynext.com</p>
          </div>
        </div>
      </div>
      <div className="contact-section">
      {/* Your other content */}
      {isVisible && (
        <button className="contact-scroll-to-top" onClick={scrollToTop}>
          <FaArrowUp />
        </button>
      )}
    </div>
    </div>
    </>
  );
};

export default ContactSection;
