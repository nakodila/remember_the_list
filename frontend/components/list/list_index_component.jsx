import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import List from './list_index_item';
import ListFormContainer from "./list_form_container";


class ListIndex extends React.Component {
  componentDidMount() {
    this.props.fetchLists();
  }
  render() {

    let lists = this.props.lists.map((list) => {
      return <List list={list} key={list.id}
              deleteList={this.props.deleteList}
              updateList={this.props.updateList}
            />;
    });
    return (
      <div>
        <h2>Lists</h2>
        <ListFormContainer />
        <ul>{lists}</ul>
      </div>
    );
  };
};

export default withRouter(ListIndex);
