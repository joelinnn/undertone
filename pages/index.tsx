import Head from 'next/head'
import { Container } from '../components/Container'
import { NavBar } from '../components/NavBar'
import { Hero } from '../components/Hero'
import { Main } from '../components/Main'
import { Flex, Stack, Text, Box, Button } from '@chakra-ui/react'
import { transcriber } from './api/hello'
import { Whisp } from '../components/Whisp';

export default function Home() {
  return (
    <>
      <Head>
        <title>MVP</title>
      </Head>

      <Container>
        <NavBar/>
        <Hero/>
        <Flex
          direction={"row"}
          alignItems={"center"}
          fontSize={"1.2rem"}
          fontWeight={"bold"}>
            <Text>🗣️ A Speech2Code App powered by OpenAI</Text>
        </Flex>
        <Main>
          <Whisp/>
        </Main>
      </Container>
    </>
  )
}
