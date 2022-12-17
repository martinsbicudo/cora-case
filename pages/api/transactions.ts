// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import transactions from '@/data/transactions.json'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<typeof transactions>
) {
  res.status(200).json(transactions)
}
