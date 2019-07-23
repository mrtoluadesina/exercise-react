import React from 'react';

import Sidebar from './sidebar';
import ContentArea from './contentArea';

const tripDetails = () => {
  return (
    <>
      <h2>This is the Trip's page</h2>
      <h3>I am making sure this works well ... </h3>
    </>
  );
};

export default function Trips() {
  return (
    <>
      <Sidebar />
      <ContentArea value={tripDetails()} />
    </>
  );
}
