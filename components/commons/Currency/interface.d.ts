export interface CurrencyProps {
  type?: 'credit' | 'debit' | 'refunded'
  value: number
  withStyle?: boolean
}

export interface StyledCurrencyProps {
  type: 'credit' | 'debit' | 'refunded'
}
