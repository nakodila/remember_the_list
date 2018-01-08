import React from 'react';
import { Link } from 'react-router-dom';
import List from './list_index_item';


class ListIndex extends React.Component {
  componentDidMount() {
    this.props.fetchLists();
  }
  render() {
    let lists = this.props.lists.map((list) => {
      return <List list={list} key={list.id} deleteList={this.props.deleteList}/>;
    });
    return (
      <div>
        <a className="listNav" href="#">Lists</a>
        <ul>{lists}</ul>
        <Link to={`/lists/new`}>Link to New Form</Link>
      </div>
    );
  };
};

export default ListIndex;
