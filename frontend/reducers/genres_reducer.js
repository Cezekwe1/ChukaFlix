  import {RECEIVE_ALL_GENRES} from '../actions/genre_actions';
  import {merge} from 'lodash';

  const GenresReducer = (state = [], action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_ALL_GENRES:
      return action.genres;
    default:
      return state;
  }
};


  export default GenresReducer;
