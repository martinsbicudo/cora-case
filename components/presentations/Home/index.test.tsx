import { render } from '@/test/helpers'

import Home from '.'

describe('Presentations / Home', () => {
  const renderComponent = () => render(<Home />)

  it('should render component', () => {
    const { container } = renderComponent()
    expect(container).toMatchSnapshot()
  })
})
