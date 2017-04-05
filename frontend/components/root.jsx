import React from 'react';
import {getSeries} from '../actions/series_actions';
import {Provider} from 'react-redux';
import GenresContainer from './genres/genres_container';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import WelcomeContainer from './welcome/welcome_container';
import SessionFormContainer from './session/session_form_container';
import BrowseContainer from './browse/browse_container';
import SearchContainer from './search/search_container';
import ProfileContainer from './profiles/profiles_container';
import NewProfileContainer from './profiles/new_profile_container';

import App from './app';

const Root = ({store}) => {

    const _redirectIfLoggedIn = (nextState,replace) => {

      const currentUser = store.getState().session.currentUser;
      const cp = store.getState().session.active_profile;

      if (currentUser){
        replace('/browse');
      }
    };

   const _redirectIfLoggedOut = (nextState,replace) => {

    const currentUser = store.getState().session.currentUser;
    const cp = store.getState().session.active_profile;

      if(!currentUser){
        replace('/');
      }
   };


   const _redirectIfNoProfile = (nextState,replace) => {

      const cp = store.getState().session.active_profile;
      const currentUser = store.getState().session.currentUser;

          if(cp === "no profile"){
            replace("/profiles")
          }
   }

  return(
    <Provider store={store}>
      <Router history={ hashHistory }>
        <Route path = '/' component={ App } >
            <IndexRoute component={ WelcomeContainer } onEnter={_redirectIfLoggedIn} />
            <Route path="/signin"
              component={ SessionFormContainer }
              onEnter={_redirectIfLoggedIn}/>
            <Route path="/signup"
              component={ SessionFormContainer }
              onEnter={_redirectIfLoggedIn}/>
            <Route path="/profiles"
              component={ ProfileContainer }
              onEnter={_redirectIfLoggedOut}/>
              <Route path="/new_profile"
                component={ NewProfileContainer }
                onEnter={_redirectIfLoggedOut}/>
            <Route path ="/browse"
              component={ BrowseContainer}
              onEnter={_redirectIfNoProfile}/>
            <Route path= "/search"
              component={SearchContainer}
              onEnter={_redirectIfNoProfile}/>
        </Route>
      </Router>
    </Provider>
  );
};
export default Root;
