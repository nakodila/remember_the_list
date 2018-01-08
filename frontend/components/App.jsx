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
    <Route exact path="/" component={HomepageContainer} />
    <Route path="/login" component={SessionFormContainer} />
    <Route path="/signup" component={SessionFormContainer} />
  </div>
);

export default App;
