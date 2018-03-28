import React, { Component } from 'react'
import { NavLink, BrowserRouter as Router } from 'react-router-dom'
import { Route } from 'react-router'
import Dashboard from './containers/Dashboard'
import Heroes from './containers/Heroes'
import HeroDetail from './containers/HeroDetail'
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
            <NavLink to="/heroes">Heroes</NavLink>
            <NavLink exact to="/">Dashboard</NavLink>
          </nav>
          <div>
            <Route exact path="/" component={Dashboard}/>
            <Route path="/heroes" component={Heroes}/>
            <Route path="/hero/:id" component={HeroDetail}/>
          </div>
        </div>
      </Router>
    );
  }
}
