import React, { useState } from 'react'
import M from 'materialize-css';

function AddCanidate() {

  const [firstname, setFirstName] = useState("")
  const [lastname, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [education, setEducation] = useState("")
  const [professional, setProfessional] = useState("")
  const [relevant, setRelevant] = useState("")

  return (
    <div className="container">
      <div className="section"></div>
      <div className="section"></div>
      <div className="container">
        <h2>Add Canidate</h2>
        <div className="row">
          <form className="col s12">
            <div className="row">
              <div className="input-field col s6">
                <input id="first_name" type="text" className="validate" onChange={(event) => setFirstName(event.target.value)} />
                <label htmlFor="first_name">First Name</label>
              </div>
              <div className="input-field col s6">
                <input id="last_name" type="text" className="validate" onChange={(event) => setLastName(event.target.value)} />
                <label htmlFor="last_name">Last Name</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input id="email" type="email" className="validate" onChange={(event) => setEmail(event.target.value)} />
                <label htmlFor="email">Email</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input id="education" type="text" className="validate" onChange={(event) => setEducation(event.target.value)} />
                <label htmlFor="education">Education</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input id="professional" type="number" className="validate" onChange={(event) => setProfessional(event.target.value)} />
                <label htmlFor="professional">Professional Experience</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input id="relevant" type="number" className="validate" onChange={(event) => setRelevant(event.target.value)} />
                <label htmlFor="relevant">Relevant Experience</label>
              </div>
            </div>
            <button className="btn black" >Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddCanidate