export interface GetTransactionTypeParams {
  status: string
  source: string
  entry: string
}

export interface GetTransactionTypeValues {
  type: 'credit' | 'debit' | 'refunded'
  label: string
}
