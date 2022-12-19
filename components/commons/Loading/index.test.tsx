import { render } from '@/test/helpers'

import Loading from '.'

describe('Components / Loading', () => {
  const renderComponent = () => render(<Loading />)

  it('should render component', () => {
    const { container } = renderComponent()
    expect(container).toMatchSnapshot()
  })
})
