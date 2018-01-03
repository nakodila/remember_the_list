import * as SessionApiUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS= 'RECEIVE_SESSION_ERRORS';

export const login = (user) => {
  return SessionApiUtil.login(user).then(
    user => (dispatch(receiveCurrentUser(user))),
    err => (dispatch(receiveErrors(err.responseJSON)))
)};

export const signup = (user) => {
  return SessionApiUtil.signup(user).then(
    user => (dispatch(receiveCurrentUser(user))),
    err => (dispatch(receiveErrors(err.responseJSON)))
)};

export const logout = (user) => {
  return SessionApiUtil.logout(user).then(
    user => (dispatch(receiveCurrentUser(user))),
    err => (dispatch(receiveErrors(err.responseJSON)))
)};

const receiveCurrentUser = (user) => {
  return {
    type: 'RECEIVE_CURRENT_USER',
    currentUser
  };
};

const receiveErrors = (errors) => {
  return {
    type: 'RECEIVE_SESSION_ERRORS',
    errors
  }
}
