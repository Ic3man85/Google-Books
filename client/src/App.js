import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import "./App.css";
import('normalize.css');

function App() {
    return (

          <Router>
                <Switch>
                  <Route exact path="/search" component={Search}>Search</Route>
                  <Route exact path="/saved" component={Saved}>Saved</Route>
                </Switch>
          </Router>
    );
}

export default App;
