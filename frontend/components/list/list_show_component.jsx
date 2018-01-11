import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import NewTaskForm from '../task/new_task_form_container';

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
    const curList = this.props.list;
    return (
      <div>
        <h3>{curList.title}</h3>
        <h4>Add New Task</h4>
        <NewTaskForm listId={curList.id}/>
      </div>
    );
  }
}

export default withRouter(ListShow);
