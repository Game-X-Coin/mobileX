import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { main as routes } from '~/routes';

const Routes = () => (
  <Switch>
    {routes.map((route, i) => (
      <Route key={i} {...route} />
    ))}
  </Switch>
);

export default Routes;
