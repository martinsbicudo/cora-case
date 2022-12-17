import { useState, useMemo, createContext, useCallback } from 'react'

import {
  TransactionsProviderProps,
  TransactionsContextType,
  TransactionsType,
} from './interface'

export const TransactionsContext = createContext<TransactionsContextType>(
  {} as TransactionsContextType
)

const TransactionsProvider = ({
  children,
}: TransactionsProviderProps): JSX.Element => {
  const [transactions, setTransactions] = useState<TransactionsType>([])

  const value = useMemo(
    () => ({ transactions, setTransactions }),
    [transactions, setTransactions]
  )

  return (
    <TransactionsContext.Provider value={value}>
      {children}
    </TransactionsContext.Provider>
  )
}

export default TransactionsProvider
