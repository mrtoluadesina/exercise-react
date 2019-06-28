import React from 'react';
import { ColumnChart, PieChart } from 'react-chartkick';
import { Query } from 'react-apollo';
import { TRIPREPORT } from '../query';
import 'chart.js';
import './components.css';
import { gender, cashOrNot, totals } from '../services/chartWorker';
import Tabled from './Table';

export default function DashboardReport() {
  return (
    <Query query={TRIPREPORT} errorPolicy="all">
      {({ error, data, loading }) =>
        loading ? (
          <span>I am loading ...</span>
        ) : (
          <>
            <div className="pies">
              <PieChart data={gender(data.trips)} />
              <PieChart data={cashOrNot(data.trips)} />
            </div>
            <div className="bars">
              <ColumnChart data={totals(data.trips)} />
            </div>
            <Tabled data={data.trips} />
          </>
        )
      }
    </Query>
  );
}
