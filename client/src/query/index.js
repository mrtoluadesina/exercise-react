import gql from 'graphql-tag';

export const TRIPREPORT = gql`
  {
    trips {
      id
      isCash
      user {
        name
        gender
      }
      driver {
        name
      }
      billedAmount
    }
  }
`;

export const GET_TRIP_DETAILS = gql`
  query TripDetails($tripID: String) {
    trip(tripID: $tripID) {
      id
      created
      isCash
      user {
        name
        gender
        company
        email
        phone
      }
      driver {
        name
        gender
        agent
        email
        phone
        dob
        address
        vehicles {
          id
          manufacturer
          plate
        }
      }
      pickup {
        address
      }
      destination {
        address
      }
    }
  }
`;

export const ALLDRIVERS = gql`
  {
    drivers {
      id
      name
      gender
    }
  }
`;

export const GET_DRIVER_DETAILS = gql`
  query DriverDetails($driverId: String) {
    driver(driverID: $driverId) {
      name
      gender
      agent
      email
      phone
      dob
      address
      vehicles {
        id
        manufacturer
        plate
      }
    }
  }
`;
