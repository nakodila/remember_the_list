import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class TaskShow extends React.Component {
    constructor(props) {
      super(props);

      this.state = {body: ""};


      this.handleSubmit = this.handleSubmit.bind(this);
      this.update = this.update.bind(this);
    }

    componentDidMount () {
      this.props.fetchTask(this.props.match.params.id)
    }

    componentWillReceiveProps (newProps) {
      this.setState(newProps.task)
    }

    update() {
      return (e) =>{
        this.setState({ body: e.target.value });
      };
    }

    handleSubmit(e) {
      e.preventDefault();
      const newState = Object.assign({}, this.state);
      this.props.updateTask(newState);
      //then is to rewrite the body to an empty string after callback success,
      //we need to reset state to clear it of old values

    }

    // the field was not deleting text after updating the state: needed value field in the input
    render () {
      return (
        <div className="item-view task-view">
          <div className="new-list-form">
            <form onSubmit={this.handleSubmit}>
              <div className="add-item-show">
                <input
                  className="input-item-show"
                  type="text"
                  value={this.state.body}
                  placeholder={this.state.body}
                  onChange={this.update()}/>
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
