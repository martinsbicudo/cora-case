export interface CurrencyProps {
  type?: 'credit' | 'debit' | 'refunded'
  value: number
}

export interface StyledCurrencyProps {
  type: 'credit' | 'debit' | 'refunded'
}
