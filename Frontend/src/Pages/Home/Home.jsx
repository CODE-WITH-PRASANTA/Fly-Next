import React from 'react';
import './Home.css';
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';

// Import assets
import jetImage from '../../assets/element-2.png';
import AboutUsElement from '../../Components/AboutUsElement/AboutUsElement';
import BookingPannel from '../../Components/BookingPannel/BookingPannel';
import BenefitsSection from '../../Components/BenefitsSection/BenefitsSection';
import HomePackageSec from '../../Components/HomePackageSec/HomePackageSec';
import ProfessionalCount from '../../Components/ProfessionalCount/ProfessionalCount';
import LuxuryDeal from '../../Components/LuxuryDeal/LuxuryDeal';
import LatestNews from '../../Components/LaatestNews/LatestNews';

const Home = () => {
  return (
    <>
    <div className="home-container">
      <section className="banner-section">
        <div className="banner-social-area">
          <ul className="social-icons">
            <li><a href="#0"><FaFacebookF /></a></li>
            <li><a href="#0"><FaTwitter /></a></li>
            <li><a href="#0"><FaYoutube /></a></li>
            <li><a href="#0"><FaInstagram /></a></li>
          </ul>
        </div>
        <div className="container">
          <div className="banner-content">
            <h2 className="sub-title"><span>Fly</span>next</h2>
            <h1 className="main-title">Book a private jet instantly</h1>
            <p className="description">
              Curly Airline proudly raises the bar and exceeds the standard for luxury and corporate
              private jet charter services. We pride ourselves on offering a professional service.
            </p>
            <div className="banner-buttons">
              <a href="#make-your-trip" className="btn btn-primary">Make Your Trip</a>
              <a href="#request-quote" className="btn btn-secondary">Request Quote</a>
            </div>
          </div>
          <div className="banner-image">
            <img src={jetImage} alt="Private Jet" className="jet-animation" />
          </div>
        </div>
      </section>
    </div>
    <AboutUsElement />
    <BenefitsSection />
    <BookingPannel />
    <ProfessionalCount />
    <LatestNews />
    <LuxuryDeal />
    </>
  );
};

export default Home;
