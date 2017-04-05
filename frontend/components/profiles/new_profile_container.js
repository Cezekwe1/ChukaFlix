import {connect} from 'react-redux';
import NewProfile from './new_profile';
import { selectProfile, selectCurrentProfile, createProfile } from '../../actions/profile_actions'


const mapStateToProps = () => ({

})


const mapDispatchToProps = (dispatch) =>({
 makeProfile: (name) => dispatch(createProfile(name))
})


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NewProfile)
