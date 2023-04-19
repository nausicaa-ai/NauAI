import React, { useEffect } from 'react';
import M from 'materialize-css';
import SkillPool from './SkillPool'
import Templates from './Templates'
// import './TemplateDashBoard.css'

function TemplatesDashBoard() {
  useEffect(() => {
    // Initialize the tabs component
    const tabs = document.querySelector('.tabs');
    M.Tabs.init(tabs);
  }, []);

  return (
    <>
      <div className="container">
      <h3>Template</h3>
        <div className="row">
          <div className="col s12">
            <ul className="tabs">
              <li className="tab col s6"><a href="#test1" className="black-text">Templates</a></li>
              <li className="tab col s6"><a href="#test2" className="black-text">Skill Pool</a></li>
            </ul>
          </div>
          <div id="test1" className="col s12">
            <Templates />
          </div>
          <div id="test2" className="col s12">
            <SkillPool />
          </div>
        </div>
      </div>
    </>
  )
}

export default TemplatesDashBoard
