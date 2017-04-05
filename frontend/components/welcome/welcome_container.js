import {connect} from 'react-redux';
import Welcome from './welcome'
import { logout, login } from '../../actions/session_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
})


const mapDispatchToProps = (dispatch) => ({
    signout: () => dispatch(logout()),
    signin: (user) => dispatch(login(user)),
})


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Welcome)
