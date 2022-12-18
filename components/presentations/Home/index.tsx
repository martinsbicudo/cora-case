import Head from 'next/head'

import { Container } from '@Commons'
import { Header, Filters } from '@Containers'

import * as Styled from './styles'

const Home = () => {
  return (
    <>
      <Head>
        <title>Cora Case</title>
        <meta name="description" content="Cora Case" />
        <link rel="icon" href="favicon.png" />
      </Head>
      <Styled.Home>
        <Header />
        <main>
          <Container>
            <Filters />
          </Container>
        </main>
      </Styled.Home>
    </>
  )
}

export default Home
