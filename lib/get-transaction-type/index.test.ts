import getTransactionType from '.'

describe('lib / get-transaction-type', () => {
  it('should return type "lala" and label "Pagamento Realizado"', () => {
    const { type, label } = getTransactionType({
      status: 'COMPLETED',
      source: 'PAYMENT',
      entry: 'DEBIT',
    })
    expect(type).toBe('debit')
    expect(label).toBe('Pagamento Realizado')
  })

  it('should return type "lala" and label "Transferência Realizada"', () => {
    const { type, label } = getTransactionType({
      status: 'COMPLETED',
      source: 'TRANSFER',
      entry: 'DEBIT',
    })
    expect(type).toBe('debit')
    expect(label).toBe('Transferência Realizada')
  })

  it('should return type "lala" and label "Pagamento Recebido"', () => {
    const { type, label } = getTransactionType({
      status: 'COMPLETED',
      source: 'PAYMENT',
      entry: 'CREDIT',
    })
    expect(type).toBe('credit')
    expect(label).toBe('Pagamento Recebido')
  })

  it('should return type "lala" and label "Transferência Recebida"', () => {
    const { type, label } = getTransactionType({
      status: 'COMPLETED',
      source: 'TRANSFER',
      entry: 'CREDIT',
    })
    expect(type).toBe('credit')
    expect(label).toBe('Transferência Recebida')
  })

  it('should return type "lala" and label "Pagamento Estornado"', () => {
    const { type, label } = getTransactionType({
      status: 'REFUNDED',
      source: 'PAYMENT',
      entry: 'CREDIT',
    })
    expect(type).toBe('refunded')
    expect(label).toBe('Pagamento Estornado')
  })

  it('should return type "lala" and label "Transferência Estornada"', () => {
    const { type, label } = getTransactionType({
      status: 'REFUNDED',
      source: 'TRANSFER',
      entry: 'CREDIT',
    })
    expect(type).toBe('refunded')
    expect(label).toBe('Transferência Estornada')
  })

  it('should return type "lala" and label "Transferência Estornada"', () => {
    const { type, label } = getTransactionType({
      status: 'PENDING',
      source: 'PAYMENT',
      entry: 'DEBIT',
    })
    expect(type).toBe('debit')
    expect(label).toBe('Transferência Estornada')
  })

  it('should return type "lala" and label "Transferência Estornada"', () => {
    const { type, label } = getTransactionType({
      status: 'PENDING',
      source: 'TRANSFER',
      entry: 'DEBIT',
    })
    expect(type).toBe('debit')
    expect(label).toBe('Transferência Estornada')
  })
})
