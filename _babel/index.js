import React from 'react';
import { render } from 'react-dom';
import { Route, Router, browserHistory } from 'react-router';

const app = document.getElementById('app');

// Components
//---------------------------------------------------
import HomePage from './Components/HomePage';
import Post from './Components/Post';
import FourOFour from './Components/FourOFour';

import Archives from './Components/Archives/Archives';

// Router config
//---------------------------------------------------
render((
  <Router history={browserHistory}>
    <Route path="/" component={HomePage}>
      <Route path="/:y/:m/:d/:slug" component={Post} />
      <Route path="/category/:slug" component={Archives} />
      <Route path="/tag/:slug" component={Archives} />
    </Route>
    <Route path="*" component={FourOFour} />
  </Router>
), app);
