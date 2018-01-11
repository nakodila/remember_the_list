import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const Task = ({task, deleteTask}) => (
  <li>
    <Link to={`/tasks/${task.id}`}>{task.body}</Link>
    <Link to={`/tasks/${task.id}/edit`}>Edit</Link>
    <button onClick={() => deleteTask(task.id)}>Delete</button>
  </li>
);

export default withRouter(Task);
