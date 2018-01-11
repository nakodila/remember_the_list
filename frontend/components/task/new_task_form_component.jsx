import React from 'react';
import { withRouter } from 'react-router';

class NewTaskForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createTask(this.state).then(() => this.props.history.push('/'));
  }

  getListId() {
    return ownProps.match.params.id
  }

  render () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Add New Task
            <input
              type="text"
              value={this.state.body}
              onChange={this.update('body')} />
          </label>
          <input type="submit" value="Add Task" />
        </form>
      </div>
    );
  }
}

export default withRouter(NewTaskForm);
