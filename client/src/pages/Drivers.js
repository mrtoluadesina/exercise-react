import React from 'react';

import Sidebar from './sidebar';
import ContentArea from './contentArea';

import DriverReport from '../components/DriverReport';

export default function Drivers() {
  return (
    <>
      <Sidebar />
      <ContentArea value={<DriverReport />} />
    </>
  );
}
