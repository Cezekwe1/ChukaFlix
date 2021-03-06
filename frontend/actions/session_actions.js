import * as SA from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS'
export const CLEAR_ERRORS = 'CLEAR_ERRORS'


export const login =(user) => dispatch => (
  SA.logIn(user).then( currentUser => dispatch(receiveCurrentUser(currentUser)),
  err => dispatch(receiveErrors(err.responseJSON)))

);

export const signup =(user) => dispatch => (
  SA.signUp(user).then(currentUser => dispatch(receiveCurrentUser(currentUser)),
  err => dispatch(receiveErrors(err.responseJSON)))
)

export const logout = () => dispatch => (
  SA.logOut().then(user => dispatch(receiveCurrentUser(null)))
)

export const clearErrors = () => ({
  type: CLEAR_ERRORS
});

export const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});
