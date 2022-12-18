import styled from 'styled-components'

export const CircleIcon = styled.i`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background-color: ${({ theme }) => theme.colors['soft-secondary']};
  border-radius: 16px;
`
