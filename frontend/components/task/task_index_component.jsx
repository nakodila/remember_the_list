import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Task from './task_index_item';
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
        return (
            <div>
                <h2>Tasks</h2>
                <ul>{tasks}</ul>
            </div>
        );

    };
};

export default withRouter(TaskIndex);

// <TaskFormContainer />
