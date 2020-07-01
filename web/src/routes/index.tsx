import React from 'react';
import { Switch } from 'react-router-dom';

import RoutePrivate from './routes';

import Principal from '../pages/Principal';
import CreateUser from '../pages/CreateUser';
import UserPage from '../pages/UserPage';

const Routes = () => {
  return (
    <Switch>
      <RoutePrivate component={Principal} path='/' exact/>
      <RoutePrivate component={CreateUser} path='/users' />

      <RoutePrivate component={UserPage} path='/userpage' isPrivate />
    </Switch>
  ) 
}

export default Routes;