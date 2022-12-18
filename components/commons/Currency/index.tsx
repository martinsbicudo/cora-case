import { currencyFormatter } from '@/lib'

import { CurrencyProps } from './interface'
import * as Styled from './styles'

const InputFilter = ({ type = 'credit', value }: CurrencyProps) => {
  const getCurrency = () => {
    const currency = currencyFormatter(value)
    return type === 'debit' ? `- ${currency}` : currency
  }

  return <Styled.Currency type={type}>{getCurrency()}</Styled.Currency>
}

export default InputFilter
