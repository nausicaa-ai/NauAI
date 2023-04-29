import React, { useEffect } from 'react';
import M from 'materialize-css';
import Qualitative from '../JobDashBoard/Qualitative'
import Candidates from '../JobDashBoard/Candidates'
import TargetModel from '../JobDashBoard/TargetModel'
import Settings from './Settings';

function JobDashBoard() {
  useEffect(() => {
    // Initialize the tabs component
    const tabs = document.querySelector('.tabs');
    M.Tabs.init(tabs);
  }, []);

  return (
    <>
      <div className="container">
        <h3>Product Manager</h3>
        <div className="row">
          <div className="col s12">
            <ul className="tabs">
              <li className="tab col s3"><a href="#targetmodel" className="black-text">Target model</a></li>
              <li className="tab col s3"><a href="#qualitive" className="black-text">Qualitive Questions</a></li>
              <li className="tab col s3"><a href="#candidates" className="black-text">Candidates</a></li>
              <li className="tab col s3"><a href="#settings" className="black-text">Settings</a></li>
            </ul>
          </div>
            <div id="targetmodel" className="col s12">
              <TargetModel />
            </div>
          <div id="qualitive" className="col s12">
            <Qualitative />
          </div>
          <div id="candidates" className="col s12">
            <Candidates />
          </div>
          <div id="settings" className="col s12">
            <Settings />
          </div>
        </div>
      </div>
    </>
  )
}

export default JobDashBoard
