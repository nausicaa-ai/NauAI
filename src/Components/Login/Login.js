import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";

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
    <>
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
            {/* note - In the future we may have to change the Link tag to work asynchronously with actually
          logging a user in.  Or we can implement the login submit to redirect a user to the home page upon
          successful login/authentication. ChatGPT can help.
          https://reactrouter.com/en/main/components/link read this for clarification */}
            <Link className="btn login-submit" to="/home">
              Log in
            </Link>
          </div>
        </form>

        <div className="line-text">
          <hr className="line" />
          <span className="text">or log in with</span>
          <hr className="line" />
        </div>

        <div className="google">
          <button className="login-submit-google">Google</button>
        </div>
      </div>
    </>
  );
}

export default Login;
