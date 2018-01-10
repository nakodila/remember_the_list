import { combineReducers } from 'redux';
import { TOGGLE_MODAL } from '../actions/modal_actions';

const modalReducer = (state = '', action) => {
  Object.freeze(state);
  switch (action.type) {
    case TOGGLE_MODAL:
      return action.payload;
    default:
      return state;
  }
};

export default modalReducer;
