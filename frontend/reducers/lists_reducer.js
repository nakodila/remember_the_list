import { RECEIVE_LISTS, RECEIVE_LIST, REMOVE_LIST } from "../actions/list_actions"


const listsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_LISTS:
    return action.lists;
    case RECEIVE_LIST:
    return merge({}, state, {[action.lists.id]: action.list});
    case REMOVE_LIST:
    let newState = state;
    delete newState[action.listId];
    return newState;
    default:
    return state;
  }
}

export default listsReducer;
