import React from 'react';
import { Route, Link } from 'react-router-dom';
import ListIndexContainer from '../list/list_index_container';
import ListShowContainer from '../list/list_show_container';
import TaskIndexContainer from '../task/task_index_container';
import TaskShowContainer from '../task/task_show_container';
import WordBubble from './word_cloud';

const sessionLinks = () => (
    <main className="homepage-main">
      <nav className="login-signup navBar">
        <div className="logo-div">
          <img src={window.staticImages.logoWhite}  alt="logo" className="logo"/>
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
        <div className="word-clouds">
          <WordBubble words="Write the list in the morning" classn="word-cloud1 word-cloud"/>
          <WordBubble words="Remember to check the list" classn="word-cloud2 word-cloud"/>
        </div>
        <div className="bob-div">
          <img src={window.staticImages.bob} alt="Dont forget to call Bob" className="bob"/>
        </div>
        <div className="motivation">
          <h2 className="h2-motivation">Remember the List</h2>
          <p>We will improve your life in so many ways</p>
        </div>
    </div>
      <footer className="footer"></footer>
    </main>
);

const loggedInHomepage = (currentUser, logout) => (
	<hgroup className="hmp-loggedIn hmp-flex">
    <nav className="hmp-lin-nav">
      <button className="header-button" onClick={logout}>Log Out</button>
    </nav>
    <div className="hmp-lin-grid style_hmp_lin">
      <div className="grid-hmp-lin-rigth style-hmp-lin-rigth">
        <div className="logo-hmp">
          <img src={window.staticImages.logoBlue}  alt="logo" className="logo-login" />
        </div>
        <ListIndexContainer />
      </div>
      <TaskIndexContainer />
      <Route path="/lists/:id" component={ ListShowContainer } />
      <Route path="/tasks/:id/edit" component={ TaskShowContainer } />
    </div>
	</hgroup>
);

const Homepage = ({ currentUser, logout }) => (
  currentUser ? loggedInHomepage(currentUser, logout) : sessionLinks()
);

export default Homepage;
