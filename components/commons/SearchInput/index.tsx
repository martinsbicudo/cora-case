import { ReactComponent as SearchIcon } from '@/public/icons/search.svg'

import { SearchInputProps } from './interface'
import * as Styled from './styles'

const SearchInput = ({ onChange }: SearchInputProps) => {
  return (
    <Styled.SearchInputWrapper>
      <Styled.SearchInputIconBox>
        <SearchIcon />
      </Styled.SearchInputIconBox>
      <Styled.SearchInput
        id="search"
        name="search"
        type="text"
        onChange={onChange}
        placeholder="Pesquisar"
      />
    </Styled.SearchInputWrapper>
  )
}

export default SearchInput
