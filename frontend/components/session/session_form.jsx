import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      first_name: '',
      last_name: '',
      email: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemoLogin = this.handleDemoLogin.bind(this);
    this.clearErrors = this.clearErrors.bind(this);
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

  handleDemoLogin(e){
    e.preventDefault();
    const user = {
      username: 'nakodila',
      password: 'pass123'
    };
    this.props.login({user});
  }

  clearErrors() {
    
    this.props.clearSessionErrors();
  };


  navLink() {
    if (this.props.formType === 'login') {
      return <Link onClick={this.clearErrors()} to="/signup"  className="login-signup-link">Sign up for free</Link>;
      } else {
        return <Link onClick={this.clearErrors} to="/login"  className="login-signup-link">Log in</Link>;
        }
      }

  renderErrors() {
    if (this.props.errors === null) {
      return null;
    };
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

  inputField(input_type, placeholder) {
    return <input type={input_type}
            value={this.state.input_type}
            onChange={this.update(input_type)}
            className="login-input input"
            placeholder={placeholder}
          />
      }

  signupForm() {
    if (this.props.formType == 'signup') {
      return (
        <section className="extra-signup-fields login-form">
          <h2 className="login-greet">Sign up for free.</h2>
          {this.inputField("first_name", "First Name")}
          <br/>
          {this.inputField("last_name", "Last Name")}
          <br/>
          {this.inputField("email", "Email")}
          <br/>
          {this.inputField("username", "Username")}
          <br/>
          {this.inputField("password", "Password")}
          <br/>
        <input className="submit input" type="submit" value="Submit" />
      </section> )}};

  loginForm() {
    if (this.props.formType == 'login') {
      return (
        <section className="extra-signup-fields login-form">
          <h2 className="login-greet">Been here before? Welcome back!</h2>
          {this.inputField("username", "Username")}
          <br/>
          {this.inputField("password", "Password")}
          <br/>
          <input className="submit input" type="submit" value="Submit" />
        </section> )}};

  render() {
    return (
      <main className="login-main">
      <section className="login-left">
        <div className="login-content">
          <nav className="navBar">
            <img className="logo" src="/assets/logo.svg"/>
          </nav>
          <div className="login-pics-box">
            <img className="login-pics" id="racoon" src="https://i.imgur.com/SYnma5P.png" />
            <img className="login-pics" id="shark" src="https://i.imgur.com/gf7DkZr.png" />
            <img className="login-pics" id="turtle" src="https://i.imgur.com/y04ck1s.png" />
          </div>
          <h1 className="login-quote">Join millions of people never forgetting to check
          things off their list!</h1>
        </div>
      </section>

      <section className="login-right">
        <div className="link-form">
          <nav className="navBar">
            {this.navLink()}
          </nav>
          <form onSubmit={this.handleSubmit} className="login-form-box">
            {this.renderErrors()}
            <br/>
            { this.signupForm() }
            { this.loginForm() }
            <button onClick={this.handleDemoLogin} className="submit input demo-submit"> Demo Login </button>
          </form>
        </div>
      </section>
    </main>
    );
  }
}

export default withRouter(SessionForm);
