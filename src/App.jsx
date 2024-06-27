import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SignIn from './components/SignIn';
import LogIn from './components/LogIn';

const App = () => {
  return (
    <div>
      <Switch>
        <Route path="/signin" component={SignIn} />
        <Route path="/login" component={LogIn} />
      </Switch>
    </div>
  );
};

export default App;