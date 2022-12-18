import styled, { css } from 'styled-components'

import { StyledTabsButtonProps } from './interface'

export const Tabs = styled.ul`
  width: 100%;
  display: flex;
  justify-content: center;
  list-style: none;
  font-size: 1.6rem;
  line-height: 2.4rem;
`

export const TabsItem = styled.li`
  &:not(:last-child) {
    margin-right: 30px;
  }
`

export const TabsButton = styled.button<StyledTabsButtonProps>`
  all: unset;
  padding: 4px 16px;
  font-weight: 400;
  transition: background-color 0.2s;
  will-change: background-color;
  border-radius: 20px;
  cursor: pointer;

  ${({ theme, active }) => {
    if (active)
      return css`
        color: ${theme.colors.white};
        background-color: ${theme.colors.primary};
      `

    return css`
      color: ${theme.colors.primary};
      background-color: transparent;

      &:hover {
        background-color: ${theme.colors['soft-secondary']};
      }
    `
  }}
`
