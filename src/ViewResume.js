import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';

const ViewResume = () => {
  const location = useLocation();
  const { resume } = location.state;
  const history = useHistory();

  const handleGoBack = () => {
    history.push('');
  };

  return (
    <div className="container">
      <h2 className="mb-4">View Resume</h2>

      <div className="card mb-4">
        <div className="card-header">
          <h3>Personal Information</h3>
        </div>
        <div className="card-body">
          <p><strong>Name:</strong> {resume.name}</p>
          <p><strong>Email:</strong> {resume.email}</p>
          <p><strong>Address:</strong> {resume.address}</p>
          <p><strong>Phone:</strong> {resume.phone}</p>
        </div>
      </div>

      <div className="card mb-4">
        <div className="card-header">
          <h3>Education</h3>
        </div>
        <div className="card-body">
          {resume.education.map((edu, index) => (
            <div key={index} className="mb-3">
              <p><strong>Institute:</strong> {edu.institute}</p>
              <p><strong>Year:</strong> {edu.year}</p>
              <p><strong>Degree:</strong> {edu.degree}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="card mb-4">
        <div className="card-header">
          <h3>Experience</h3>
        </div>
        <div className="card-body">
          {resume.experience.map((exp, index) => (
            <div key={index} className="mb-3">
              <p><strong>Company:</strong> {exp.company}</p>
              <p><strong>Year:</strong> {exp.year}</p>
              <p><strong>Designation:</strong> {exp.designation}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="card mb-4">
        <div className="card-header">
          <h3>Skills</h3>
        </div>
        <div className="card-body">
          <p>{resume.skills.join(', ')}</p>
        </div>
      </div>

      <button className="btn btn-primary" onClick={handleGoBack}>
        Go Back to Create Resume
      </button>
    </div>
  );
};

export default ViewResume;
