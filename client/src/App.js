import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import "./App.css";
import NavBar from "./components/NavBar";
import('normalize.css');

function App() {
      return (

            <Router>
                  <div>
                        <NavBar />

                        <Switch>
                              <Route exact path="/" component={Search}>Search</Route>
                              <Route path="/saved" component={Saved}>Saved</Route>
                        </Switch>
                  </div>
            </Router>
      );
}

export default App;
