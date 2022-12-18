import { ReactComponent as SearchIcon } from '@/public/icons/search.svg'

import { InputFilterProps } from './interface'
import * as Styled from './styles'

const InputFilter = ({ onChange }: InputFilterProps) => {
  return (
    <Styled.InputFilterWrapper>
      <Styled.InputFilterIconBox>
        <SearchIcon />
      </Styled.InputFilterIconBox>
      <Styled.InputFilter
        id="search"
        name="search"
        type="text"
        onChange={onChange}
        placeholder="Pesquisar"
      />
    </Styled.InputFilterWrapper>
  )
}

export default InputFilter
