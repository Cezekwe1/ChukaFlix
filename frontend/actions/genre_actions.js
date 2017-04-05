import {getGenres,getGenre} from '../util/genres_api_util';
export const RECEIVE_ALL_GENRES = 'RECEIVE_ALL_GENRES';
export const RECEIVE_GENRE = "RECEIVE_GENRE";



export const receiveAllGenres = (genres) => ({
  type: RECEIVE_ALL_GENRES,
  genres
})

export const receiveGenre = (genre) => ({
  type: RECEIVE_GENRE,
  genre
});

export const fetchGenres = () => dispatch => (
  getGenres().then(genres => dispatch(receiveAllGenres(genres)))
);


export const fetchGenre = (id) => dispatch => (
  getGenre(id).then(genre => dispatch(receiveGenre(genre)))
);
