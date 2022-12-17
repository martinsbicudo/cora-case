import { useContext } from 'react'

import { TransactionsContext } from '@/context'

const useTransactions = () => {
  const transactions = useContext(TransactionsContext)
  return transactions
}

export default useTransactions
