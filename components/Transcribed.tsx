import axios from 'axios'
import { Text, Button, Center, Container } from '@chakra-ui/react'
import { useState } from 'react';
import { TranslatedCode } from './TranslatedCode'

interface TranscribeProps {
  transcribedSpeech: Array<string>
}

export const Transcribed = ({ transcribedSpeech }: TranscribeProps) => {

  const [codedSpeech, setCodedSpeech] = useState('')
  const [coding, setCoding] = useState(false)

  const clickHandler = () => {
    let query = document.getElementById('transcribedSpeech')?.textContent

    if (query) {
      setCoding(true)
      axios.post('/api/translate', { prompt: query })
        .then((response) => {
          setCodedSpeech(response.data)
          setCoding(false)
        })
        .catch((error) => {
          console.log(error)
        })
    } else {
      setCodedSpeech('Please transcribe some speech first!')
    }
  }

  return (
    <Container>
      <Center justifyContent="space-between">
        <Text align="center" fontWeight="bold" id="transcribedSpeech">{transcribedSpeech}</Text>
        <Button isLoading={coding} onClick={clickHandler}>Translate to Code!</Button>
      </Center>
      <TranslatedCode codedSpeech={codedSpeech}/>
    </Container>
  )
}