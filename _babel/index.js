import React from 'react';
import { render } from 'react-dom';
import { Route, Router, browserHistory } from 'react-router';

const app = document.getElementById('app');

// Components
//---------------------------------------------------
import HomePage from './Components/HomePage';
import Post from './Components/Post';

// Router config
//---------------------------------------------------
render((
  <Router history={browserHistory}>
    <Route path="/" component={HomePage}>
      <Route path="/post/:id(/:slug)" component={Post} />
    </Route>
    <Route path="*" component={HomePage} />
  </Router>
), app);
