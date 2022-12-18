import { Children, Dispatch, SetStateAction } from 'react'

import transactions from '@/data/transactions.json'

export interface TransactionsProviderProps {
  children: Children
}

export type TransactionsType = typeof transactions | []

export type FiltersType = {
  search: string
  filter: 'all' | 'credit' | 'debit' | 'future'
}

export interface TransactionsContextType {
  transactions: TransactionsType
  setTransactions: Dispatch<SetStateAction<TransactionsType>>
  filters: FiltersType
  setFilters: Dispatch<SetStateAction<FiltersType>>
}
