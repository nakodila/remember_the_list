import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import DoneTask from './done_task_container';

const Task = ({task, deleteTask}) => {
    return (
      <li>
        <DoneTask task={task}/>
        <Link to={`/tasks/${task.id}/edit`}>{task.body}</Link>
        <button onClick={() => deleteTask(task.id)}>Delete</button>
      </li>
  );
};

export default withRouter(Task);
