import { render, screen, fireEvent } from '@/test/helpers'

import SearchInput from '.'

describe('Components / SearchInput', () => {
  const spyOnChange = jest.fn()
  const renderComponent = () => render(<SearchInput onChange={spyOnChange} />)

  it('should render component', () => {
    const { container } = renderComponent()
    expect(container).toMatchSnapshot()
  })

  it('should call on change prop', () => {
    renderComponent()

    const input = screen.getByRole('textbox')
    fireEvent.change(input, { target: { value: 'test' } })
    expect(spyOnChange).toHaveBeenCalledTimes(1)
    spyOnChange.mockClear()
  })
})
