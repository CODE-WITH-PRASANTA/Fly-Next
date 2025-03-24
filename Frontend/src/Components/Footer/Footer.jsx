import React, { useEffect, useState } from "react";
import "./Footer.css";
import Backgroundimg from "../../assets/element-1.png";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5001/api/contacts")
      .then((response) => response.json())
      .then((data) => setContacts(data))
      .catch((error) => console.error("Error fetching contacts:", error));
  }, []);

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
            {contacts.length > 0 ? (
              contacts.map((contact, index) => (
                <div key={index}>
                  <h4>Address {index + 1}</h4>
                  <p>{contact.address1}</p>
                  <p>Email : {contact.email} <br /> Ph No. {contact.phone}</p>
                </div>
              ))
            ) : (
              <p>Loading contact details...</p>
            )}
            </div>
            <div>
            {contacts.length > 0 ? (
              contacts.map((contact, index) => (
                <div key={index}>
                  <h4>Address {index + 2}</h4>
                 <p> {contact.address2 && <p> {contact.address2}</p>}  <p> Email: {contact.email}</p></p>
                  <p>Ph No. : {contact.phone}</p>
                </div>
              ))
            ) : (
              <p>Loading contact details...</p>
            )}
            </div>
            <div>
            {contacts.length > 0 ? (
              contacts.map((contact, index) => (
                <div key={index}>
                  <h4>Address {index + 3}</h4>
                  {contact.address3 && <p>{contact.address3} <p> Email: {contact.email}</p></p>}

                  <p> Ph no. : {contact.phone}</p>
                </div>
              ))
            ) : (
              <p>Loading contact details...</p>
            )}
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
