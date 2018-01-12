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
      this.props.updateTask(this.state);

    }

    // let list = this.task.list_id;
    render () {
      debugger
      return (
        <div className="item-view task-view">
          <div className="new-list-form">
            <form onSubmit={this.handleSubmit}>
              <div className="add-item-show">
                <input
                  className="input-item-show"
                  type="text"
                  value={this.props.task.body}
                  placeholder={this.props.task.body}
                  onChange={this.update('body')}/>
                <div className="add-list">
                  <input className="add-list-p" type="submit" value="Rename Task" />
                </div>
              </div>
            </form>
          </div>
        </div>
      );
    }
}

export default TaskShow;
