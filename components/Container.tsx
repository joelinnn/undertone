import { Flex, FlexProps } from '@chakra-ui/react'

export const Container = (props: FlexProps) => (
  <Flex
    fontFamily={"sans"}
    direction="column"
    alignItems="center"
    justifyContent="flex-start"
    height={"100vh"}
    bg='white'
    color="black"
    _dark={{
      bg: 'gray.900',
      color: 'white',
    }}
    transition="all 2s ease-out"
    {...props}
  />
)