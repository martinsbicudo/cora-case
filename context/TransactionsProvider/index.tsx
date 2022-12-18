import { useState, useMemo, createContext } from 'react'

import {
  TransactionsProviderProps,
  TransactionsContextType,
  TransactionsType,
  FiltersType,
} from './interface'

export const TransactionsContext = createContext<TransactionsContextType>(
  {} as TransactionsContextType
)

const TransactionsProvider = ({
  children,
}: TransactionsProviderProps): JSX.Element => {
  const [transactions, setTransactions] = useState<TransactionsType>([])
  const [filters, setFilters] = useState<FiltersType>({
    search: '',
    filter: 'all',
  })

  const value = useMemo(
    () => ({ transactions, setTransactions, filters, setFilters }),
    [transactions, setTransactions, filters, setFilters]
  )

  return (
    <TransactionsContext.Provider value={value}>
      {children}
    </TransactionsContext.Provider>
  )
}

export default TransactionsProvider
