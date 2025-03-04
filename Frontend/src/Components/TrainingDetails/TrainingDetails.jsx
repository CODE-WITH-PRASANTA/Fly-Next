import React from 'react';
import './TrainingDetails.css';

// Assets
import Course1 from '../../assets/course-img-1.png';
import Course2 from '../../assets/course-img-2.png';
import Course3 from '../../assets/course-img-3.png';
import Course4 from '../../assets/course-img-4.jpg';
import Course5 from '../../assets/course-img-5.png';
import Course6 from '../../assets/course-img6.png';

const courses = [
  {
    image: Course1,
    title: 'Airline Crew Training',
    className: 'airline-crew',
    rules: [
      ' Minimum age: 18 years',
      ' Fluent in English',
      ' Good communication skills',
      ' Must have a valid passport',
    ],
  },
  {
    image: Course2,
    title: 'ATP Courses',
    className: 'atp-courses',
    rules: [
      ' Minimum age: 21 years',
      ' Hold a commercial pilot license',
      ' 1,500 hours of flight experience',
      ' Must pass FAA written test',
    ],
  },
  {
    image: Course3,
    title: 'Aircraft Maintenance',
    className: 'aircraft-maintenance',
    rules: [
      ' Must have a high school diploma',
      ' Strong technical & mechanical skills',
      ' Knowledge of aviation safety',
      ' FAA Aircraft Maintenance Certificate',
    ],
  },
  {
    image: Course4,
    title: 'Air Traffic Control',
    className: 'air-traffic-control',
    rules: [
      ' Must be under 31 years old',
      'Pass the FAA AT-SAT exam',
      ' Strong decision-making skills',
      ' Ability to work under pressure',
    ],
  },
  {
    image: Course5,
    title: 'Safety & Risk Management',
    className: 'safety-risk-management',
    rules: [
      ' Background in safety regulations',
      ' Analytical and problem-solving skills',
      ' Strong communication skills',
      ' Knowledge of risk mitigation strategies',
    ],
  },
  {
    image: Course6,
    title: 'Flight Operations',
    className: 'flight-operations',
    rules: [
      ' Degree in aviation or related field',
      ' Knowledge of airline operations',
      ' Experience in flight scheduling',
      ' Strong multitasking skills',
    ],
  },
];

const TrainingDetails = () => {
  return (
    <div className="full-training-page">
    <div className="training-container">
      {courses.map((course, index) => (
        <div key={index} className={`training-card ${course.className}`}>
          <img src={course.image} alt={course.title} className="training-image" />
          <div className="training-info">
            <h3>{course.title}</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
            <ul>
              {course.rules.map((rule, ruleIndex) => (
                <li key={ruleIndex}>{rule}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default TrainingDetails;
