import {combineReducers} from 'redux';
import seriesReducer from './series_reducer';
import genresReducer from './genres_reducer';
import SessionReducer from './session_reducer';
import SearchReducer from './search_reducer';


const rootReducer = combineReducers({
  series: seriesReducer,
  genres: genresReducer,
  session: SessionReducer,
  search: SearchReducer
});


export default rootReducer;
