//  How result should be for the piecharts
// [['Male', 44], ['Female', 23]]

export const gender = chartData => {
  let fcount = 0;
  let mcount = 0;
  chartData.map(data => (data.user.gender === 'female' ? fcount++ : mcount++));
  return [['Male', mcount], ['Female', fcount]];
};

export const cashOrNot = chartData => {
  let cashCount = 0;
  let noCashCount = 0;
  chartData.map(data => (data.isCash ? cashCount++ : noCashCount++));
  return [['Cash Trips', cashCount], ['Non Cash Trips', noCashCount]];
};

// How the result should be for the column chart
// { '2017-01-01': 11, '2017-01-02': 6 }

export const totals = chartData => {
  let cashBilledTotal = 0;
  let nonCashBilledTotal = 0;

  chartData.map(data =>
    data.isCash
      ? (cashBilledTotal += data.billedAmount)
      : (nonCashBilledTotal += data.billedAmount),
  );

  return {
    'Total Amount Billed': cashBilledTotal + nonCashBilledTotal,
    'Total Cash Amount Billed': cashBilledTotal,
    'Total Non Cash Amount Billed': nonCashBilledTotal,
  };
};
