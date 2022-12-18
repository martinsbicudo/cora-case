const transactions = [
  {
    date: '2021-01-05',
    amountTotal: 35000,
    items: [
      {
        status: 'COMPLETED',
        actor: 'Test',
        amount: 10000,
        source: 'PAYMENT',
        type: 'BANKSLIP',
        entry: 'CREDIT',
        scheduled: false,
        dateEvent: '2021-01-05T21:00:00Z',
      },
    ],
  },
  {
    date: '2021-05-05',
    amountTotal: 25000,
    items: [
      {
        status: 'COMPLETED',
        actor: 'Test',
        amount: 1000,
        source: 'TRANSFER',
        type: 'INTERNAL',
        entry: 'DEBIT',
        scheduled: false,
        dateEvent: '2021-05-05T00:00:00Z',
      },
      {
        status: 'COMPLETED',
        actor: 'Test',
        amount: 3000,
        source: 'TRANSFER',
        type: 'INTERNAL',
        entry: 'DEBIT',
        scheduled: false,
        dateEvent: '2021-05-05T01:00:00Z',
      },
      {
        status: 'REFUNDED',
        actor: 'Test',
        amount: 100,
        source: 'TRANSFER',
        type: 'INTERNAL',
        entry: 'CREDIT',
        scheduled: false,
        dateEvent: '2021-05-05T02:00:00Z',
      },
    ],
  },
  {
    date: '2020-10-07',
    amountTotal: 29000,
    items: [
      {
        status: 'COMPLETED',
        actor: 'Test',
        amount: 1000,
        source: 'TRANSFER',
        type: 'EXTERNAL',
        entry: 'DEBIT',
        scheduled: false,
        dateEvent: '2020-10-07T00:00:00Z',
      },
    ],
  },
]

export default transactions
