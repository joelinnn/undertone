import axios from 'axios'
import { Button, Container, InputGroup, Input, InputRightElement } from '@chakra-ui/react'
import { useState } from 'react';
import { TranslatedCode } from './TranslatedCode'

interface TranscribeProps {
  transcribedSpeech: string[]
  setTranscribedSpeech: Function
}

export const Transcribed = ({ transcribedSpeech, setTranscribedSpeech }: TranscribeProps) => {

  const [codedSpeech, setCodedSpeech] = useState('')
  const [coding, setCoding] = useState(false)

  const clickHandler = () => {
    let query = (document.getElementById('transcribedSpeech') as HTMLInputElement).value

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
      <InputGroup size="lg" variant="filled">
        <Input id="transcribedSpeech" fontWeight="bold" value={transcribedSpeech} onChange={(e) => setTranscribedSpeech(e.target.value)}/>
        <InputRightElement w="auto">
          <Button onClick={clickHandler} isLoading={coding}>
            Translate To Code
          </Button>
        </InputRightElement>
      </InputGroup>
      <TranslatedCode codedSpeech={codedSpeech}/>
    </Container>
  )
}