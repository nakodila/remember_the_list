import React from 'react';
import { Link } from 'react-router-dom';

const List = ({list, deleteList}) => (
  <li>
    <Link to={`/lists/${list.listId}`}>{list.title}</Link>
  </li>
);

export default List;
