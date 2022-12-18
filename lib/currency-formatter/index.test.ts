import currencyFormatter from '.'

describe('lib / currency-formatter', () => {
  test('should return value with mask', () => {
    const result = currencyFormatter(99999999)

    expect(result).toBe('R$ 999.999,99')
  })

  test('should return negative value with mask', () => {
    const result = currencyFormatter(-99999999)

    expect(result).toBe('- R$ 999.999,99')
  })
})
