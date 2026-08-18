export const kpiData = [
  {
    id: 1,
    title: "Today's Revenue",
    value: '$987',
    trend: '+22.1%',
    trendDirection: 'positive'
  },
  {
    id: 2,
    title: 'Total Orders',
    value: '$853',
    trend: '+17.1%',
    trendDirection: 'positive'
  },
  {
    id: 3,
    title: 'Active Orders',
    value: '36',
    trend: '-19%',
    trendDirection: 'negative'
  }
];

export const incomeData = {
  monthly: {
    total: '$935,577',
    trend: '+76.09 as previous Month',
    chartData: [
      { month: 'Jan', value: 20 },
      { month: 'Feb', value: 23 },
      { month: 'Mar', value: 27 },
      { month: 'Apr', value: 31 },
      { month: 'May', value: 27 },
      { month: 'Jun', value: 39, highlighted: true },
      { month: 'Jul', value: 23 },
      { month: 'Aug', value: 31 }
    ]
  },
  yearly: {
    total: '$4,125,890',
    trend: '+12.5% as previous Year',
    chartData: [
      { month: 'Jan', value: 15 },
      { month: 'Feb', value: 18 },
      { month: 'Mar', value: 22 },
      { month: 'Apr', value: 25 },
      { month: 'May', value: 21 },
      { month: 'Jun', value: 32, highlighted: true },
      { month: 'Jul', value: 19 },
      { month: 'Aug', value: 28 }
    ]
  }
};

export const posData = {
  totalBill: 165,
  avgValue: '$76',
  pickHour: '9:00 AM',
  totalPayment: '$3,577',
  paymentMethods: [
    { label: 'Card', value: 20, color: '#E96B4D' },
    { label: 'Online', value: 10, color: '#D9573A' }
  ]
};
