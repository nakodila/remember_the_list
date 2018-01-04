import React from 'react';
import HomepageContainer from './homepage/homepage_container';
import SessionFormContainer from './session/session_form_container';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';


const App = () => (
  <div className="container">
    <header className="appHeader">
      <h1>Remember The List</h1>
    </header>
    <Route path="/" component={HomepageContainer} />
    <Route path="/login" component={SessionFormContainer} />
    <Route path="/signup" component={SessionFormContainer} />
  </div>
);

export default App;
