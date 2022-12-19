import { up } from 'styled-breakpoints'
import { css, StyledComponent, DefaultTheme } from 'styled-components'

const tableDesktop = (TableTd: StyledComponent<'td', DefaultTheme>) => css`
  ${up('md')} {
    position: relative;

    tr:first-child,
    tr:last-child {
      ${TableTd} {
        font-weight: 900;
        font-size: 1.2rem;
        line-height: 2rem;
        padding: 24px;
      }

      ${TableTd} span:first-child {
        font-weight: 400;
      }
    }

    tr:first-child {
      ${TableTd} {
        position: absolute;
        top: 0;
        text-align: left;
        transform: translateY(-68px);
      }
    }

    tr:not(:first-child):not(:last-child) {
      ${TableTd}:first-child {
        border-left-width: 1px;
      }

      ${TableTd}:last-child {
        border-right-width: 1px;
      }
    }

    tr:nth-child(2) {
      ${TableTd} {
        border-top-width: 1px;
      }

      ${TableTd}:first-child {
        position: relative;
        border-top-left-radius: 16px;

        &:before {
          content: '';
          position: absolute;
          display: block;
          height: 16px;
          top: 0;
          left: 32px;
          width: 1px;
          background-color: #c7cbcf;
          transform: translateY(-100%);
        }
      }

      ${TableTd}:last-child {
        border-top-right-radius: 16px;
      }
    }

    tr:nth-last-child(2) {
      ${TableTd} {
        border-bottom-width: 1px;
      }

      ${TableTd}:first-child {
        border-bottom-left-radius: 16px;
      }

      ${TableTd}:last-child {
        border-bottom-right-radius: 16px;
      }
    }

    &:not(:last-child) tr:nth-last-child(2) {
      ${TableTd}:first-child {
        position: relative;

        &:after {
          content: '';
          position: absolute;
          display: block;
          height: 16px;
          bottom: 0;
          left: 32px;
          width: 1px;
          background-color: #c7cbcf;
          transform: translateY(100%);
        }
      }
    }
  }
`

export default tableDesktop
