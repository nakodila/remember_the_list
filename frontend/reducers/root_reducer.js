import {combineReducers} from 'redux';
import sessionReducer from './session_reducer';
import listsReducer from './lists_reducer';
import tasksReducer from './tasks_reducer';
import errorsReducer from './errors_reducers/errors_reducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  errors: errorsReducer,
  lists: listsReducer,
  tasks: tasksReducer,
});

export default rootReducer;
