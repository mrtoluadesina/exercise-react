import React from 'react';
import { Query } from 'react-apollo';
import { GET_DRIVER_DETAILS } from '../query';

export default function Driver() {
  const driverID = window.location.pathname.replace('/driver/', '');
  return (
    <Query
      query={GET_DRIVER_DETAILS}
      errorPolicy="all"
      variables={{ driverId: driverID }}
    >
      {({ data, loading }) =>
        loading ? (
          <span>I am loading ...</span>
        ) : (
          <div className="content-area">
            {data.driver ? data.driver.name : ''}
          </div>
        )
      }
    </Query>
  );
}
