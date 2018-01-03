import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      firstName: '',
      lastName: '',
      email: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/');
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm({user});
  }

  navLink() {
    if (this.props.formType === 'login') {
      return <Link to="/signup">sign up instead</Link>;
    } else {
      return <Link to="/login">log in instead</Link>;
    }
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    )
  };

  extraSignupFields() {
    if (this.props.formType == 'signup') {
      return (
        <section className="extra-signup-fields">
          <label>First Name:
          <input type="firstName"
            value={this.state.firstName}
            onChange={this.update('firstName')}
            className="login-input"
            />
        </label>
        <br/>
        <label> Last Name:
          <input type="lastName" value={this.state.lastName}
            onChange={this.update('lastName')}
            className="login-input"
            />
        </label>
        <br/>
        <label>Email:
          <input type="email" value={this.state.email}
            onChange={this.update('email')}
            className="login-input"
            />
        </label>
        <br/>
      </section> )}};

  render() {
    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <br/>
          Please {this.props.formType} or {this.navLink()}
          <div className="login-form">
            <br/>
            { this.extraSignupFields() }
            <label>Username:
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                className="login-input"
              />
            </label>
            <br/>
            <label>Password:
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
              />
            </label>
            <br/>
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
