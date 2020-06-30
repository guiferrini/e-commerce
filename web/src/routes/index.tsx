import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Principal from '../pages/Principal';
import CreateUser from '../pages/CreateUser';

const Routes = () => {
  return (
    <Switch>
      <Route component={Principal} path='/' exact/>
      <Route component={CreateUser} path='/users' />
    </Switch>
  )
}

export default Routes;