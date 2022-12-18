import { render } from '@/test/helpers'

import Table from '.'

describe('Containers / Table', () => {
  const renderComponent = () => render(<Table />)

  it('should render component', () => {
    const { container } = renderComponent()
    expect(container).toMatchSnapshot()
  })
})
