import styled, { css } from 'styled-components'

import { StyledCurrencyProps } from './interface'

export const Currency = styled.span<StyledCurrencyProps>`
  font-size: 1.6rem;
  line-height: 2.4rem;
  font-weight: 900;

  ${({ theme, type }) => {
    switch (type) {
      case 'debit':
        return css`
          color: ${theme.colors.primary};
        `
        break
      case 'credit':
        return css`
          color: ${theme.colors.secondary};
        `
        break
      default:
        return css`
          color: ${theme.colors['off-black']};
          text-decoration: line-through;
        `
        break
    }
  }};
`
