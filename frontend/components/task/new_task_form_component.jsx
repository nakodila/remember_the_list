import React from 'react';
import { withRouter } from 'react-router';

class NewTaskForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: "",
      list_id: null
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  update(field) {
    return (e) =>{
      this.setState({[field]: e.target.value, list_id: this.props.listId});
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createTask(this.state);
  }

  render () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
            <input type="text"
              onChange={this.update('body')}
              placeholder="Add new task"/>
          <input type="submit" value="Add Task" />
        </form>
      </div>
    );
  }
}

export default withRouter(NewTaskForm);
