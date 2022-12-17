import { Children, Dispatch, SetStateAction } from 'react'

import transactions from '@/data/transactions.json'

export interface TransactionsProviderProps {
  children: Children
}

export type TransactionsType = typeof transactions | []

export interface TransactionsContextType {
  transactions: TransactionsType
  setTransactions: Dispatch<SetStateAction<TransactionsType>>
}
