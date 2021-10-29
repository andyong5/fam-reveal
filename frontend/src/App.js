import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Reveal from "./Reveal"

function App() {
  const [appName, setAppName] = useState("Andy Nguyen");
  const [appFam, setAppFam] = useState("Tight");

  return (
    <Router>
      <Switch>
        <Route path="/reveal">
          <Reveal  appName={appName} appFam={appFam}/>
        </Route>
        <Route path="/">
          <Home setAppName={setAppName} setAppFam={setAppFam}/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
