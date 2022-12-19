import { render, screen } from '@/test/helpers'

import Table from '.'
import transactions from './__mocks__/transactions'

describe('Containers / Table', () => {
  const renderComponent = (items = transactions) =>
    render(<Table transactions={items} />)

  it('should render component', () => {
    const { container } = renderComponent()
    expect(container).toMatchSnapshot()
  })

  it('should find all <tbodies />', () => {
    renderComponent()
    const tbodies = screen.getAllByTestId('table-body')
    expect(tbodies).toHaveLength(transactions.length)
  })

  it('should find all <trs />', () => {
    renderComponent()
    const trsLength = transactions.reduce(
      (currentItems, { items }) => [...currentItems, ...items] as any,
      []
    )
    const tbodies = screen.getAllByTestId('table-row')
    expect(tbodies).toHaveLength(trsLength.length)
  })

  it('should render empty state', () => {
    renderComponent([])
    const emptyState = screen.getByTestId('table-empty-state')
    expect(emptyState).toBeInTheDocument()
  })
})
