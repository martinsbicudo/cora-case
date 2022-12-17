import 'styled-components'
import { ThemeType } from '@/context/ThemeProvider/interface'

import theme from './styles/theme'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: typeof theme.colors
  }
}
