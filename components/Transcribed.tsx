import { Text } from "@chakra-ui/react";

interface TranscribeProps {
  transcribedSpeech: Array<string>
  currentTranscribing: string
}

export const Transcribed = ({ transcribedSpeech, currentTranscribing }: TranscribeProps) => {
  if (currentTranscribing.length === 0 && transcribedSpeech.length === 0) {
    return <Text>...</Text>
  }
  return (
  <>
    <Text>{transcribedSpeech}</Text>
    <Text>{currentTranscribing}</Text>
  </>
  )
}