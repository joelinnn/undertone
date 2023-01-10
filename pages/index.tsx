import Head from 'next/head'
import { Container } from '../components/Container'
import { NavBar } from '../components/NavBar'
import { Hero } from '../components/Hero'
import { Main } from '../components/Main'
import { Flex, Stack, Text, Box } from '@chakra-ui/react'

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
            <Text>📣 Enable Your Microphone</Text>
            <Text>🗣️ Say Anything</Text>
            <Text>⚡ Turn your speech into code!</Text>
        </Flex>
        <Main>



        </Main>
      </Container>
    </>
  )
}
