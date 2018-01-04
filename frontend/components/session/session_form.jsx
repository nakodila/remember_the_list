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
      return <Link to="/signup">Sign up for free</Link>;
    } else {
      return <Link to="/login">Log in</Link>;
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

  signupForm() {
    if (this.props.formType == 'signup') {
      return (

        <section className="extra-signup-fields login-form">
          <h2 className="login-greet">Sign up for free.</h2>
          <input type="firstName"
            value={this.state.firstName}
            onChange={this.update('firstName')}
            className="login-input"
            placeholder="First Name"
            />
        <br/>
          <input type="lastName"
            value={this.state.lastName}
            onChange={this.update('lastName')}
            className="login-input"
            placeholder="Last Name"
            />
        <br/>
          <input type="email"
            value={this.state.email}
            onChange={this.update('email')}
            className="login-input"
            placeholder="Email"
            />
        <br/>
          <input type="text"
            value={this.state.username}
            onChange={this.update('username')}
            className="login-input"
            placeholder="Username"
          />
        <br/>
          <input type="password"
            value={this.state.password}
            onChange={this.update('password')}
            className="login-input"
            placeholder="Password"
          />
        <br/>
        <input className="submit" type="submit" value="Submit" />
      </section> )}};
  loginForm() {
    if (this.props.formType == 'login') {
      return (
        <section className="extra-signup-fields login-form">
          <h2 className="login-greet">Been here before? Welcome back!</h2>
          <input type="text"
            value={this.state.username}
            onChange={this.update('username')}
            className="login-input"
            placeholder="Username"
          />
        <br/>
          <input type="password"
            value={this.state.password}
            onChange={this.update('password')}
            className="login-input"
            placeholder="Password"
          />
        <br/>
        <input className="submit" type="submit" value="Submit" />
      </section> )}};

  render() {
    return (
      <main className="login-main">

      <section className="login-decor">
        <div className="login-content">
          <div className="login-pics">
            <img className="login-pips" src="http://lorempixel.com/100/100/cats" />
            <img className="login-pips" src="http://lorempixel.com/100/100/cats" />
            <img className="login-pips" src="http://lorempixel.com/100/100/cats" />
          </div>
          <h1 className="login-quote">Join millions of people never forgetting to check
          things off their list!</h1>
        </div>
      </section>

      <section className="login-form-container">
        {this.navLink()}
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <br/>
          { this.signupForm() }
          { this.loginForm() }
        </form>
      </section>
    </main>
    );
  }
}

export default withRouter(SessionForm);
