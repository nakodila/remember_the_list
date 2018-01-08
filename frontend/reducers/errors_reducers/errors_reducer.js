import { combineReducers } from 'redux';
import session from './session_errors_reducer';
import list from './list_errors_reducer';

const errorsReducer = combineReducers({
  session,
  list
});

export default errorsReducer;
