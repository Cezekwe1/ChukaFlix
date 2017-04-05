import {setCurrentProfile, makeProfile, destroyProfile} from '../util/profile_api_util';
import {receiveCurrentUser} from './session_actions'

export const SELECTED_PROFILE = 'SELECTED_PROFILE';


export const selectCurrentProfile = (profile) => (dispatch) =>(
  setCurrentProfile(profile).then((prof)=> dispatch(selectProfile(prof)))
)

export const  createProfile = (name) => (dispatch) =>(
  makeProfile(name).then((user)=> dispatch(receiveCurrentUser(user)))
)

export const  deleteProfile = (id) => (dispatch) =>(
  destroyProfile(id).then((user)=> dispatch(receiveCurrentUser(user)))
)



export const selectProfile = (profile) => ({
  type: SELECTED_PROFILE,
  profile
});
