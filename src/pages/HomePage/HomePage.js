import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

import "./HomePage.css";

const HomePage = () => {
  function changeFontColor(e) {
    e.target.style.color = "green";
  }

  function revertColor(e) {
    e.target.style.color = "black";
  }

  return (
    <div className="background-container">
      <div className="header">
        <h1>partake.</h1>
        <Link to="/about" style={{ textDecoration: "none" }}>
          <a
            href="/about"
            onMouseOver={changeFontColor}
            onMouseLeave={revertColor}
            className="about"
          >
            about
          </a>
        </Link>
        <Link to="/login" style={{ textDecoration: "none" }}>
          <Button variant="contained" color="primary" className="login-button">
            Login
          </Button>
        </Link>
        <Link to="/sign-up" style={{ textDecoration: "none" }}>
          <Button
            variant="contained"
            color="secondary"
            className="sign-up-button"
            to="/sign-up"
          >
            Sign Up
          </Button>
        </Link>
      </div>
      <div className="description">
        <p>a revolutionary way to conduct online webinars and trainings.</p>
      </div>
      <div>
        <Link to="./features" style={{ textDecoration: "none" }}>
          <Button
            className="tell-me-more"
            variant="contained"
            size="large"
            color="primary"
          >
            Tell me more
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
