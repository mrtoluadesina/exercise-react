import React from 'react';
import { NavLink } from 'react-router-dom';
import '../pages/sidebar/sidebar.css';

import male from '../male.svg';
import female from '../female.svg';

export default function Aside(props) {
  return (
    <div className="aside">
      <ul>
        <li className="driver-item-title">All Drivers</li>
        {props.value.map(driver => (
          <li key={driver.id} className="driver-item">
            <NavLink
              to={`/driver/${driver.id}`}
              exact
              className="driver-link"
              activeClassName="active"
            >
              {
                <img
                  className="driver-img"
                  src={driver.gender === 'male' ? male : female}
                  alt="driver"
                />
              }
              <div className="driver-item-name">
                <span>{driver.name}</span>
                <span className="vehicle-num">
                  {driver.vehicles.length}{' '}
                  {driver.vehicles.length > 1 ? 'vehicles' : 'vehicle'}
                </span>
              </div>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
