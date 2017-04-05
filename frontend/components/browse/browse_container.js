import {connect} from 'react-redux';
import Browse from './browse';
import { fetchGenres } from '../../actions/genre_actions'
import { login, signup, logout } from '../../actions/session_actions'



const mapStateToProps = ({genres, session:{active_profile}}) =>({
  genres,
  profile: active_profile
});


const mapDispatchToProps = (dispatch) =>({
  getGenres: () => dispatch(fetchGenres()),
  logout: () => dispatch(logout())
})


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Browse)
