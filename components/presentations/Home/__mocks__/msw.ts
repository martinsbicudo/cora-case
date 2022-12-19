import { rest } from 'msw'

import transactions from '@/data/transactions.json'

const handlers = [
  rest.get('/api/transactions', (req, res, ctx) => {
    return res(ctx.json(transactions))
  }),
]

export default handlers
