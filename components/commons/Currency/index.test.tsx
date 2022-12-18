import theme from '@/styles/theme'
import { render } from '@/test/helpers'

import Currency from '.'
import { CurrencyProps } from './interface'

describe('Components / Currency', () => {
  const renderComponent = (
    props: {
      type?: CurrencyProps['type']
      withStyle?: boolean
    } = {}
  ) => render(<Currency value={8000} {...props} />)

  it('should render component', () => {
    const { container } = renderComponent()
    expect(container).toMatchSnapshot()
  })

  it('should find credit type style', () => {
    const { container } = renderComponent({ withStyle: true })
    expect(container.firstChild).toHaveStyle(`color: ${theme.colors.secondary}`)
  })

  it('should find debit type style', () => {
    const { container } = renderComponent({ type: 'debit', withStyle: true })
    expect(container.firstChild).toHaveStyle(`color: ${theme.colors.primary}`)
  })

  it('should find refunded type style', () => {
    const { container } = renderComponent({ type: 'refunded', withStyle: true })
    expect(container.firstChild).toHaveStyle(
      `color: ${theme.colors['off-black']}`
    )
  })

  it('should not find style when doest not pass withStyle true', () => {
    const { container } = renderComponent()
    expect(container.firstChild).not.toHaveStyle(
      `color: ${theme.colors.secondary}`
    )
  })
})
