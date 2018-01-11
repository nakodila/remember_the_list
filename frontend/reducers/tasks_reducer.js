import { RECEIVE_TASKS, RECEIVE_TASK, REMOVE_TASK } from "../actions/task_actions";
import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import merge from 'lodash/merge';


const tasksReducer = (state = {}, action) => {
  let newState;
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_TASKS:
    return action.tasks;
    case RECEIVE_TASK:
    return merge({}, state, {[action.task.id]: action.task});
    case REMOVE_TASK:
    newState = merge({}, state);
    delete newState[action.taskId];
    return newState;
    default:
    return state;
  }
}

export default tasksReducer;
