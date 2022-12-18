import { ReactComponent as ArrowDownIn } from '@/public/icons/arrow-down-in.svg'
import { ReactComponent as ArrowReturn } from '@/public/icons/arrow-return.svg'
import { ReactComponent as TimeClock } from '@/public/icons/time-clock.svg'

import { CircleIconProps } from './interface'
import * as Styled from './styles'

const CircleIcon = ({ type = 'credit' }: CircleIconProps) => {
  const renderIcon = () => {
    const Icon = {
      credit: ArrowDownIn,
      debit: ArrowReturn,
      refunded: TimeClock,
    }[type]

    return <Icon />
  }

  return (
    <Styled.CircleIcon data-testid={type}>{renderIcon()}</Styled.CircleIcon>
  )
}

export default CircleIcon
