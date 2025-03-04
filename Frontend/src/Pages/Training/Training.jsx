import React from 'react'
import './Training.css'
import TrainingDetails from '../../Components/TrainingDetails/TrainingDetails'
import TrainingCourseSection from '../../Components/TrainingCourseSection/TrainingCourseSection'
import TrainingFaq from '../../Components/TrainingFaq/TrainingFaq'
import TrainingEnqueryForm from '../../Components/TrainingEnqueryForm/TrainingEnqueryForm'

const Training = () => {
  return (
    <div>

    <div className="Training-detail-container">
      <div className="Training-detail-header">
        <h1>Training Details</h1>
        <p>Home &gt; <span>Training</span></p>
      </div>
    </div>
<TrainingDetails />
<TrainingCourseSection />
<TrainingFaq />
<TrainingEnqueryForm />
    </div>
  )
}

export default Training