import React, { Component } from 'react'
import { Link, BrowserRouter as Router } from 'react-router-dom'
import { Route } from 'react-router'
import Dashboard from './containers/Dashboard'
import Heroes from './containers/Heroes'
import './App.css'

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <h1>
              Hero Editor
            </h1>
            <Link to="/heroes">Heroes</Link>
            <Link to="/">Dashboard</Link>
          </nav>
          <div>
            <Route exact path="/" component={Dashboard}/>
            <Route path="/heroes" component={Heroes}/>
          </div>
        </div>
      </Router>
    );
  }
}
