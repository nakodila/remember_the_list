import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchTask, updateTask, createTask } from '../../actions/task_actions';
import TaskShow from './task_show';

const mapStateToProps = (state, ownProps) => {
  return {
    task: state.tasks[ownProps.match.params.id] || {}
    //when we rerender task show page it loses the state (it's being passed down from prev. clicks)
    //we pass an empty object so that when we refresh page on
    //the same task show page we don't break the page

  }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchTask: (id) => dispatch(fetchTask(id)),
    updateTask: (task) => dispatch(updateTask(task)),
  }
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskShow));
