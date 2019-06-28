import React from 'react';
import { NavLink } from 'react-router-dom';
import '../pages/sidebar/sidebar.css';

import male from '../male.svg';
import female from '../female.svg';

export default function Aside(props) {
  return (
    <div className="aside">
      <ul>
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
              {driver.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
