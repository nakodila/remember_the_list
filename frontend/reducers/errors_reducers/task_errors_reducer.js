import {
  RECEIVE_TASK_ERRORS,
  CLEAR_TASK_ERRORS,
} from '../../actions/list_actions';

const listErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_TASK_ERRORS:
      return action.errors;
    case CLEAR_TASK_ERRORS:
      return [];
    default:
      return state;
  }
};

export default listErrorsReducer;
