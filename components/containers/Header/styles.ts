import styled from 'styled-components'

export const Header = styled.header`
  padding: 24px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors['gray-3']};
`

export const HeaderTitle = styled.h1`
  font-weight: 900;
  font-size: 2.2rem;
  line-height: 3.2rem;
  color: ${({ theme }) => theme.colors['off-black']};
`
