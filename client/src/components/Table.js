import React from 'react';
import { NavLink } from 'react-router-dom';
import { Header, Table } from 'semantic-ui-react';

const Tabled = props => (
  <Table celled padded>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell singleLine>Link</Table.HeaderCell>
        <Table.HeaderCell>User</Table.HeaderCell>
        <Table.HeaderCell>Driver</Table.HeaderCell>
        <Table.HeaderCell>Amount</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      {props.data.map(tableRow => (
        <Table.Row key={tableRow.id}>
          <Table.Cell>
            <Header as="h2" textAlign="center">
              <NavLink to={`/trip/${tableRow.id}`}>i</NavLink>
            </Header>
          </Table.Cell>
          <Table.Cell singleLine>{tableRow.user.name}</Table.Cell>
          <Table.Cell>{tableRow.driver ? tableRow.driver.name : ''}</Table.Cell>
          <Table.Cell textAlign="right">{tableRow.billedAmount}</Table.Cell>
        </Table.Row>
      ))}
    </Table.Body>
  </Table>
);

export default Tabled;
