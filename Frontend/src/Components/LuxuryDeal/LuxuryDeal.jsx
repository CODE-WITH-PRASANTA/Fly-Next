import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaHelicopter } from "react-icons/fa";
import "./LuxuryDeal.css";
import axiosInstance from '../../Utils/Api';


import AirAmbulancepic from '../../assets/air-ambulance.png';
import Privatejetpic from '../../assets/private-jet.png';
import Businessjetpic from '../../assets/Business-jet.png';
import Privatehelicopter from '../../assets/private-helicopter.png';

const LuxuryDeal = () => {
  const navigate = useNavigate();
  const [luxuryDeals, setLuxuryDeals] = useState([]);
  
  useEffect(() => {
    const fetchLuxuryDeals = async () => {
      try {
        const response = await axiosInstance.get("/luxury-deals/all");
        setLuxuryDeals(response.data);
      } catch (error) {
        console.error("Error fetching luxury deals:", error.response?.data || error.message);
      }
    };
  
    fetchLuxuryDeals();
  }, []);
  

  // Define a mapping of categories to images
  const categoryImages = {
    "Business Jet": Businessjetpic,
    "Private Helicopter": Privatehelicopter,
    "Air Ambulance": AirAmbulancepic,
    "Private Jet": Privatejetpic
  };

  return (
    <div className="luxury-deal-container">
      <h2 className="luxury-title">Luxury Charters</h2>
      <h3 className="luxury-subtitle">Luxury Deals For You</h3>
      <div className="luxury-cards">
        {luxuryDeals.map((deal, index) => (
          <div className="luxury-card" key={index}>
            <img
              src={categoryImages[deal.category] || Privatejetpic} 
              alt={deal.category}
              className="luxury-image"
              onClick={() => navigate("/businessjet")}
            />
            <h4 className="luxury-card-title" onClick={() => navigate("/businessjet")}>
              {deal.category}
            </h4>
            <p className="luxury-card-desc">{deal.number}</p>
            <p className="luxury-card-details">
              {deal.seats} Seats &nbsp; | &nbsp; Price: ₹{deal.price}/hr
            </p>
            <div className="luxury-divider"></div>
            <button className="luxury-book-button" onClick={() => navigate("/book-now")}>
              <FaHelicopter className="luxury-icon" /> Book Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LuxuryDeal;
