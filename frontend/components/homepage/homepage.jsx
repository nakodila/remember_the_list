import React from 'react';
import { Link } from 'react-router-dom';

const sessionLinks = () => (
    <main className="homepage-main">
        <nav className="login-signup navBar">
          <div className="logo-div">
            <img src="http://kurenkov.tv/lena/remember_the_list_logo_01.svg" alt="logo" className="logo"/>
          </div>

          <div className="homepageNav">
            <Link to="/login" className="homepage-navbar-it">Login</Link>
            <Link to="/signup" className="homepage-navbar-it signup-border">Sign up for free</Link>
          </div>
        </nav>
      <div className="homepage-ctr-signup">
        <h1 className="homepage-txt">The smart to-do app for busy people.</h1>
        <Link to="/signup" className="red-signup-btn">Sign Up Free</Link>
      </div>
      <div className="signup-art">
        <img src="https://i.imgur.com/DBe6uid.png" alt="Dont forget to call Bob"/>
      </div>
      <footer className="footer"></footer>
    </main>
);


const personalGreeting = (currentUser, logout) => (
	<hgroup className="header-group">
    <h2 className="header-name">Hi, {currentUser.username}!</h2>
    <button className="header-button" onClick={logout}>Log Out</button>
	</hgroup>
);

const Homepage = ({ currentUser, logout }) => (
  currentUser ? personalGreeting(currentUser, logout) : sessionLinks()
);

export default Homepage;
