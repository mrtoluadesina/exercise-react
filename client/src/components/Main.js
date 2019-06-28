import React from 'react';
import { Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Drivers from '../pages/Drivers';
import Trips from '../pages/Trips';
import Trip from '../pages/Trip';

export default function Main() {
  return (
    <main className="main">
      <Route path="/" exact component={Dashboard} />
      <Route path="/drivers" component={Drivers} />
      <Route path="/trips" component={Trips} />
      <Route path="/trip/:id" component={Trip} />
      <Route path="/driver/:id" component={Drivers} />
    </main>
  );
}
