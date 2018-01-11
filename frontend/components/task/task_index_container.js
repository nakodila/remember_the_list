import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as TaskActions from '../../actions/task_actions';
import TaskIndex from './task_index_component';


const mapStateToProps = (state, ownProps) => {
    let listId = null;
    if ( ownProps.match.path === "/lists/:id" ) {
          list: ownProps.match.params.id
        }
    return {
      errors: state.errors.task,
      // currentUserTasks: state.session.currentUser.taskIds,
      tasks: Object.values(state.tasks),
      listId: listId
    };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTasks: () => dispatch(TaskActions.fetchTasks()),
    fetchTask: (id) => dispatch(TaskActions.fetchTask(id)),
    createTask: (task) => dispatch(TaskActions.createTask(task)),
    updateTask: (id) => dispatch(TaskActions.updateTask(id)),
    deleteTask: (id) => dispatch(TaskActions.deleteTask(id)),
    clearTaskErrors: () => dispatch(TaskActions.clearTaskErrors()),
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TaskIndex));
