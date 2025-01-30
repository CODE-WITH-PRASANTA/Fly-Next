import React from "react";
import "./Footer.css";
import Backgroundimg from "../../assets/element-1.png";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer" style={{ backgroundImage: `url(${Backgroundimg})` }}>
      <div className="footer-container">
        <div className="footer-info">
          <h2 className="footer-title"> <span>Fly</span>next</h2>
          <p className="footer-description">
            Flynext was founded in 1991 by a group of safety-focused professionals who created
            The Wingman Standard for rigorously vetting air charter operators.
          </p>
          <div className="footer-contacts">
            <div>
              <h4>Europe</h4>
              <p>45 Gloucester Road, London DT1M 3BF</p>
              <p>+44 (0)20 3671 5709</p>
            </div>
            <div>
              <h4>Asia & Pacific</h4>
              <p>2473 Red Road Ste 98, Singapore SG</p>
              <p>+1 623 211 6319</p>
            </div>
            <div>
              <h4>North America</h4>
              <p>45 Gloucester Road, London DT1M 3BF</p>
              <p>+44 (0)20 3671 5709</p>
            </div>
          </div>
        </div>
        <div className="footer-links-container">
          <div className="footer-links">
            <h4>Get started</h4>
            <ul>
              <li>Private jet</li>
              <li>Register</li>
              <li>Current Jet Deals</li>
              <li>Flynext mobile app</li>
            </ul>
          </div>
          <div className="footer-links">
            <h4>How it works</h4>
            <ul>
              <li>How it works</li>
              <li>Ways to fly</li>
              <li>Ways to buy</li>
              <li>Private charter</li>
              <li>Private Jet Cost</li>
            </ul>
          </div>
          <div className="footer-links">
            <h4>About us</h4>
            <ul>
              <li>About us</li>
              <li>News & press</li>
              <li>Blog</li>
              <li>FAQs</li>
              <li>Careers</li>
            </ul>
          </div>
          <div className="newsletter">
            <h4>Newsletter</h4>
            <p>
              Stay updated with the latest news from Flynext.
            </p>
            <form>
              <input type="email" placeholder="Enter Email" className="email-input" />
              <button type="submit" className="subscribe-button">Subscribe ✈</button>
            </form>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
  <p>
    Copyright © 2025 | All Rights Reserved | Powered by 
    <a href="https://prwebstock.com/" target="_blank" rel="noopener noreferrer" className="pr-webstock-link"> ♡ PR Webstock</a>
  </p>
  <div className="Footer-social-icons">
    <FaFacebookF />
    <FaTwitter />
    <FaYoutube />
    <FaInstagram />
  </div>
</div>

    </footer>
  );
};

export default Footer;
