import {connect} from 'react-redux';
import TopPage from './top_page';
import { logout } from '../../actions/session_actions';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  profile: state.session.active_profile,
  series: state.series,
  genres: state.genres
});


const mapDispatchToProps = (dispatch) => ({
  signout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopPage)
