import {fetchSeries} from '../util/genres_api_util';
import * as APIUtil from '../util/series_api_util';

export const RECEIVE_ALL_SERIES = 'RECEIVE_ALL_SERIES'
export const RECEIVE_SERIE = 'RECEIVE_SERIE'

export const recieve_all_series = (series)  => ({
  type: RECEIVE_ALL_SERIES,
  series
});

export const receiveSerie = (serie) => ({
  type: RECEIVE_SERIE,
  serie
});


export const getSeries = () => dispatch => (
  fetchSeries().then(series => dispatch(recieve_all_series(series)))
);

export function fetchSerie(id) {
  return (dispatch) => {
    return APIUtil.fetchGenre(id).then(
      (serie) => dispatch(receiveSerie(serie))
    );
  };
}
