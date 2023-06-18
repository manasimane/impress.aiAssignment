import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const CreateEditResume = () => {
  const history = useHistory();

  const [resume, setResume] = useState({
    name: '',
    email: '',
    address: '',
    phone: '',
    education: [
      {
        institute: '',
        year: '',
        degree: '',
      },
    ],
    experience: [
      {
        company: '',
        year: '',
        designation: '',
      },
    ],
    skills: [],
  });

  const handleInputChange = (e) => {
    setResume({ ...resume, [e.target.name]: e.target.value });
  };

  const handleEducationChange = (index, field, value) => {
    const updatedEducation = [...resume.education];
    updatedEducation[index][field] = value;
    setResume({ ...resume, education: updatedEducation });
  };

  const handleExperienceChange = (index, field, value) => {
    const updatedExperience = [...resume.experience];
    updatedExperience[index][field] = value;
    setResume({ ...resume, experience: updatedExperience });
  };

  const handleAddEducation = () => {
    const updatedEducation = [...resume.education, { institute: '', year: '', degree: '' }];
    setResume({ ...resume, education: updatedEducation });
  };

  const handleAddExperience = () => {
    const updatedExperience = [...resume.experience, { company: '', year: '', designation: '' }];
    setResume({ ...resume, experience: updatedExperience });
  };

  const handleSkillChange = (e) => {
    setResume({ ...resume, skills: e.target.value.split(',') });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save resume or perform any desired action here
    history.push('/view-resume', { resume }); // Redirect to ViewResume component with resume data
  };

  return (
    <div className="container">
      <h1 className="my-4">Create / Edit Resume</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={resume.name}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={resume.email}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Address:</label>
          <input
            type="text"
            className="form-control"
            name="address"
            value={resume.address}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Phone:</label>
          <input
            type="text"
            className="form-control"
            name="phone"
            value={resume.phone}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Education:</label>
          {resume.education.map((edu, index) => (
            <div key={index}>
              <input
                type="text"
                className="form-control mb-2"
                placeholder="Institute"
                value={edu.institute}
                onChange={(e) => handleEducationChange(index, 'institute', e.target.value)}
                required
              />

              <input
                type="text"
                className="form-control mb-2"
                placeholder="Year"
                value={edu.year}
                onChange={(e) => handleEducationChange(index, 'year', e.target.value)}
                required
              />

              <input
                type="text"
                className="form-control mb-3"
                placeholder="Degree"
                value={edu.degree}
                onChange={(e) => handleEducationChange(index, 'degree', e.target.value)}
                required
              />
            </div>
          ))}
          <button type="button" className="btn btn-primary" onClick={handleAddEducation}>
            Add Education
          </button>
        </div>

        <div className="form-group">
          <label>Experience:</label>
          {resume.experience.map((exp, index) => (
            <div key={index}>
              <input
                type="text"
                className="form-control mb-2"
                placeholder="Company"
                value={exp.company}
                onChange={(e) => handleExperienceChange(index, 'company', e.target.value)}
                required
              />

              <input
                type="text"
                className="form-control mb-2"
                placeholder="Year"
                value={exp.year}
                onChange={(e) => handleExperienceChange(index, 'year', e.target.value)}
                required
              />

              <input
                type="text"
                className="form-control mb-3"
                placeholder="Designation"
                value={exp.designation}
                onChange={(e) => handleExperienceChange(index, 'designation', e.target.value)}
                required
              />
            </div>
          ))}
          <button type="button" className="btn btn-primary" onClick={handleAddExperience}>
            Add Experience
          </button>
        </div>

        <div className="form-group">
          <label>Skills:</label>
          <input
            type="text"
            className="form-control"
            name="skills"
            value={resume.skills.join(',')}
            onChange={handleSkillChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Save Resume
        </button>
      </form>
    </div>
  );
};

export default CreateEditResume;
