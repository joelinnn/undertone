import { Text } from "@chakra-ui/react";

interface TranscribeProps {
  transcribedSpeech: Array<string>
}

export const Transcribed = ({ transcribedSpeech }: TranscribeProps) => {
  return (
  <>
    <Text id="transcribedSpeech">{transcribedSpeech}</Text>
  </>
  )
}