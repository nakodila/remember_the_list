import React from 'react';
import ReactDOM from 'react-dom';
import { login, logout, signup } from './util/session_api_util.js';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  const root = document.getElementById('root');
  ReactDOM.render(<h1>Welcome to Remember List</h1>, root);
  window.login = login;
  window.logout = logout;
  window.signup = signup;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
});
