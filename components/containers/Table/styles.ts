import styled from 'styled-components'

export const Table = styled.table`
  width: 100%;
  border-spacing: 0;
  padding-top: 30px;
  color: ${({ theme }) => theme.colors['gray-1']};
`

export const TableTr = styled.tr``

export const TableTrBottom = styled.tr``

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
  position: relative;
  border-radius: 16px;

  ${TableTr}:first-child,
  ${TableTr}:last-child {
    ${TableTd} {
      font-weight: 900;
      font-size: 1.2rem;
      line-height: 2rem;
      padding: 24px;
    }

    ${TableTd} span {
      font-weight: 400;
    }
  }

  ${TableTr}:first-child {
    ${TableTd} {
      position: absolute;
      top: 0;
      text-align: left;
      transform: translateY(-68px);
    }
  }

  ${TableTr}:not(:first-child):not(:last-child) {
    ${TableTd}:first-child {
      border-left-width: 1px;
    }

    ${TableTd}:last-child {
      border-right-width: 1px;
    }
  }

  ${TableTr}:nth-child(2) {
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

  ${TableTr}:nth-last-child(2) {
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

  &:not(:last-child) ${TableTr}:nth-last-child(2) {
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
`
