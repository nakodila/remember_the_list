import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import * as SessionActions from './actions/session_actions';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store }/>, root);
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.login = SessionActions.login;
  window.signup = SessionActions.signup;
  window.logout = SessionActions.logout;
});
