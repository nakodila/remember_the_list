import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class ListEdit extends React.Component {
  constructor(props) {
    super(props);
    let list = props.list
    this.state = list

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
      this.props.updateList(this.state);
    }

    render () {
      return (
        <div className="item-view">
          <form onSubmit={this.handleSubmit}>
              <input type="text"
                placeholder={this.props.list.title}
                onChange={this.update('title')}/>
              <input type="submit" value="Rename List" />
          </form>
        </div>
      );
    }
}

export default ListEdit;
