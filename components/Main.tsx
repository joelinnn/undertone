import { Stack, StackProps } from '@chakra-ui/react'

export const Main = (props:StackProps) => {
  return (
    <Stack
      spacing="1.5rem"
      marginTop="10rem"
      alignItems="center"
      {...props}/>
  )
}