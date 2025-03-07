import React, { useState } from "react";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import { FaQuestionCircle } from 'react-icons/fa';
import "./ContactForm.css";

const ContactForm = () => {
  const [formStatus, setFormStatus] = useState(null);

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "0b358e88-aa4b-4279-aa0d-5b6f38e5c13d");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      setFormStatus("success");
      event.target.reset(); // Reset form after submission
    } else {
      setFormStatus("error");
    }
  };

  return (
    <div className="full-contact-form">
      <div className="contact-form-container">
        <div className="contact-left-section">
          <h2 className="contact-heading">Talk to us</h2>
          <h1 className="contact-title">Any Question? Feel Free to Contact</h1>
          <p className="contact-description">
            With a vast array of popular private planes to choose from, travelling by
            private jet charter is the most efficient.
          </p>
          <div className="contact-social-icons">
            <FaFacebookF className="social-icon" />
            <FaTwitter className="social-icon" />
            <FaYoutube className="social-icon" />
            <FaInstagram className="social-icon" />
          </div>
        </div>
        <div className="contact-right-section">
          <form className="contact-form" onSubmit={onSubmit}>
            <div className="form-group form-group-name">
              <input type="text" className="form-input" name="name" placeholder="Name" required />
              <span className="icon-placeholder">&#128100;</span>
            </div>
            <div className="form-group form-group-email">
              <input type="email" className="form-input" name="email" placeholder="Email" required />
              <span className="icon-placeholder">&#9993;</span>
            </div>
            <div className="form-group form-group-phone">
              <input type="text" className="form-input" name="phone" placeholder="Phone" required />
              <span className="icon-placeholder">&#128222;</span>
            </div>
            <div className="form-group form-group-message">
              <textarea className="form-textarea" name="message" placeholder="Message" rows="5" required></textarea>
            </div>
            <button type="submit" className="submit-button">
              <FaQuestionCircle className="inquiry-icon" /> Enquiry Now
            </button>
          </form>

          {/* Display submission status */}
          {formStatus === "success" && <p className="success-message">Message sent successfully!</p>}
          {formStatus === "error" && <p className="error-message">Something went wrong. Try again.</p>}
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
