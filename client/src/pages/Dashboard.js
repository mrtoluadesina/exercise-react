import React from 'react';

import DashboardReport from '../components/DashboardReport';

import Sidebar from './sidebar';
import ContentArea from './contentArea';

export default function Dashboard() {
  return (
    <>
      <Sidebar />
      <ContentArea value={<DashboardReport />} />
    </>
  );
}
