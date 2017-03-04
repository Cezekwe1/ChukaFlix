import {combineReducers} from 'redux';
import seriesReducer from './series_reducer';
import genresReducer from './genres_reducer';



const rootReducer = combineReducers({
  series: seriesReducer,
  genres: genresReducer
});


export default rootReducer;
