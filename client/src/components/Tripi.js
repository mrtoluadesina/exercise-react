import React from 'react';
import { Query } from 'react-apollo';
import { GET_TRIP_DETAILS } from '../query';

import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;

const Section = styled.section`
  display: flex;
  padding: 10%;
`;

const List = styled.li`
  display: flex;
  justify-content: space-between;
  font-size: 1.7rem;
  line-height: 3rem;
  padding-bottom: 1rem;
  margin-bottom: 2rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;

export default function Tripi() {
  const tripID = window.location.pathname.replace('/trip/', '');
  return (
    <Query query={GET_TRIP_DETAILS} errorPolicy="all" variables={{ tripID }}>
      {({ error, data, loading }) =>
        loading ? (
          <span>I am loading</span>
        ) : (
          <Container>
            {data.trip.driver ? (
              <>
                <div className="half">
                  <span className="tag">Driver</span>
                  <ul>
                    <List>{data.trip.driver.name}</List>
                    <List>{data.trip.driver.gender}</List>
                    <List>{data.trip.driver.agent}</List>
                    <List>{data.trip.driver.email}</List>
                    <List>{data.trip.driver.phone}</List>
                    <List>{data.trip.driver.dob}</List>
                    <List>{data.trip.driver.address}</List>
                  </ul>
                  <hr />
                  <h3>Vehicles</h3>
                  <ul>
                    {data.trip.driver.vehicles.map((vehicle, index) => (
                      <List key={index}>{`${vehicle.manufacturer} - ${
                        vehicle.plate
                      }`}</List>
                    ))}
                  </ul>
                </div>
                <div className="half">
                  <div className="half-half">
                    <span className="tag">User</span>
                    <ul>
                      <List>{data.trip.user.name}</List>
                      <List>{data.trip.user.gender}</List>
                      <List>{data.trip.user.company}</List>
                      <List>{data.trip.user.email}</List>
                      <List>{data.trip.user.phone}</List>
                    </ul>
                  </div>
                  <div className="half-half">
                    <span className="tag">Created</span>
                    <ul>
                      <List>{data.trip.created}</List>
                    </ul>
                  </div>
                  <div className="half-half">
                    <span className="tag">Picked</span>
                    <ul>
                      <List>{data.trip.pickup.address}</List>
                    </ul>
                  </div>
                  <div className="half-half">
                    <span className="tag">Destination</span>
                    <ul>
                      <List>{data.trip.destination.address}</List>
                    </ul>
                  </div>
                </div>
              </>
            ) : (
              <Section>I am not here</Section>
            )}
          </Container>
        )
      }
    </Query>
  );
}
