import React from 'react'
import './BusinessJetChapter.css'
import BusinessjetSpecification from '../BusinessjetSpecification/BusinessjetSpecification'
import BusinessJetChapterGalary from '../BusinessJetChapterGalary/BusinessJetChapterGalary'
import BusinessJetSaftey from '../BusinessJetSaftey/BusinessJetSaftey'
import BookingPannel from '../BookingPannel/BookingPannel'
import ContactForm from '../ContactForm/ContactForm'
import AboutPrivatejet from '../AboutPrivatejet/AboutPrivatejet'
import BenifitPrivatejet from '../BenifitPrivatejet/BenifitPrivatejet'

const BusinessJetChapter = () => {
  return (
    <div>
 <div className="BusinessJet-detail-container">
      <div className="BusinessJet-detail-header">
        <h1>Deals Single</h1>
        <p>Home &gt; <span>BusinessJet</span></p>
      </div>
    </div>

    <BusinessjetSpecification />
    <BusinessJetChapterGalary />
    <BusinessJetSaftey />
    <AboutPrivatejet />
    <BenifitPrivatejet />
    <BookingPannel />
    <ContactForm />
    </div>
  )
}

export default BusinessJetChapter