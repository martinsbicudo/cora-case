import theme from '@/styles/theme'
import { render, screen, fireEvent } from '@/test/helpers'

import Tabs from '.'
import items from './__mocks__/items'

describe('Components / Tabs', () => {
  const renderComponent = (initialActiveItem?: string) =>
    render(<Tabs items={items} initialActiveItem={initialActiveItem} />)

  it('should render componet', () => {
    const { container } = renderComponent()
    expect(container).toMatchSnapshot()
  })

  it('should find all items', () => {
    renderComponent()

    items.forEach(({ label }) => {
      const item = screen.getByText(label)
      expect(item).toBeInTheDocument()
    })
  })

  it('should find default initial active item', () => {
    const { key, label } = items[0]
    renderComponent(key)

    const activeButton = screen.getByText(label)
    expect(activeButton).toHaveStyle(
      `background-color: ${theme.colors.primary}`
    )
  })

  it('should find custom initial active item', () => {
    const { key, label } = items[1]
    renderComponent(key)

    const activeButton = screen.getByText(label)
    expect(activeButton).toHaveStyle(
      `background-color: ${theme.colors.primary}`
    )
  })

  it('should change active item on click', () => {
    const { label } = items[1]
    renderComponent()

    const button = screen.getByText(label)
    fireEvent.click(button)
    expect(button).toHaveStyle(`background-color: ${theme.colors.primary}`)
  })
})
