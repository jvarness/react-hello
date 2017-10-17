import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './components/Dashboard';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import './index.css';
import App from './App';

ReactDOM.render((
    <Router history={browserHistory}>
        <Route path="/" component={App} >
            <IndexRoute component={Dashboard}/>
            <Route path="dashboard" component={Dashboard}/>
        </Route>
    </Router>
), document.getElementById('root'));
