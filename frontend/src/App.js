import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Reveal from "./Reveal";
import Add from './Add';

function App() {
  const [appName, setAppName] = useState("Andy Nguyen");
  const [appFam, setAppFam] = useState("Tight");

  return (
    <Router>
      <Switch>
        <Route path="/add" exact>
          <Add />
        </Route>
        <Route path="/reveal" exact>
          <Reveal  appName={appName} appFam={appFam}/>
        </Route>
        <Route path="/" exact>
          <Home setAppName={setAppName} setAppFam={setAppFam}/>
        </Route>
        <Route path="/" render={() => <div>404</div>}>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
