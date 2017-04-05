import * as FA from '../util/favorite_api_util';

export const REMOVE_FAVORITE_SERIE = "REMOVE_FAVORITE_SERIE";
export const ADD_FAVORITE_SERIE = "ADD_FAVORITE_SERIE";


export const addFavoriteSerie = (serie) => ({
  type: ADD_FAVORITE_SERIE,
  serie
});

export const removeFavoriteSerie = (serie) => ({
  type: REMOVE_FAVORITE_SERIE,
  serie
});


export const createMyListItem = (serie, profile) => (dispatch) =>(
    FA.createFavorite(serie.id, profile.id).then(fav => dispatch(addFavoriteSerie(serie)))
);

export const removeMyListItem = (serie) => (dispatch) =>(
    FA.removeFavorite(serie.id).then(fav => dispatch(removeFavoriteSerie(serie)))
);
