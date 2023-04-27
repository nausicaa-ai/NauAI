import React, { useEffect, useState } from 'react';
import M from 'materialize-css';

function Templates() {
  const [jobTitle, setJobTitle] = useState("");
  const [selectedSkills, setSelectedSkills] = useState([]);

  const skills = [
    "Product sense",
    "Design",
    "Technical",
    "Strategy",
    "KPI Execution",
    "User Research",
    "Communication",
    "Project Management",
    "Charisma"
  ];

  useEffect(() => {
    const elems = document.querySelectorAll('select');
    M.FormSelect.init(elems);
  }, []);

  const handleSkillChange = (event, index) => {
    const selectedSkill = event.target.value;
    setSelectedSkills(prevSkills => {
      const newSkills = [...prevSkills];
      newSkills[index] = selectedSkill;
      return newSkills;
    });
  };

  const getAvailableSkills = () => {
    return skills.filter(skill => !selectedSkills.includes(skill));
  };

  return (
    <>
      <h4>Job Title</h4>
      <div className="row">
        <div className="input-field col s12">
          <input id="text" type="text" onChange={(event) => setJobTitle(event.target.value)} />
          <label htmlFor="text">Enter job title</label>
        </div>
      </div>
      <h4>Skills</h4>
      {[0, 1, 2, 3, 4].map((index) => (
        <div className="input-field col s12" key={index}>
          <select value={selectedSkills[index] || ""} onChange={(event) => handleSkillChange(event, index)}>
            <option value="" disabled>Choose your option</option>
            {getAvailableSkills().map((skill) => (
              <option value={skill} key={skill}>{skill}</option>
            ))}
          </select>
          <label>Skills</label>
        </div>
      ))}
    </>
  );
}

export default Templates;
