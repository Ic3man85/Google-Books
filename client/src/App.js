import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from "./components/NavBar";
import Jumbotron from './components/Jumbotron';
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import "./App.css";
import('normalize.css');

class App extends Component {
  render() {
    return (

       <div>
          <Router>
             <NavBar>
                <Switch>
                  <Route exact path="/search" component={Search}>Search</Route>
                  <Route path="/saved" component={Saved}>Saved</Route>
                </Switch>
             </NavBar>
          </Router>
          <Jumbotron />

       </div> 
    );
  }
}

export default App;
