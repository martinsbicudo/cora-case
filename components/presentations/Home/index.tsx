import { useState, useEffect, useCallback } from 'react'

import Head from 'next/head'

import { useTransactions } from '@/hooks'
import { getTransactions } from '@/services'
import { Container, Loading } from '@Commons'
import { Header, Filters, Table } from '@Containers'

import * as Styled from './styles'

const controller =
  typeof window !== 'undefined' ? new AbortController() : undefined

const Home = () => {
  const [loading, setLoading] = useState(true)
  const { transactions, setTransactions } = useTransactions()

  const getInitialTransactions = useCallback(async () => {
    setLoading(true)
    const transactions = await getTransactions(controller?.signal)
    setTransactions(transactions)
    setLoading(false)
  }, [setTransactions])

  useEffect(() => {
    getInitialTransactions()
    return controller?.abort
  }, [getInitialTransactions])

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
            {loading && (
              <Styled.HomeLoadingBox>
                <Loading />
              </Styled.HomeLoadingBox>
            )}
            {!loading && <Table transactions={transactions} />}
          </Container>
        </main>
      </Styled.Home>
    </>
  )
}

export default Home
