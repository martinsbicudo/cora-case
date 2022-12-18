import { up } from 'styled-breakpoints'
import styled from 'styled-components'

export const Filters = styled.section`
  padding: 25px 0;

  & > *:last-child {
    margin-top: 20px;
  }

  ${up('md')} {
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
    padding: 40px 0;

    & > *:last-child {
      flex: 0;
      margin-right: 26px;
      margin-top: 0;
    }
  }
`
