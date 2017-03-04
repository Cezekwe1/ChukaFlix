  import {RECEIVE_ALL_GENRES} from '../actions/genre_actions';
  import {merge} from 'lodash';

  const initialState = {session: "nothing"}


  const genresReducer = (state = initialState, action) => {

    switch (action.type) {
      case RECEIVE_ALL_GENRES:
        return merge({},action.genres);
      default:
        return state
    }






  };

  export default genresReducer;
