import * as APIUtil from '../util/session_api_util'

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_SESSION_ERRORS = 'CLEAR_SESSION_ERRORS';

export const receiveCurrentUser = payload => ({
  type: RECEIVE_CURRENT_USER,
  payload
});

export const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const clearSessionErrors = () => ({
  type: CLEAR_SESSION_ERRORS
})

export const signup = function(user){
  return function(dispatch){
    return APIUtil.signup(user).then((payload) => {
      dispatch(receiveCurrentUser(payload)); dispatch(clearSessionErrors);
    },(err) => {
      dispatch(receiveErrors(err.responseJSON));
    });
  };
};

export const login = user => dispatch => (
  APIUtil.login(user).then(payload => {
    dispatch(receiveCurrentUser(payload)); dispatch(clearSessionErrors);
  }, err => {
    dispatch(receiveErrors(err.responseJSON))
  })
);

export const logout = () => dispatch => (
  APIUtil.logout().then(() => (
    dispatch(receiveCurrentUser({user: null}))
  ))
);
