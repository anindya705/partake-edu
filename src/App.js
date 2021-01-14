import React from "react";
import { Helmet } from "react-helmet";
import { Redirect } from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./pages/HomePage/HomePage";
import SignUp from "./pages/SignUp/SignUp";
import About from "./pages/About/About";
import Login from "./pages/Login/Login";
import TellMeMore from "./pages/TellMeMore/TellMeMore";
import Dashboard from "./pages/Dashboard/Dashboard";
import Join from "./pages/Join/Join";
import Chat from "./pages/Chat/Chat";
import Video from "./pages/Video/Video";

const App = () => {
  return (
    <Router>
      {/* <Route render={() => <Redirect to={{ pathname: "/" }} />} /> */}
      <Route path="/" exact component={Home} />
      <Route path="/features" component={TellMeMore} />
      <Route path="/login" component={Login} />
      <Route path="/about" component={About} />
      <Route path="/sign-up" component={SignUp} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/video" component={Video} />
      <Route path="/join" component={Join} />
      <Route path="/chat" component={Chat} />
      <Helmet>
        <title>Partake</title>
      </Helmet>
    </Router>
  );
};

export default App;
