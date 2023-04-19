import React, { useEffect } from 'react';
import M from 'materialize-css';
import Radar from '../Charts/RadarChart'
import Line from '../Charts/LineChart'
import Qualitative from '../JobDashBoard/Qualitative'



// import './JobDashBoard.css'

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
              <li className="tab col s3"><a href="#test1" className="black-text">Target model</a></li>
              <li className="tab col s3"><a href="#test2" className="black-text">Qualitive Questions</a></li>
              <li className="tab col s3"><a href="#test3" className="black-text">Canidates</a></li>
              <li className="tab col s3"><a href="#test4" className="black-text">Settings</a></li>
            </ul>
          </div>
          <div className="row">
            <div id="test1" className="col s12">
              <div className="col l6 s12">
                <div className="card hoverable">
                  <div className="card-content">
                    <h5 className='center'>Target Skill Attributes</h5>
                  </div>
                  <div className="card-content">
                    <Radar />
                  </div>
                </div>
              </div>
              <div className="col l6 s12">
                <div className="card hoverable">
                  <div className="card-content">
                    <h5 className='center'>Target Cultural Traits</h5>
                  </div>
                  <div className="card-content">
                    <Line />
                  </div>
                </div>
              </div>
              <div className="col l1 s12">
                <div className="container">
                <button className="btn black">Submit</button>
                </div>
              </div>
              <div className="col l3 s12">
                <div className="container">
                <button className="btn black">Invite to ScoreCard</button>
                </div>
              </div>
            </div>
          </div>
          <div id="test2" className="col s12">
            <Qualitative />
          </div>
        </div>
      </div>
    </>
  )
}

export default JobDashBoard
