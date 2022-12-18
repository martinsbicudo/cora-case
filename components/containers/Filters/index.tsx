import { ChangeEvent } from 'react'

import { FiltersType } from '@/context/TransactionsProvider/interface'
import { useTransactions } from '@/hooks'
import { Tabs, SearchInput } from '@Commons'

import * as Styled from './styles'
import tabsList from './tabs-list'

const Filters = () => {
  const { setFilters } = useTransactions()

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const search = e.target.value

    setFilters((currentFilters) => ({
      search,
      filter: currentFilters.filter,
    }))
  }

  const handleTabsChange = (filter: FiltersType['filter']) => {
    setFilters((currentFilters) => ({
      search: currentFilters.search,
      filter,
    }))
  }

  return (
    <Styled.Filters>
      <SearchInput onChange={handleInputChange} />
      <Tabs items={tabsList} onChange={handleTabsChange} />
    </Styled.Filters>
  )
}

export default Filters
