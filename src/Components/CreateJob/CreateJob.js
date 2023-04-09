import React, { useEffect, useState } from 'react';
import M from 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import './CreateJob.css'
import { Link } from 'react-router-dom'



function CreateJob() {
  const [jobtitle, setJobTitle] = useState("")
  const [temp, setTemp] = useState("")

  useEffect(() => {
    const elems = document.querySelectorAll('select');
    M.FormSelect.init(elems);
  }, []);

  return (
    <>
      <div className="container">
        <h1>Create new job</h1>
        <div className="job-title">
          <div className="row">
            <form className="col s12">
              <div className="row">
                <h5>Job Title</h5>
                <div className="input-field col s12">
                  <input placeholder="" onChange={(event) => setJobTitle(event.target.value)} id="first_name" type="text" className="validate" />
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="template">
          <h5>Templates</h5>
          <div className="input-field col s12">
            <select onChange={(event) => setTemp(event.target.value)}>
              <option value="" disabled selected></option>
              <option value="Option1">Option 1</option>
              <option value="Option2">Option 2</option>
              <option value="Option3">Option 3</option>
            </select>
          </div>
        </div>
        <div className="teammember">
          <h5>Select member(s) to submit scorecard</h5>
          <div className="input-field col s12">
            <select multiple>
              <option value="" disabled selected></option>
              <option value="Option1">Option 1</option>
              <option value="Option2">Option 2</option>
            </select>
            <label></label>
          </div>
        </div>
        <div className="buttons">
          <div className="row">
            <div className="col s6">
              <div className="create-btn">
                <Link to="/" >
                  <button className="waves-effect waves-light btn black"></button>
                </Link>
              </div>
            </div>
            <div className="col s6">
              <a className="waves-effect waves-light btn black">Cancel</a>
            </div>
          </div>
        </div>
        <p>Job title: {jobtitle}</p>
        <p>Template: {temp}</p>
      </div>
    </>
  )
}

export default CreateJob
