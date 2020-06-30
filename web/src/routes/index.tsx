import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Principal from '../pages/Principal';
import CreateUser from '../pages/CreateUser';
import UserPage from '../pages/UserPage';

const Routes = () => {
  return (
    <Switch>
      <Route component={Principal} path='/' exact/>
      <Route component={CreateUser} path='/users' />
      <Route component={UserPage} path='/userpage' />
    </Switch>
  )
}

export default Routes;