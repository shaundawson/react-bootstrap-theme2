import React, { Component } from "react";
import "./style.css";

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Navbar from "../Navbar";
import Bio from "../Bio";
import Projects from "../Projects";
import Live from "../Live";
import Contact from "../Contact";
import Hero from "../Hero";
import Footer from "../Footer";

class App extends Component {
  render() {
    return (
    <Router>
        <div>
        <Navbar/>
          <Switch>
              <Route exact path='/' component={Hero} />
              <Route path='/bio' component={Bio} />
              <Route path='/projects' component={Projects} />
              <Route path='/live' component={Live} />
              <Route path='/contact' component={Contact} />
          </Switch>
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;