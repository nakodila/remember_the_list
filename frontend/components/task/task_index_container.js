import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as TaskActions from '../../actions/task_actions';
import TaskIndex from './task_index_component';
import { fetchListsTasks } from '../../actions/list_actions';


const mapStateToProps = (state, ownProps) => {

    return {
        errors: state.errors.task,
        tasks: Object.values(state.tasks) || {}
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
        fetchListsTasks: () => dispatch(fetchListsActions(listId))
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TaskIndex));
