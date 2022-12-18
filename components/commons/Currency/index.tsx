import { currencyFormatter } from '@/lib'

import { CurrencyProps } from './interface'
import * as Styled from './styles'

const InputFilter = ({
  type = 'credit',
  value,
  withStyle = false,
}: CurrencyProps) => {
  const getCurrency = () => {
    const currency = currencyFormatter(value)
    const prefix = {
      credit: withStyle ? '+ ' : '',
      debit: '- ',
      refunded: '',
    }

    return `${prefix[type]}${currency}`
  }

  if (withStyle)
    return <Styled.Currency type={type}>{getCurrency()}</Styled.Currency>

  return <span>{getCurrency()}</span>
}

export default InputFilter
