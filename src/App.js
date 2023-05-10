import "./App.css";
import "./Components/Login/Login.js";
import Login from "./Components/Login/Login.js";
import Home from "./Components/Home/Home.js";
import Nav from "./Components/NavBars/Nav.js";
import CreateJob from './Components/CreateJob/CreateJob.js';
import TemplateDashBoard from './Components/Templates/TemplateDashBoard.js';
import JobDashBoard from './Components/JobDashBoard/JobDashBoard'
import AddCandidate from './Components/JobDashBoard/AddCandidate'
import Candidate from './Components/JobDashBoard/Candidate'
import ScoreCard from './Components/JobDashBoard/ScoreCard'



import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "materialize-css/dist/css/materialize.min.css";

function App() {
  return (
    <>
      <header>
        <Router>
          <Routes>
            <Route index element={<Login />} />

            <Route path="/" element={<Nav />}>
              <Route path="/home" element={<Home />} />
              <Route path='/createjob' element={<CreateJob />} />
              <Route path='/templates' element={<TemplateDashBoard/>} />
              <Route path='/job' element={<JobDashBoard />} />
              <Route path='/addcanidate' element={<AddCandidate />} />
              <Route path='/candidate' element={<Candidate />} />
              <Route path='/scorecard' element={<ScoreCard />} />
            </Route>

          </Routes>
        </Router>
      </header>
    </>
  );
}

export default App;
