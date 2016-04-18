import React from 'react';
import { render } from 'react-dom';
import { Route, Router, hashHistory } from 'react-router';

const app = document.getElementById('app');

// Components
//---------------------------------------------------
import HomePage from './Components/HomePage';
import Post from './Components/Post';

// Router config
//---------------------------------------------------
render((
  <Router history={hashHistory}>
    <Route path="/" component={HomePage}>
      <Route path="/post/:id" component={Post} />
    </Route>
  </Router>
), app);
