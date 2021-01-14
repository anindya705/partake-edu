import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { useState } from "react";

import "./Login.css";

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="OuterContainer">
      <div className="InnerContainer">
        <h1 className="heading">Login</h1>
        <div>
          <input
            placeholder="Username"
            className="joinInput"
            type="text"
            onChange={event => setName(event.target.value)}
          />
        </div>
        <div>
          <input
            placeholder="Password"
            className="joinInput mt-20"
            type="password"
            onChange={event => setPassword(event.target.value)}
          />
        </div>
        <Link to="/dashboard" style={{ textDecoration: "none" }}>
          <button
            onClick={event => {
              if (!name || !password) {
                return event.preventDefault();
              }
              if (name !== "admin" || password !== "admin") {
                alert("incorrect username or password");
                return event.preventDefault();
              } else {
                return null;
              }
            }}
            className="button mt-20"
            type="submit"
          >
            Sign In
          </button>
        </Link>
      </div>
      <Helmet>
        <title>Login</title>
      </Helmet>
    </div>
  );
};

export default Login;
