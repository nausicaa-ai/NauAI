import Radar from '../Charts/CandidateRadarChart'
import Line from '../Charts/LineChart'


function Canidate() {
  const data = { name: "Andy Lau", email: "andy@nausicaa.ai", education: "Bachelor's Degree", professional: "10 years", relevant: "9 years" }

  return (
    <div className="container">
      <h3>{data.name}</h3>
      <h6>Email: {data.email}</h6>
      <h6>Education: {data.education}</h6>
      <h6>Professional Experience: {data.professional}</h6>
      <h6>Relevant Experience: {data.relevant}</h6>
      <h6>Resume: </h6>
      <br></br>
      <hr></hr>
      <br></br>
      <div className="container">
        <div className="row">
          <div className="col l5 s2">
            <div className="card hoverable">
              <div className="card-content">
                <h5 className='center'>Target Skill Attributes</h5>
              </div>
              <div className="card-content">
                <Radar />
              </div>
            </div>
          </div>
          <div className="col l7 s2">
            <div className="card hoverable">
              <div className="card-content">
                <h5 className='center'>Target Cultural Traits</h5>
              </div>
              <div className="card-content">
                <Line />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col s3">
          <button className="btn black">Actions</button>
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
      <hr></hr>
      <div>
        <h5>References</h5>
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Company</th>
              <th>Job Title</th>
              <th>Relation</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Canidate