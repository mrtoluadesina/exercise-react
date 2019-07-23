import React from 'react';
import { NavLink } from 'react-router-dom';

const navs = ['dashboard', 'driver', 'trips'];

export default function Navigation() {
  return (
    <nav className="ui menu">
      {navs.map(nav => (
        <NavLink
          to={`/${nav === 'Dashboard' ? '' : nav}`}
          key={nav}
          activeClassName="active"
          exact
          className="item"
        >
          {nav}
        </NavLink>
      ))}
    </nav>
  );
}
