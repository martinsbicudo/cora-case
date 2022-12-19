import axios from 'axios'

import { GetTransactionsResponseType } from './interface'

const getTransactions = async (signal?: AbortSignal) => {
  const response = await axios.get<GetTransactionsResponseType>(
    '/api/transactions',
    {
      signal,
    }
  )

  return response.data?.results
}

export default getTransactions
