import Search from './search';
import { connect } from 'react-redux';
import { searchTitles } from '../../actions/search_actions';
import { createMyListItem, removeMyListItem } from '../../actions/favorite_actions';
import { updateRating, createRating, updateBody, createBody } from '../../actions/review_actions';

const mapStateToProps = (state, { router }) => ({
  searchedTitles: state.search.titles,
  currentUser: state.session.currentUser,
  favorites: state.session.active_profile.favorites ? state.session.active_profile.favorites : { series: [] },
  active_profile: state.session.active_profile ,
  router
});

const mapDispatchToProps = (dispatch) => ({
  searchTitles: (queryString) => dispatch(searchTitles(queryString)),
  createMyListItem: (serie,profile) => dispatch(createMyListItem(serie,profile)),
  removeMyListItem: (serie) => dispatch(removeMyListItem(serie)),
  updateRating: (reviewId, rating = 0) => dispatch(updateRating(reviewId, rating)),
  createRating: (serie) => dispatch(createRating(serie)),
  updateReviewBody: (reviewId, body, rating = 0) => dispatch(updateBody(reviewId, body, rating)),
  createReviewBody: (serie) => dispatch(createBody(serie))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
