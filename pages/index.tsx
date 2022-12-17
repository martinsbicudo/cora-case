import Head from 'next/head'

import { Container } from '@/components'

const Home = () => {
  return (
    <>
      <Head>
        <title>Cora Case</title>
        <meta name="description" content="Cora Case" />
        <link rel="icon" href="favicon.png" />
      </Head>
      <main>
        <Container>Cora</Container>
      </main>
    </>
  )
}

export default Home
