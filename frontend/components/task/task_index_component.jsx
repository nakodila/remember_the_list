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
        let listId = parseInt(this.props.location.pathname.slice(7));
        return (
            <div className="task-index">
              <div className="task-index-inner">
                <NewTaskForm listId={ listId } />
                <h2 className="h1-T">All Tasks</h2>
                <div className="task-ul">
                  <ul>{tasks}</ul>
                  <div className="task-item"></div>
                  <div className="task-item"></div>
                  <div className="task-item"></div>
                  <div className="task-item"></div>
                  <div className="task-item"></div>
                  <div className="task-item"></div>
                  <div className="task-item"></div>
                  <div className="task-item"></div>
                  <div className="task-item"></div>
                  <div className="task-item"></div>
                  <div className="task-item"></div>
                  <div className="task-item"></div>
                  <div className="task-item"></div>
                  <div className="task-item"></div>
                  <div className="task-item"></div>
                  <div className="li-task-nil">
                      <div className="task-item"></div>
                      <div className="task-item"></div>
                      <div className="task-item"></div>
                      <div className="task-item"></div>
                      <div className="task-item"></div>
                      <div className="task-item"></div>
                  </div>
                </div>
              </div>
            </div>
        );

    };
};

export default withRouter(TaskIndex);

// <TaskFormContainer />
