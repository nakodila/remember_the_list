import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import DoneTask from './done_task_container';

const Task = ({task, deleteTask}) => {
    return (
      <li>
        <DoneTask task={task}/>
        <Link to={`/tasks/${task.id}/edit`}>{task.body}</Link>
        <i className="fa fa-trash" aria-hidden="true" onClick={() => deleteList(task.id)}></i>
      </li>
  );
};

export default withRouter(Task);
