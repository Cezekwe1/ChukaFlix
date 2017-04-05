import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS, CLEAR_ERRORS } from '../actions/session_actions';
import { REMOVE_FAVORITE_SERIE, ADD_FAVORITE_SERIE } from '../actions/favorite_actions';
import { SELECTED_PROFILE} from '../actions/profile_actions';
import { RECEIVE_SERIE } from '../actions/series_actions';
import merge from 'lodash/merge';

const initialState = {
  currentUser: null,
  errors: [],
  active_profile: "no profile"
};

const SessionReducer = (state = initialState, action) => {
  let newState = merge({}, state);
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return { currentUser: action.currentUser, errors: [] , active_profile: "no profile"};
    case RECEIVE_ERRORS:
      return { currentUser: null, errors: action.errors, active_profile: "no profile" };
    case CLEAR_ERRORS:
      newState.errors = [];
      return newState;
    case ADD_FAVORITE_SERIE:
      let previousFavorites = newState.active_profile.favorites.series;
      let newFavorites = [action.serie, ...previousFavorites];
      newState.active_profile.favorites.series = newFavorites;
      return newState;
    case REMOVE_FAVORITE_SERIE:
      previousFavorites = newState.active_profile.favorites.series;
      newState.active_profile.favorites.series = previousFavorites.filter((serie) => {
        return serie.id !== action.serie.id;
      });
      return newState;
    case RECEIVE_SERIE:
      return newState;
    case SELECTED_PROFILE:
      let sp = {active_profile: action.profile}
      return merge(newState,sp);
    default:
      return state;
  }
};

export default SessionReducer;
