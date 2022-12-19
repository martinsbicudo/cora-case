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
  const [initialTransactions, setTransactions] = useState<TransactionsType>([])
  const [filters, setFilters] = useState<FiltersType>({
    search: '',
    filter: 'all',
  })

  const checkActorIncludesSearch = (actor: string, search: string) =>
    actor.toLowerCase().includes(search.toLowerCase())

  const transactions = useMemo(() => {
    const { search, filter } = filters

    let filteredTransactions = [...initialTransactions]
    filteredTransactions = filteredTransactions.map((transaction) => {
      let filteredItems = [...transaction.items]

      switch (filter) {
        case 'credit':
          filteredItems = filteredItems.filter(
            ({ actor, entry }) =>
              entry === 'CREDIT' && checkActorIncludesSearch(actor, search)
          )
          break
        case 'debit':
          filteredItems = filteredItems.filter(
            ({ actor, entry }) =>
              entry === 'DEBIT' && checkActorIncludesSearch(actor, search)
          )
          break
        case 'future':
          filteredItems = filteredItems.filter(
            ({ actor, scheduled }) =>
              scheduled && checkActorIncludesSearch(actor, search)
          )
          break
        default:
          filteredItems = filteredItems.filter(({ actor }) =>
            checkActorIncludesSearch(actor, search)
          )
          break
      }

      return {
        ...transaction,
        items: filteredItems,
      }
    })

    return filteredTransactions.filter(({ items }) => Boolean(items?.length))
  }, [filters, initialTransactions])

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
