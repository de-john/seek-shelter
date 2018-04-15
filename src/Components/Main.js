import React from "react";
import '../css/style.css';
import { Switch, Route } from "react-router-dom";
import App from "./App";
import About from "./About";
import CheckIn from "./CheckIn";
import MapContainer from "./MapContainer";

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <div>
    <Switch>
      <Route exact path="/" component={MapContainer} />
      <Route path="/check-in" component={CheckIn} />
      <Route path="/about" component={About} />
    </Switch>
  </div>
);

export default Main;