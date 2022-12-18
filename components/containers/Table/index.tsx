import * as Styled from './styles'

const Header = () => {
  return (
    <Styled.Table>
      <thead>
        <Styled.TableTr>
          <Styled.TableTh>Nome</Styled.TableTh>
          <Styled.TableTh>Tipo de transação</Styled.TableTh>
          <Styled.TableTh>Data</Styled.TableTh>
          <Styled.TableTh>Valor</Styled.TableTh>
        </Styled.TableTr>
      </thead>
      <Styled.TableTbody>
        <Styled.TableTr>
          <Styled.TableTd colSpan={4}>23 de Agosto</Styled.TableTd>
        </Styled.TableTr>
        <Styled.TableTr>
          <Styled.TableTd>Test</Styled.TableTd>
          <Styled.TableTd>Tansferência recebida</Styled.TableTd>
          <Styled.TableTd>Hoje - 12 Jun 2020 - 17:35</Styled.TableTd>
          <Styled.TableTd>+ R$ 320,00</Styled.TableTd>
        </Styled.TableTr>
        <Styled.TableTr>
          <Styled.TableTd colSpan={4}>
            <span>saldo</span> do dia R$ 3.110,08
          </Styled.TableTd>
        </Styled.TableTr>
      </Styled.TableTbody>
      <Styled.TableTbody>
        <Styled.TableTr>
          <Styled.TableTd colSpan={4}>23 de Agosto</Styled.TableTd>
        </Styled.TableTr>
        <Styled.TableTr>
          <Styled.TableTd>Test</Styled.TableTd>
          <Styled.TableTd>Tansferência recebida</Styled.TableTd>
          <Styled.TableTd>Hoje - 12 Jun 2020 - 17:35</Styled.TableTd>
          <Styled.TableTd>+ R$ 320,00</Styled.TableTd>
        </Styled.TableTr>
        <Styled.TableTr>
          <Styled.TableTd colSpan={4}>
            <span>saldo</span> do dia R$ 3.110,08
          </Styled.TableTd>
        </Styled.TableTr>
      </Styled.TableTbody>
    </Styled.Table>
  )
}

export default Header
