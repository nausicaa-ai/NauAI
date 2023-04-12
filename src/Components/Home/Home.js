import 'materialize-css/dist/css/materialize.min.css';
import './Home.css'
import {Link} from 'react-router-dom'


function Home() {

  return (
    <div className="container">
      <h1>Home</h1>
      <table>
        <thead>
          <tr>
            <th>Jobs</th>
            <th>Target Scorecards</th>
            <th>Assessments</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Product Manager</td>
            <td>5</td>
            <td>4/25</td>
            <td><span className="badge blue">Open</span></td>
            <td><a className="waves-effect waves-light btn black">View</a></td>
          </tr>
          <tr>
            <td>Software Engineer</td>
            <td>3</td>
            <td>0/2</td>
            <td><span className="badge yellow">Intake</span></td>
            <td><a className="waves-effect waves-light btn black">View</a></td>
          </tr>
          <tr>
            <td>Designer</td>
            <td>3</td>
            <td>4/15</td>
            <td><span className="badge red">Scoring</span></td>
            <td><a className="waves-effect waves-light btn black">View</a></td>
          </tr>
          <tr>
            <td>Customer Service Manager</td>
            <td>3</td>
            <td>5/5</td>
            <td><span className="badge green">Complete</span></td>
            <td><a className="waves-effect waves-light btn black">View</a></td>
          </tr>
        </tbody>
      </table>
      <div className="create-btn waves-effect waves-light btn black">
        <Link to="/createjob" >Create</Link>
      </div>
    </div>

  )
}

export default Home
