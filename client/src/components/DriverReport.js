import React from 'react';
import { Query } from 'react-apollo';
import { ALLDRIVERS } from '../query';

import Driver from '../pages/Driver';

import Aside from './Aside';
import './components.css';

export default function DriverReport() {
  return (
    <div className="driver-info">
      <Query query={ALLDRIVERS} errorPolicy="all">
        {({ data, loading }) =>
          loading ? (
            <span>I am loading ...</span>
          ) : (
            <>
              <Aside value={data.drivers} />
              <Driver default={data.drivers[0]} />
            </>
          )
        }
      </Query>
    </div>
  );
}
