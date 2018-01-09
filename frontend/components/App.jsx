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
    <Switch>
      <Route path="/login" component={SessionFormContainer} />
      <Route path="/signup" component={SessionFormContainer} />
      <Route path="/" component={HomepageContainer} />
    </Switch>
  </div>
);

export default App;
