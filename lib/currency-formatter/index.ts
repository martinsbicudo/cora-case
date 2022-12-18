import formatCurrency from 'format-currency'

const currencyFormatter = (value: number): string => {
  let currency = parseFloat(value.toString()) / 100
  let symbol = 'R$'

  if (value < 0) {
    currency = currency * -1
    symbol = '- R$'
  }

  return formatCurrency(currency, {
    maxFraction: 2,
    locale: 'pt-BR',
    format: '%s %v',
    symbol,
  })
}

export default currencyFormatter
