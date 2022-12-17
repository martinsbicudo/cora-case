import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    font-family: 'Roboto', sans-serif;
    background-color: ${({ theme }) => theme.colors.white};
  }

  html,
  body,
  #__next {
    min-height: 100vh;
    min-width: 320px;
  }

  body::-webkit-scrollbar {
    width: 1.6rem;
  }

  body::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.colors['gray-3']};
  }

  body::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors['gray-1']};
  }
`

export default GlobalStyle
