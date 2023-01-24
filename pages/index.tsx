import Head from 'next/head'
import { Container, Hero, Main } from 'components'
import { Flex, Text, Stack, Link } from '@chakra-ui/react'
import dynamic from 'next/dynamic'

const RenderWhisp = dynamic(() => import('../components/Whisp'), {
  ssr: false
})

export default function Home() {

  return (
    <>
      <Head>
        <title>MVP</title>
      </Head>

      <Container direction='column' align='center'>
        <Hero/>
        <Flex direction={"row"} alignItems={"center"} fontSize={"1.2rem"} fontWeight={"bold"}>
            <Text>A Speech-To-Code App Powered by <Link color="blue" href="https://openai.com/">OpenAI</Link></Text>
        </Flex>
        <Main>
          <Stack direction="row" spacing={"10rem"}>
            <RenderWhisp/>
          </Stack>
        </Main>
      </Container>
    </>
  )
}
