import { FiltersType } from '@/context/TransactionsProvider/interface'

export type ItemType = {
  key: FiltersType['filter']
  label: string
}

export interface TabsProps {
  items: ItemsType[]
  initialActiveItem?: string
  onChange?: (key: FiltersType['filter']) => void
}

export interface StyledTabsButtonProps {
  active: boolean
}
