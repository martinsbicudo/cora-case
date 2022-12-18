import { FiltersType } from '@/context/TransactionsProvider/interface'
import { useTransactions } from '@/hooks'
import { render, screen, fireEvent } from '@/test/helpers'

import Filters from '.'

jest.mock('@/hooks')

describe('Containers / Filters', () => {
  const spySetFilters = jest.fn()
  const initialFilters = {
    search: '',
    filter: 'all',
  } as FiltersType
  const renderComponent = () => render(<Filters />)

  beforeAll(() => {
    ;(useTransactions as jest.Mock).mockImplementation(() => ({
      setFilters: (action: (filters: FiltersType) => FiltersType) =>
        spySetFilters(action(initialFilters)),
    }))
  })

  it('should render component', () => {
    const { container } = renderComponent()
    expect(container).toMatchSnapshot()
  })

  it('should call setFilters on dispatch input change', () => {
    const value = 'test'
    renderComponent()

    const input = screen.getByRole('textbox')
    fireEvent.change(input, { target: { value } })
    expect(spySetFilters).toBeCalledWith({
      search: value,
      filter: 'all',
    })
    spySetFilters.mockClear()
  })

  it('should call setFilters on dispatch tab click', () => {
    renderComponent()

    const [, button] = screen.getAllByRole('button')
    fireEvent.click(button)

    expect(spySetFilters).toBeCalledWith({
      search: '',
      filter: 'credit',
    })
  })
})
