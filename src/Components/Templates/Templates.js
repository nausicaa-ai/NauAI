import React, { useEffect, useState } from 'react';
import M from 'materialize-css';

function Templates() {
  const [ jobTitle, setJobTitle] = useState("")
  const skills = ["Product sense", "Design", "Technical", "Strategy", "KPI Execution", "User Research", "Communication", "Project Management", "Charisma"]

  useEffect(() => {
    const elems = document.querySelectorAll('select');
    M.FormSelect.init(elems);
  }, []);


  return (
    <>
      <h4>Job Title</h4>
      <div class="row">
        <div class="input-field col s12">
          <input id="text" type="text" onChange={(event) => setJobTitle(event.target.value)} />
          <label for="text">Enter job title</label>
        </div>
      </div>
      <h4>Skills</h4>
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
    </>
  )
}

export default Templates
