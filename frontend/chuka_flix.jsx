import React from 'react';
import ReactDOM from 'react-dom'
import Root from './components/root'
import configureStore from './store/store'
import {getSeries} from './actions/series_actions'
import {fetchGenres} from './actions/genre_actions'
import * as SA from './util/session_api_util'
import Modal from 'react-modal';

  document.addEventListener("DOMContentLoaded", () => {
  window.store = configureStore();
  window.getSeries = getSeries();
  window.fetchGenres = fetchGenres();
  window.login = SA.logIn;
  window.logout = SA.logOut;
  let store;

  if (window.currentUser){

    if(window.active_profile){
       let preloadedState = {session : {currentUser: window.currentUser, active_profile: window.active_profile}};
       store = configureStore(preloadedState);
     }else{
       let preloadedState = {session : {currentUser: window.currentUser, active_profile: "no profile" }};
       store = configureStore(preloadedState);
     }
  }else{
    store = configureStore();
  }

  Modal.setAppElement(document.body);
  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store}/>,root)
  });
