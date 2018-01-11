import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchTask, updateTask, createTask } from '../../actions/task_actions';
import TaskShow from './task_show';

const mapStateToProps = (state, ownProps) => {
  return {
    task: state.tasks[ownProps.match.params.id]
  }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchTask: (id) => dispatch(fetchTask(id)),
    updateTask: (task) => dispatch(updateTask(task)),
    createTask: (task) => dispatch(createTask(task))
  }
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskShow));
