import { GetTransactionTypeParams, GetTransactionTypeValues } from './interface'

const getTransactionType = ({
  status,
  source,
  entry,
}: GetTransactionTypeParams): GetTransactionTypeValues => {
  const isRefunded = status === 'REFUNDED'
  const type = isRefunded ? 'refunded' : entry.toLowerCase()
  const labels = {
    'COMPLETED-PAYMENT-DEBIT': 'Pagamento Realizado',
    'COMPLETED-TRANSFER-DEBIT': 'Transferência Realizada',
    'COMPLETED-PAYMENT-CREDIT': 'Pagamento Recebido',
    'COMPLETED-TRANSFER-CREDIT': 'Transferência Recebida',
    'REFUNDED-PAYMENT-CREDIT': 'Pagamento Estornado',
    'REFUNDED-TRANSFER-CREDIT': 'Transferência Estornada',
    'PENDING-PAYMENT-DEBIT': 'Transferência Estornada',
    'PENDING-TRANSFER-DEBIT': 'Transferência Estornada',
  }

  return {
    type: type as GetTransactionTypeValues['type'],
    label: (labels as any)[`${status}-${source}-${entry}`],
  }
}

export default getTransactionType
