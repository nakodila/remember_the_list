import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import DoneTask from './done_component';
import { createTask, updateTask } from '../../actions/task_actions';

// const mapStateToProps = (state, ownProps) => {
//   return {
//     task: state.tasks[ownProps.match.params.id]
//   };
// };

const mapDispatchToProps = (dispatch) => {
    return {
        updateTask: id => dispatch(updateTask(id)),
        fetchTask: id => dispatch(fetchTask(id))
    };
};

export default withRouter(connect(
  null,
    // mapStateToProps,
    mapDispatchToProps
)(DoneTask));
