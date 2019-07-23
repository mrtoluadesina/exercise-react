import React from 'react';

import Tripi from '../components/Tripi';

import Sidebar from './sidebar';
import ContentArea from './contentArea';

const tripDetails = () => {
  return (
    <>
      <Tripi />
    </>
  );
};

export default function Trip() {
  return (
    <>
      <Sidebar />
      <ContentArea value={tripDetails()} />
    </>
  );
}
