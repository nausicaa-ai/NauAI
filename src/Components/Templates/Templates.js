import React, { useEffect } from 'react';
import M from 'materialize-css';

function Templates() {
  const jobTitles = ["Project Manager", "Front-End Developer", "Back-End Developer", "UI/UX Developer"]
  const skills = ["Product sense", "Design", "Technical", "Strategy", "KPI Execution", "User Research", "Communication", "Project Management", "Charisma"]

  useEffect(() => {
    const elems = document.querySelectorAll('select');
    M.FormSelect.init(elems);
  }, []);


  return (
    <div className="container">
      <div>
        <h3>Job Title</h3>
        <div class="input-field col s12">
          <select>
            <option value="" disabled selected>Choose role</option>
            {jobTitles.map((job) => (
              <option value="1">{job}</option>
            ))}
          </select>
        </div>
        <h3>Skills</h3>
        <div class="input-field col s12">
          <select>
            <option value="" disabled selected>Choose your option</option>
            {skills.map((skill) => (
              <option value="1">{skill}</option>
            ))}
          </select>
          <label>Skills</label>
        </div>
        <div class="input-field col s12">
          <select>
            <option value="" disabled selected>Choose your option</option>
            {skills.map((skill) => (
              <option value="1">{skill}</option>
            ))}
          </select>
          <label>Skills</label>
        </div>
        <div class="input-field col s12">
          <select>
            <option value="" disabled selected>Choose your option</option>
            {skills.map((skill) => (
              <option value="1">{skill}</option>
            ))}
          </select>
          <label>Skills</label>
        </div>
      </div>
    </div>
  )
}

export default Templates
