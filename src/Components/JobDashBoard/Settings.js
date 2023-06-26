import React from "react";
// import M from "materialize-css";

const Settings = () => {
  return (
    <div className="container">
      <h5>
        Template: <br /> Product Manager
      </h5>
      <h5>Select members to submit scorecards</h5>
      <div className="">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Job Title</th>
              <th>Scorecard Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Ron</td>
              <td>developer@email.com</td>
              <td>Sr. Front-End Engineer</td>
              <td>Submitted</td>
              <td>Done</td>
            </tr>
            <tr>
              <td>Thinh</td>
              <td>developer@email.com</td>
              <td>Design Engineer</td>
              <td>In-Review</td>
              <td>
                <button>Submit</button>
              </td>
            </tr>
            <tr>
              <td>Sean</td>
              <td>developer@email.com</td>
              <td>Jr. Software Engineer</td>
              <td>Not Submitted</td>
              <td>Invite</td>
            </tr>
          </tbody>
        </table>
      </div>
      <br></br>
      <button className="btn black" >Invite Scorecard Members</button>
      <br></br>
      <h5>How many references per candidate?</h5>
      <input type="number" min="0" max="10" placeholder="0" style={{width: '5%'}}></input>
    </div>
  );
};

export default Settings;
