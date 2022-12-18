import { render, screen } from '@/utils/test'

import Container from '.'

describe('Components / Container', () => {
  const testId = 'children-container'
  const renderComponent = () =>
    render(
      <Container>
        <p data-testid={testId}>test</p>
      </Container>
    )

  it('should renders component', () => {
    const { container } = renderComponent()
    expect(container).toMatchSnapshot()
  })

  it('should find children', () => {
    renderComponent()
    const children = screen.getByTestId(testId)
    expect(children).toBeInTheDocument()
  })
})
