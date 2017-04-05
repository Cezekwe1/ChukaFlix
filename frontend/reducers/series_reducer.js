import { RECEIVE_SERIE } from '../actions/series_actions';
import { REMOVE_FAVORITE_SERIE, ADD_FAVORITE_SERIE } from '../actions/favorite_actions';
import { UPDATE_RATING, CREATE_RATING, RECEIVE_AVG_RATING } from '../actions/review_actions';
import merge from 'lodash/merge';

const SeriesReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_SERIE:
      return action.serie;
    default:
      return state;
  }
};

export default SeriesReducer;
