import React from "react";
import { Link } from "react-router-dom";

const Dashboard = props => {
  return (
    <div>
      <h1>Welcome User</h1>
      <Link to="/join">
        <button>Start a Meeting!</button>
      </Link>
      <Link to="/login">
        <button>Log out</button>
      </Link>
      <Link to="/video">
        <button>onwards!</button>
      </Link>
    </div>
  );
};

export default Dashboard;
