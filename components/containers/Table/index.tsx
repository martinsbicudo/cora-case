import { format, isToday, parseISO } from 'date-fns'
import ptLocale from 'date-fns/locale/pt'

import { capitalize, getTransactionType } from '@/lib'
import { Currency } from '@Commons'

import { TableProps } from './interface'
import * as Styled from './styles'

const Table = ({ transactions }: TableProps) => {
  const parseDate = (date: string) => {
    return format(parseISO(date), "dd|MMM|MMMM|MM|yyyy|HH:mm:ss'", {
      locale: ptLocale,
    }).split('|')
  }

  const formatTopDate = (date: string) => {
    const [day, , longMonth, , year] = parseDate(date)
    return `${day} de ${capitalize(longMonth)} ${year} de ${year}`
  }

  const formatRowDate = (date: string) => {
    const [day, shortMonth, , month, year, time] = parseDate(date)
    const result = `${day} ${capitalize(shortMonth)} ${year} - ${time}`
    const today = new Date(
      parseInt(year, 10),
      parseInt(month, 10) - 1,
      parseInt(day, 10)
    )
    return isToday(today) ? `Hoje - ${result}` : result
  }

  const renderTableBodies = () =>
    transactions.map(({ date, items, amountTotal }) => (
      <Styled.TableTbody key={date} data-testid="table-body">
        <tr>
          <Styled.TableTd colSpan={4}>{formatTopDate(date)}</Styled.TableTd>
        </tr>
        {items.map((item) => {
          const { type, label } = getTransactionType(item)

          return (
            <tr key={item.dateEvent} data-testid="table-row">
              <Styled.TableTd>{item.actor}</Styled.TableTd>
              <Styled.TableTd>{label}</Styled.TableTd>
              <Styled.TableTd>{formatRowDate(item.dateEvent)}</Styled.TableTd>
              <Styled.TableTd>
                <Currency type={type} value={item.amount} withStyle />
              </Styled.TableTd>
            </tr>
          )
        })}
        <tr>
          <Styled.TableTd colSpan={4}>
            <span>saldo do dia</span> <Currency value={amountTotal} />
          </Styled.TableTd>
        </tr>
      </Styled.TableTbody>
    ))

  return (
    <Styled.Table>
      <thead>
        <tr>
          <Styled.TableTh>Nome</Styled.TableTh>
          <Styled.TableTh>Tipo de transação</Styled.TableTh>
          <Styled.TableTh>Data</Styled.TableTh>
          <Styled.TableTh>Valor</Styled.TableTh>
        </tr>
      </thead>
      {renderTableBodies()}
    </Styled.Table>
  )
}

export default Table
