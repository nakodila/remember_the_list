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
    this.props.createTask(this.state).then(() => this.setState({ body: "" }));
  }

  render () {
    return (
      <div>
        <div className="new-list-form">
          <form onSubmit={this.handleSubmit}>
            <div className="add-list-form add-task-form">
              <input
                className="input-list input-task"
                type="text"
                onChange={this.update('body')}
                value={this.state.body}
                placeholder="Add new task"/>
              <div className="add-task add-list">
                <input type="submit" value="Add Task" />
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(NewTaskForm);
