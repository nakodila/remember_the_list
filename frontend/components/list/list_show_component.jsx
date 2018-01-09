import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class ListShow extends React.Component {
  componentDidMount() {
    debugger
    this.props.fetchList(this.props.match.params.listId);
  }

  componentWillReceiveProps(nextProps) {
    this.props.fetchList(nextProps.match.params.listId);
  }

  render () {
    const list = this.props.list;
    return (
      <div>
        <h3>{list.title}</h3>
      </div>
    );
  }
}

export default withRouter(ListShow);
