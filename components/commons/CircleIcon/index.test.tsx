import { render, screen } from '@/test/helpers'

import CircleIcon from '.'
import { CircleIconProps } from './interface'

describe('Components / CircleIcon', () => {
  const renderComponent = (type?: CircleIconProps['type']) =>
    render(<CircleIcon type={type} />)

  it('should render component', () => {
    const { container } = renderComponent()
    expect(container).toMatchSnapshot()
  })

  it('should find credit type icon', () => {
    const type = 'credit'
    renderComponent(type)

    const icon = screen.getByTestId(type)
    expect(icon).toBeInTheDocument()
  })

  it('should find debit type icon', () => {
    const type = 'debit'
    renderComponent(type)

    const icon = screen.getByTestId(type)
    expect(icon).toBeInTheDocument()
  })

  it('should find refunded type icon', () => {
    const type = 'refunded'
    renderComponent(type)

    const icon = screen.getByTestId(type)
    expect(icon).toBeInTheDocument()
  })
})
