import './Nav.css'
import { Link, Outlet } from "react-router-dom";

function Nav() {
  return (
    <>
      <nav className="light-blue darken-3">
        <div className="nav-wrapper">
          <a href="#" className="brand-logo">Nausicaa Ai</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a href="sass.html">
                <i className="material-icons">format_align_justify</i>
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="sideNav">
        <ul
          id="slide-out"
          className="sidenav sidenav-fixed light-blue darken-1 z-depth-3"
        >
          <li>
            <Link to="/" className="white-text">
              <i className="material-icons white-text">home</i>Home
            </Link>
          </li>
          <li>
            <Link to="/templates" className="white-text">
              <i className="material-icons white-text">format_align_justify</i>
              Templates
            </Link>
          </li>
          <li>
            <Link to="/login" className="white-text">
              <i className="material-icons white-text">fingerprint</i>
              Login
            </Link>
          </li>
          <li>
            <Link to="/job" className="white-text">
              <i className="material-icons white-text">grid_on</i>
              Job Dashboard
            </Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  );
}

export default Nav;
