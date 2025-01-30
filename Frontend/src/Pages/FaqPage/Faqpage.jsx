import React from 'react';
import './Faqpage.css';
import FaqQuestion from '../../Components/FaqQuestionSection/FaqQuestion';

const Faqpage = () => {
  return (
    <>
    <div className="faq-container">
      <div className="faq-header">
        <h1>Read FAQ's</h1>
        <p>Home &gt; <span>FAQ</span></p>
      </div>
    </div>
    <FaqQuestion />
    </>
  );
};

export default Faqpage;
