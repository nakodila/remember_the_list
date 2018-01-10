import { RECEIVE_LISTS, RECEIVE_LIST, REMOVE_LIST } from "../actions/list_actions";
import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import merge from 'lodash/merge';


const listsReducer = (state = {}, action) => {
  let newState;
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_LISTS:
    return action.lists;
    case RECEIVE_LIST:
    return merge({}, state, {[action.list.id]: action.list});
    case REMOVE_LIST:
    newState = merge({}, state);
    delete newState[action.listId];
    return newState;
    case RECEIVE_CURRENT_USER:
    newState = merge({}, state);
    if (action.payload.user === null){
      newState = merge({}, { lists : null });
      }
    return newState;
    default:
    return state;
  }
}

export default listsReducer;
