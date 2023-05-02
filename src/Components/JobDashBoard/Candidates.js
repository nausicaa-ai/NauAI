import Bubble from '../Charts/BubbleChart'
import React, { useEffect, useState } from 'react';
import M from 'materialize-css';



function Candidates() {

  useEffect(() => {
    const elems = document.querySelectorAll('.dropdown-trigger');
    M.Dropdown.init(elems, {
      constrainWidth: false,
      hover: true,

    });
  }, []);

  return (
    <>
      <Bubble />
      <div className="conatiner">
        <div className="col s2">
          <button className='dropdown-trigger btn' data-target='dropdown1'>Actions</button>

          <ul id='dropdown1' className='dropdown-content'>
            <li><a href="addcanidate">Add Candidate</a></li>
            <li class="divider" tabindex="-1"></li>
            <li><a href="#">Placeholder</a></li>
            <li class="divider" tabindex="-1"></li>
            <li><a href="#">Placeholder</a></li>
          </ul>
        </div>
        <div className="col s3">
          <button className="btn black">Request Self-assessment</button>
        </div>
        <div className="col s3">
          <button className="btn black">Request references</button>
        </div>
        <div className="col s4">
          <button className="btn black">Request references assessment</button>
        </div>
      </div>
    </>

  )
}

export default Candidates
