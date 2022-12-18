import styled from 'styled-components'

export const SearchInputWrapper = styled.fieldset`
  width: 100%;
  position: relative;
  z-index: 1;
  color: ${({ theme }) => theme.colors['gray-1']};
`

export const SearchInputIconBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 56px;
`

export const SearchInput = styled.input`
  width: 100%;
  font-size: 1.6rem;
  line-height: 2.4rem;
  border-radius: 16px;
  padding: 20px 20px 20px 56px;
  background-color: ${({ theme }) => theme.colors['gray-4']};
  border: 1px solid transparent;
  transition: border-color 0.2s;
  will-change: border-color;

  &:focus {
    border-color: ${({ theme }) => theme.colors['gray-2']};
  }
`
