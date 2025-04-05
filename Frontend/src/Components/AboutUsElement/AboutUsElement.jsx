import React, { useState, useEffect } from "react";
import { FaPlane } from "react-icons/fa";
import axiosInstance from "../../Utils/Api"; // Import the Axios instance
import "./AboutusElement.css";

// Assets of the page
import bgimg from "../../assets/About-bg.png";
import callandbookbg from "../../assets/element-7.png";
import rightsidestylebg from "../../assets/element-8.png";

const AboutUsElement = () => {
  const [phoneNumber, setPhoneNumber] = useState(""); // State to store phone number

  // Fetch phone number from API
  useEffect(() => {
    const fetchPhoneNumber = async () => {
      try {
        const response = await axiosInstance.get("/contacts"); // Use axiosInstance
        if (response.data.length > 0) {
          setPhoneNumber(`+44 ${response.data[0].phone}`); // Add country code +44
        }
      } catch (error) {
        console.error("Error fetching phone number:", error);
      }
    };

    fetchPhoneNumber();
  }, []);

  return (
    <div className="about-container" style={{ backgroundImage: `url(${bgimg})` }}>
      <div className="background-overlay"></div>
      <div className="about-content">
        <div className="text-section">
          <p className="section-title">
            About Fly<span>next</span>
          </p>
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
              <p className="call-number">{phoneNumber || "Loading..."}</p>
            </div>
            <button 
              className="about-book-now"
              onClick={() => phoneNumber && (window.location.href = `tel:${phoneNumber.replace(/\s/g, "")}`)}
              disabled={!phoneNumber} // Disable button if phone number isn't loaded
            >
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
