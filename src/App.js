import React, { Component } from 'react';
import { Link } from 'react-router';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <nav>
        <h1>
          Hero Editor
        </h1>
        <Link to="heroes">Heroes</Link>
        <Link to="dashboard">Dashboard</Link>
      </nav>
    );
  }
}
