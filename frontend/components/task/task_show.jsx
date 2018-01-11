import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class TaskShow extends React.Component {
  constructor(props) {
    super(props);
    let task = props.task
    this.state = task

    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

    update(field) {
      return (e) =>{
        this.setState({[field]: e.target.value});
      };
    }

    handleSubmit(e) {
      e.preventDefault();
      debugger
      this.props.updateTask(this.state);
    }

    render () {
      debugger
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
              <input type="text"
                placeholder={this.props.task.body}
                onChange={this.update('body')}/>
              <input type="submit" value="Rename Task" />
          </form>
        </div>
      );
    }
}

export default TaskShow;
