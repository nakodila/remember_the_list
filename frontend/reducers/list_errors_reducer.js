import {
  RECEIVE_LIST_ERRORS,
} from '../actions/list_actions';

const listErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_LIST_ERRORS:
      return action.errors;
    default:
      return state;
  }
};

export default listErrorsReducer;
