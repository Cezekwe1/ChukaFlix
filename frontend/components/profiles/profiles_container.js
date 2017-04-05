import {connect} from 'react-redux';
import Profiles from './profiles';
import { selectProfile, selectCurrentProfile, createProfile, deleteProfile } from '../../actions/profile_actions'

const mapStateToProps = ({session}) => ({
  profiles: session.currentUser.profiles,
  session
});


const mapDispatchToProps = dispatch => ({
  pickProfile: (profile) => dispatch(selectCurrentProfile(profile)),
  deleteProfile: (id) => dispatch(deleteProfile(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profiles);
