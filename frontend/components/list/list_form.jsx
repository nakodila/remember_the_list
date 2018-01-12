import React from 'react';

class ListForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = this.props.list;
  }

  componentDidMount() {
    if (this.props.match.params.listId) {
      this.props.fetchList(this.props.match.params.listId);
    }
  }

  componentWillReceiveProps(newProps) {
    this.setState(newProps.list);
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.state).then(() => this.props.history.push('/'));
  }

  render () {
    const text = this.props.formType === 'new' ? "Add a list" : "Rename List";
    const placeholder_text = this.props.formType === 'new' ? "New list name" : "";
    return (
      <div className="new-list-form">
        <form onSubmit={this.handleSubmit}>
          <div className="add-list-form">
            <input
              className="input-list"
              type="text"
              value={this.state.title}
              placeholder={placeholder_text}
              onChange={this.update('title')} />
            <div className="add-list">
              <input className="add-list-p" type="submit" value="add" />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default ListForm;
