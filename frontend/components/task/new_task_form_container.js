import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import NewTaskForm from './new_task_form_component';
import { createTask } from '../../actions/task_actions';

const mapDispatchToProps = (dispatch) => {
    return {
        createTask: task => dispatch(createTask(task))
    };
};

export default withRouter(connect(
    null,
    mapDispatchToProps
)(NewTaskForm));
