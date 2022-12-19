import { ThemeProvider } from 'styled-components'
import { TransactionsProvider } from '@/context'
import theme from '../styles/theme'
import GlobalStyle from '../styles/GlobalStyle'

import { initialize, mswDecorator } from 'msw-storybook-addon'

initialize()

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
}

const withGlobalStyle = (story) => (
  <ThemeProvider theme={theme}>
    <TransactionsProvider>
      <GlobalStyle />
      {story()}
    </TransactionsProvider>
  </ThemeProvider>
)

export const decorators = [withGlobalStyle, mswDecorator]
