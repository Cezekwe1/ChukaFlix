import {fetchSeries} from '../util/api_util'

export const RECEIVE_ALL_SERIES = 'RECEIVE_ALL_SERIES'

export const recieve_all_series = (series)  => ({
  type: RECEIVE_ALL_SERIES,
  series
});


export const getSeries = () => dispatch => (
  fetchSeries().then(series => dispatch(recieve_all_series(series)))
);
