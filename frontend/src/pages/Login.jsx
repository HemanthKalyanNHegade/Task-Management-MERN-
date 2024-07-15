import React, { useState, useContext } from "react";
import "../styles/Login.css";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const Login = () => {
  const { login } = useContext(AuthContext);
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(e, credentials.username, credentials.password);
  };

  return (
    <div className="login-container">
      <div className="card">
        <div className="card-body">
          <h3 style={{ width: "100%", textAlign: "center" }}>Login</h3>
          <div>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                Username
              </label>
              <input
                type="text"
                className="form-control"
                id="username"
                name="username"
                placeholder="Enter username"
                value={credentials.username}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                placeholder="Enter password"
                value={credentials.password}
                onChange={handleChange}
              />
            </div>
            <button className="btn btn-success" onClick={handleSubmit}>
              Login
            </button>
          </div>
          <div className="footer-link-container">
            <span>Not yet registered?</span>
            <Link to="/register">Click here</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
