import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class ListEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.list

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
      const list = Object.assign({}, this.state, {id: this.props.list.id})
      //This line is for when you refresh the page. It looses the state and can't fetch the list because the id is gone
      this.props.updateList(list).then(() => this.setState({ title: "" }));
    }

    render () {
      return (
        <div className="item-view">
            <div className="new-list-form">
              <form onSubmit={this.handleSubmit}>
                <div className="add-list-form edit-list-form">
                  <input
                    className="input-list edit-list"
                    type="text"
                    value={ this.state.title }
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
