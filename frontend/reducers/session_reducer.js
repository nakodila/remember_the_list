import merge from 'lodash/merge';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

const _nullUser = Object.freeze({
  currentUser: null
});

const sessionReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
    return merge({}, { currentUser: action.payload.user });
    default:
    return state;
  }
};




// const oldState = Object.freeze({
//   currentUser: null
// });
//
//
// const sessionReducer = function(state=oldState, action){
//   Object.freeze(state);
//   switch (action.type) {
//     case RECEIVE_CURRENT_USER:
//       let newState = merge({}, state);
//       //newState.payload will be null when user logs out
//       if(action.payload === null){
//         return null;
//       }
//       newState.currentUser = action.payload.user;
//       return newState;
//     default:
//       return state;
//   }
// };
export default sessionReducer;
