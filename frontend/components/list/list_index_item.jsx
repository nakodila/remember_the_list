import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const List = ({list, deleteList}) => (
  <li>
    <div className="list-li">
      <div className="list-li-inner">
        <Link to={`/lists/${list.id}`}>{list.title}</Link>
        <i className="fa fa-trash" aria-hidden="true" onClick={() => deleteList(list.id)}></i>
      </div>
    </div>
  </li>
);

export default withRouter(List);

// <button onClick={() => deleteList(list.id)}>Delete</button>
