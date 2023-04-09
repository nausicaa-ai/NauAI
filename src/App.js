import "./App.css";
import "./Components/Login/Login.js";
import Login from "./Components/Login/Login.js";
import Home from "./Components/Home/Home.js";
import Nav from "./Components/NavBars/Nav.js";
import CreateJob from './Components/CreateJob/CreateJob.js';
import TemplateDashBoard from './Components/Templates/TemplateDashBoard.js';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "materialize-css/dist/css/materialize.min.css";

function App() {
  return (
    <>
      <header>
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />

            <Route path="/" element={<Nav />}>
              <Route index element={<Home />} />
              <Route path='/createjob' element={<CreateJob />} />
              <Route path='/templates' element={<TemplateDashBoard/>} />
            </Route>

          </Routes>
        </Router>
      </header>
    </>
  );
}

export default App;
