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
            <div className="new-list-form">
              <form onSubmit={this.handleSubmit}>
                <div className="add-list-form edit-list-form">
                  <input
                    className="input-list"
                    type="text"
                    placeholder={this.props.list.title}
                    onChange={this.update('title')}/>
                  <div className="add-list">
                    <input className="add-list-p" type="submit" value="Rename List" />
                  </div>
                </div>
              </form>
            </div>

        </div>
      );
    }
}

export default ListEdit;
