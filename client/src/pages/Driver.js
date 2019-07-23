import React from 'react';
import { Query } from 'react-apollo';
import { GET_DRIVER_DETAILS } from '../query';

import male from '../male.svg';
import female from '../female.svg';

import styled from 'styled-components';

const ContentArea = styled.div`
  display: flex;
  flex: 0 0 80%;
  margin-left: 20%;
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

const Section = styled.section`
  display: flex;
  padding: 10%;
`;

export default function Driver(props) {
  const driverID =
    window.location.pathname === '/driver'
      ? props.default.id
      : window.location.pathname.replace('/driver/', '');
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
          <ContentArea>
            {data.driver ? (
              <>
                <div className="half">
                  <span className="tag">DRIVER PROFILE</span>
                  <img
                    className="avatar"
                    src={data.driver.gender === 'male' ? male : female}
                    alt="driver icon"
                  />
                  <ul>
                    <List>
                      <span>NAME:</span> <span>{data.driver.name}</span>
                    </List>
                    <List>
                      <span>D.O.B:</span>{' '}
                      <span>{data.driver.dob.replace(/T.+$/, '')}</span>
                    </List>
                    <List>
                      <span>GENDER:</span> <span>{data.driver.gender}</span>
                    </List>
                    <List>
                      <span>EMAIL:</span> <span>{data.driver.email}</span>
                    </List>
                    <List>
                      <span>PHONE:</span> <span>{data.driver.phone}</span>
                    </List>
                  </ul>
                </div>
                <div className="half">
                  <div className="half-half">
                    <ul>
                      <List>
                        <span>AGENT:</span> <span>{data.driver.agent}</span>
                      </List>
                      <List>
                        <span>ADDRESS:</span> <span>{data.driver.address}</span>
                      </List>
                    </ul>
                  </div>
                  <div className="half-half no-mb">
                    <span className="tag">VEHICLES</span>
                    <ul>
                      {data.driver.vehicles.map((vehicle, index) => (
                        <List key={index}>
                          <span>{index + 1}</span>{' '}
                          <span>{vehicle.manufacturer}</span>{' '}
                          <span>{vehicle.plate}</span>
                        </List>
                      ))}
                    </ul>
                  </div>
                </div>
              </>
            ) : (
              <Section>
                <h2>Click a Driver on the left</h2>
              </Section>
            )}
          </ContentArea>
        )
      }
    </Query>
  );
}
