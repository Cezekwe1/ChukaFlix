import React from 'react';
import {getSeries} from '../actions/series_actions';
import {Provider} from 'react-redux';
import GenresContainer from './genres/genres_container';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import WelcomeContainer from './welcome/welcome_container';
import App from './app';

const Root = ({store}) => (

  <Provider store={store}>
    <Router history={ hashHistory }>
      <Route path = '/' component={ App }>
          <IndexRoute component={ WelcomeContainer }/>
          <Route path="/signin"
            component={ SessionFormContainer }
            onEnter={ _redirectIfLoggedIn }/>
          <Route path="/signup"
            component={ SessionFormContainer }
            onEnter={ _redirectIfLoggedIn }/>
      </Route>
    </Router>
  </Provider>

);
export default Root;
