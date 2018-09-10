import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { header as routes } from '~/routes';

const Routes = () => (
  <Switch>
    {routes.map((route, i) => (
      <Route {...route} />
    ))}
  </Switch>
);

export default Routes;
