import "./App.css";
import React from "react";
import Home from "./Home";
import Loose from "./Loose";
import Tight from "./Tight";
import Close from "./Close";
import Test from "./Test";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/work">
          <Test />
        </Route>
        <Route path="/loose">
          <Loose />
        </Route>
        <Route path="/tight">
          <Tight />
        </Route>
        <Route path="/close">
          <Close />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
