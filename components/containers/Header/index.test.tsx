import { render } from '@/test/helpers'

import Header from '.'

describe('Containers / Header', () => {
  const renderComponent = () => render(<Header />)

  it('should render component', () => {
    const { container } = renderComponent()
    expect(container).toMatchSnapshot()
  })
})
