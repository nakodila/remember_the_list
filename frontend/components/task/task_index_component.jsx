import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Task from './task_index_item';
import NewTaskForm from '../task/new_task_form_container';
import TaskIndexContainer from '../task/task_index_container';
// import TaskFormContainer from "./task_form_container";


class TaskIndex extends React.Component {
    componentDidMount() {
        this.props.fetchTasks();
    }

    render() {
        let tasks = this.props.tasks.map((task) => {
            return <Task task={task} key={task.id}
                deleteTask={this.props.deleteTask}
                updateTask={this.props.updateTask}
                />;
        });
        let listId = this.props.ListId;
        return (
            <div>
                <h4>Add Task</h4>
                <NewTaskForm listId={ listId } />
                <h2>Tasks</h2>
                <ul>{tasks}</ul>
            </div>
        );

    };
};

export default withRouter(TaskIndex);

// <TaskFormContainer />
