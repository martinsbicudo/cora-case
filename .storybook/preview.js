import { ThemeProvider } from 'styled-components'
import theme from '../styles/theme'
import GlobalStyle from '../styles/GlobalStyle'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
}

const withGlobalStyle = (story) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {story()}
  </ThemeProvider>
)

export const decorators = [withGlobalStyle]
