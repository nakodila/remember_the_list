import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import DoneTask from './done_task_container';

const Task = ({task, deleteTask}) => {
    return (
      <li className="task-item task-li">
        <DoneTask task={task}/>
        <i className="fa fa-task fa-trash" aria-hidden="true" onClick={() => deleteTask(task.id)}></i>
        <div className="task-title">
          <Link to={`/tasks/${task.id}/edit`}>{task.body}</Link>
        </div>
      </li>
  );
};

export default withRouter(Task);
