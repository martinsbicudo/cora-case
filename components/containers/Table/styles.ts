import { up, down } from 'styled-breakpoints'
import styled from 'styled-components'

import tableDesktop from './table-style.desktop'

export const Table = styled.table`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-spacing: 0;
  color: ${({ theme }) => theme.colors['gray-1']};

  thead {
    height: 0;
    opacity: 0;
  }

  ${up('md')} {
    display: table;
    padding-top: 30px;

    thead {
      height: initial;
      opacity: initial;
    }
  }
`

export const TableTh = styled.th`
  text-align: left;
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 2rem;

  &:first-child {
    visibility: hidden;
  }

  &:not(:first-child) {
    transform: translateY(-25px);
  }

  &:last-child {
    text-align: right;
    padding-right: 24px;
  }

  &:not(:last-child) {
    padding-left: 24px;
  }

  &:nth-child(3) {
    font-weight: 900;
    color: ${({ theme }) => theme.colors.primary};
  }
`

export const TableTd = styled.td`
  text-align: left;
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 2.4rem;
  padding-top: 20px;
  padding-bottom: 20px;
  border: 0 solid ${({ theme }) => theme.colors['gray-2']};

  &:first-child {
    color: ${({ theme }) => theme.colors['off-black']};
  }

  &:last-child {
    text-align: right;
    padding-right: 24px;
  }

  &:not(:last-child) {
    padding-left: 24px;
  }
`

export const TableTbody = styled.tbody`
  ${down('md')} {
    width: 100%;
    border-radius: 16px;
    border: 1px solid ${({ theme }) => theme.colors['gray-2']};
    margin-bottom: 30px;
    overflow: hidden;

    &,
    tr {
      display: flex;
      flex-direction: column;
    }

    tr:first-child {
      border-bottom: 1px solid ${({ theme }) => theme.colors['gray-2']};

      ${TableTd} {
        text-align: center;
      }
    }

    tr:not(:first-child) {
      ${TableTd} {
        text-align: left;
      }
    }

    tr:last-child {
      border-top: 1px solid ${({ theme }) => theme.colors['gray-2']};

      ${TableTd} {
        text-align: right;
        background-color: ${({ theme }) => theme.colors['gray-4']};
      }

      ${TableTd}:first-letter {
        text-transform: uppercase;
      }

      ${TableTd} span:last-child {
        font-weight: 900;
      }
    }

    tr:not(:first-child):not(:last-child) {
      ${TableTd} {
        padding: 12px 15px;
      }

      ${TableTd}:before {
        content: attr(data-header);
        color: ${({ theme }) => theme.colors['off-black']};
        padding-right: 15px;
      }
    }

    tr:not(:first-child):not(:last-child):not(:nth-last-child(2)) {
      border-bottom: 1px solid ${({ theme }) => theme.colors['gray-2']};
    }
  }

  ${tableDesktop(TableTd)}
`

export const TableEmptyState = styled.p`
  width: 100%;
  padding: 20px;
  text-align: center;
  border-radius: 10px;
  font-size: 1.6rem;
  line-height: 1.6rem;
  color: ${({ theme }) => theme.colors['off-black']};
  border: 1px solid ${({ theme }) => theme.colors['gray-3']};
  background-color: ${({ theme }) => theme.colors['gray-4']};
`
