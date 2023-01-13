import { Center, Code } from "@chakra-ui/react";
interface TranslatedCodeProps {
  codedSpeech: string
}

export const TranslatedCode = ({ codedSpeech }:TranslatedCodeProps) => {
  return (
    <Center fontFamily="mono">
      <Code bg="transparent">
        <pre>
          {codedSpeech}
        </pre>
      </Code>
    </Center>
  )
}