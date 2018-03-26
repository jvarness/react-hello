import React, { Component } from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router';
import Dashboard from './components/Dashboard';
import Heroes from './components/Heroes';
import Welcome from './components/Welcome';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <h1>
              Hero Editor
            </h1>
            <Link to="heroes">Heroes</Link>
            <Link to="dashboard">Dashboard</Link>
          </nav>
          <div>
            <Route exact path="/" component={Welcome}/>
            <Route path="/dashboard" component={Dashboard}/>
            <Route path="/heroes" component={Heroes}/>
          </div>
        </div>
      </Router>
    );
  }
}
