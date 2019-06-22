import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import HomePage from "../pages";
import SigninPage from "../pages/users/signin";
import ProfilePage from "../pages/users/profile";

export default function() {
  return (
    <Router>
      <Route exact path="/" component={HomePage} />
      <Route path="/users/signin" component={SigninPage} />
      <PrivateRoute path="/users/profile" component={ProfilePage} />
    </Router>
  );
}
