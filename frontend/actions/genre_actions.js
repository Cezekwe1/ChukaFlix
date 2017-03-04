import {getGenres} from '../util/api_util'

export const RECEIVE_ALL_GENRES = 'RECEIVE_ALL_GENRES'



export const receiveAllGenres = (genres) => ({
  type: RECEIVE_ALL_GENRES,
  genres
})


export const fetchGenres = () => dispatch => (
  getGenres().then(genres => dispatch(receiveAllGenres(genres)))
);
