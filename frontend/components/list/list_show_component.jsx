import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class ListShow extends React.Component {
  componentDidMount() {
    this.props.fetchList(this.props.match.params.id);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.id !== nextProps.match.params.id) {
      return this.props.fetchList(nextProps.match.params.id);
    }
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
