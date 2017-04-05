import { connect } from 'react-redux';
import Serie from './serie';
import { updateRating, createRating, updateBody, createBody } from '../../actions/review_actions';
import { receiveSerie } from '../../actions/series_actions';
import { fetchGenres } from '../../actions/genre_actions';

const mapStateToProps = ({ genres, series ,session: { currentUser, active_profile} }) => ({
  currentUser,
  series,
  genres
});

const mapDispatchToProps = (dispatch) => ({
  updateRating: (reviewId, rating = 0) => dispatch(updateRating(reviewId, rating)),
  createRating: (serie) => dispatch(createRating(serie)),
  updateReviewBody: (reviewId, body, rating = 0) => dispatch(updateBody(reviewId, body, rating)),
  createReviewBody: (serie) => dispatch(createBody(serie)),
  receiveSerie: (serie) => dispatch(receiveSerie(serie)),
  fetchGenres: () => dispatch(fetchGenres())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Serie);
