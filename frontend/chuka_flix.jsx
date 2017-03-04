import React from 'react';
import ReactDOM from 'react-dom'
import Root from './components/root'
import configureStore from './store/store'
import {getSeries} from './actions/series_actions'
import {fetchGenres} from './actions/genre_actions'


  document.addEventListener("DOMContentLoaded", () => {
  window.store = configureStore();
  window.getSeries = getSeries();
  window.fetchGenres = fetchGenres();
  const store = configureStore();
  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store}/>,root)
  });
