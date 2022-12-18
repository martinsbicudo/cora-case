import Head from 'next/head'

import transactions from '@/data/transactions.json'
import { Container } from '@Commons'
import { Header, Filters, Table } from '@Containers'

import * as Styled from './styles'

const Home = () => {
  return (
    <>
      <Head>
        <title>Extrato | Cora</title>
        <meta name="description" content="Cora Case" />
        <link rel="icon" href="favicon.png" />
      </Head>
      <Styled.Home>
        <Header />
        <main>
          <Container>
            <Filters />
            <Table transactions={transactions.results} />
          </Container>
        </main>
      </Styled.Home>
    </>
  )
}

export default Home
