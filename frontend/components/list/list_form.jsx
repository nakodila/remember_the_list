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
    return (
      <div>
        <h3>{text}</h3>
        <form onSubmit={this.handleSubmit}>
          <label>Title
            <input
              type="text"
              value={this.state.title}
              onChange={this.update('title')} />
          </label>
          <input type="submit" value={text} />
        </form>
      </div>
    );
  }
}

export default ListForm;
