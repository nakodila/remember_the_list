import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const List = ({list, deleteList}) => (
  <li>
    <Link to={`/lists/${list.id}`}>{list.title}</Link>
    <Link to={`/lists/${list.id}/edit`}>Edit</Link>
    <button onClick={() => deleteList(list.id)}>Delete</button>
  </li>
);

export default withRouter(List);
