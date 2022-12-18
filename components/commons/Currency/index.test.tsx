import theme from '@/styles/theme'
import { render } from '@/test/helpers'

import Currency from '.'
import { CurrencyProps } from './interface'

describe('Components / Currency', () => {
  const renderComponent = (type?: CurrencyProps['type']) =>
    render(<Currency type={type} value={8000} />)

  it('should render component', () => {
    const { container } = renderComponent()
    expect(container).toMatchSnapshot()
  })

  it('should find credit type style', () => {
    const { container } = renderComponent()
    expect(container.firstChild).toHaveStyle(`color: ${theme.colors.secondary}`)
  })

  it('should find debit type style', () => {
    const { container } = renderComponent('debit')
    expect(container.firstChild).toHaveStyle(`color: ${theme.colors.primary}`)
  })

  it('should find refunded type style', () => {
    const { container } = renderComponent('refunded')
    expect(container.firstChild).toHaveStyle(
      `color: ${theme.colors['off-black']}`
    )
  })
})
