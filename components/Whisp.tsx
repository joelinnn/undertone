import axios from 'axios'
import React, { useState } from 'react'
import { Button, Center } from '@chakra-ui/react'
import { ReactMic, ReactMicStopEvent } from 'react-mic'
import { Transcribed } from './Transcribed'

export default function Whisp () {
  const [transcribedSpeech, setTranscribedSpeech] = useState<string[]>([])
  const [isRecording, setRecording] = useState(false)
  const [isTranscribing, setTranscribing] = useState(false)
  const [stopTranscribing, setStopTranscribing] = useState(false)

  const startRecording = () => {
    setRecording(true)
  }

  const stopRecording = () => {
    setRecording(false)
    setTranscribing(false)
  }

  const startTranscribing = (recording:ReactMicStopEvent) => {
    setStopTranscribing(true)
    const headers = {
      'content-type': 'multipart/form-data'
    }

    const formData = new FormData()
    formData.append('language', 'english')
    formData.append('model_size', 'base')
    formData.append('audio_data', recording.blob, 'temp_recording')
    axios.post('/transcribe/', formData, { headers })
      .then((response) => {
        let newTranscription = transcribedSpeech
        newTranscription.push(response.data)
        setTranscribedSpeech(newTranscription)
        setTranscribing(false)
        setStopTranscribing(false)
      })
  }

  const stopHandler = (recording:ReactMicStopEvent) => {
    startTranscribing(recording)
    setTranscribing(true)
  }

  return (
    <Center display="flex-column">
      <Center marginBottom="10">
        {(!isRecording && !isTranscribing) ? (
          <Button onClick={startRecording} fontSize="1rem">Start Recording!</Button>
        ) : (
          <Button onClick={stopRecording} disabled={stopTranscribing} isLoading={isTranscribing} loadingText="transcribing" spinnerPlacement="start">Stop</Button>)}
      </Center>

        <ReactMic record={isRecording} onStop={stopHandler} strokeColor="#0070f3" backgroundColor="#16161D"/>
      <Center>
        <Transcribed transcribedSpeech={transcribedSpeech} setTranscribedSpeech={setTranscribedSpeech} />
      </Center>

    </Center>
  )
}