import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';
import HomePage from './Home';
import FlowPage from './Flow';
import MindPage from './Mind';
import KoniPage from './Koni';

ReactDOM.render(
  <Router>
  	<Route path="/" exact component={HomePage} />
    <Route path="/flow" component={FlowPage} />
    <Route path="/mind" component={MindPage} />
    <Route path="/koni" component={KoniPage} />
  </Router>,
  document.getElementById('root'),
);
