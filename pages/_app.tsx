import type { AppProps } from 'next/app'

import { ThemeProvider } from 'styled-components'

import { TransactionsProvider } from '@/context'
import GlobalStyle from '@/styles/GlobalStyle'
import theme from '@/styles/theme'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <TransactionsProvider>
        <Component {...pageProps} />
      </TransactionsProvider>
    </ThemeProvider>
  )
}

export default App
