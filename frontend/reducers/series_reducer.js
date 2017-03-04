import {RECEIVE_ALL_SERIES} from '../actions/series_actions';
import {merge} from 'lodash';

const intial_state = {session: "this is the seesion"}

 const seriesReducer = (state = intial_state, action) => {
   switch (action.type) {
     case RECEIVE_ALL_SERIES:
       return merge({},action.series)
     default:
       return state
   }
 }


 export default seriesReducer;
