import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import Home from "../Home/Home.js";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform login logic here, e.g. send email and password to server
    console.log("Logged in with email:", email, "and password:", password);
  };

  return (
    <div className="login-container">
      <h1 className="login-title">Log in to access Nausicaa AI</h1>
      <form className="login-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email"></label>
          <input
            className="login-input"
            type="email"
            id="email"
            value={email}
            placeholder="Email Address"
            onChange={handleEmailChange}
          />
        </div>
        <div>
          <label htmlFor="password"></label>
          <input
            className="login-input"
            type="password"
            id="password"
            value={password}
            placeholder="Password"
            onChange={handlePasswordChange}
          />
        </div>
        <div>
          <Link to="/">
            <button className="login-submit" type="submit">
              Log in
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
