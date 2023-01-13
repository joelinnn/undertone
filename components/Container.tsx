import { Flex, FlexProps } from '@chakra-ui/react'

export const Container = (props: FlexProps) => (
  <Flex
    fontFamily="sans"
    direction="column"
    alignItems="center"
    justifyContent="flex-start"
    height="100vh"
    bg="gray.300"
    color="black"
    _dark={{
      bg: "black",
      color: "white",
    }}
    transition="all 2s ease-out"
    {...props}
  />
)