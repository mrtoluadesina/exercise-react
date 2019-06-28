import React from 'react';
import { Query } from 'react-apollo';
import { GET_TRIP_DETAILS } from '../query';

export default function Tripi() {
  const tripID = window.location.pathname.replace('/trip/', '');
  return (
    <Query query={GET_TRIP_DETAILS} errorPolicy="all" variables={{ tripID }}>
      {({ error, data, loading }) =>
        loading ? (
          <span>I am loading</span>
        ) : (
          <span>{data.trip.driver ? data.trip.driver.name : ''}</span>
        )
      }
    </Query>
  );
}
