import axios from 'axios'
import { Button, Center } from '@chakra-ui/react'
import { useState } from 'react'

export const SpeechToCode = () => {

  const [codedSpeech, setCodedSpeech] = useState("")
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
    <Center>
      <Button isLoading={coding} onClick={clickHandler}>Translate to Code!</Button>
      {/* <Code fontSize={'sm'} fontFamily={'mono'} bg={useColorModeValue('#f8f8f8', '#232635')} w={'30vw'} h={'30vh'}><pre>{codedSpeech}</pre></Code> */}
    </Center>
  )
}
