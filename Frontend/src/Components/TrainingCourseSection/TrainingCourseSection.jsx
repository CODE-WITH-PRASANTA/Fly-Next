import React from "react";
import "./TrainingCourseSection.css";
import courseImage from "../../assets/training-course.png"; // Update with correct path

const TrainingCourseSection = () => {
  return (
    <div className="training-course-full-page">
    <div className="training-course-container">
      {/* Course Image */}
      <div className="course-image-wrapper">
        <img src={courseImage} alt="Course" className="course-image" />
      </div>

      {/* About This Course Section */}
      <div className="course-content">
        <h2 className="section-heading">About This Course</h2>
        <p className="section-description">
          Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
          In dui maouse estibulum et, tempor auctor, justo. In ac felis quis tortor malesuada pretium.
          Pellentesque auctor neque nec urna. Proin sapiipsum porta a, auctor quis, euismod ut, mi.
          Aenean viverra rhoncus pede. fringilla tstique. Morbi mattis ullamcorper velit. Phasellus gravida semper nisi. Nullam vel sem.
        </p>
        <p className="section-description">
          Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sespum.
          Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio at ante tincidunt tempus.
          Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante.
        </p>

        {/* What You'll Learn Section */}
        <h2 className="section-heading">What You'll Learn</h2>
        <p className="section-description">
          Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sespum.
          Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio at ante tincidunt tempus.
          Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante.
        </p>

        {/* Learning Points - Two Column List */}
        <div className="learning-container">
          <ul className="learning-list">
            <li> Curabitur ullamcorper ultricies nisi eget</li>
            <li> Fringilla mauris sit amet nibhonce sodales</li>
            <li> Aenean leo ligula porttitor consequat</li>
            <li> Maecenas tempus tellus eget condim</li>
            <li> Must have medical certificate</li>
          </ul>

          <ul className="learning-list">
            <li> Must have medical certificate</li>
            <li> Curabitur ullamcorper ultricies nisi eget</li>
            <li> Fringilla mauris sit amet nibhonce sodales</li>
            <li> Aenean leo ligula porttitor eu consequat</li>
            <li> Maecenas tempus tellus eget condim</li>
          </ul>
        </div>
      </div>
    </div>
    </div>
  );
};

export default TrainingCourseSection;
