import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Principal from '../pages/Principal';

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={Principal} path='/' exact/>
    </BrowserRouter>
  )
}

export default Routes;