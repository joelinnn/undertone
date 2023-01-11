import React, { useRef, useState, useEffect } from "react";
import { Button, Spinner, Container } from "@chakra-ui/react";
import axios from "axios";
import { ReactMic, ReactMicStopEvent } from "react-mic";
import { Transcribed } from "./Transcribed";

export const Whisp = () => {

  const [currentTranscribing, ] = useState("");
  const [transcribedSpeech, setTranscribedSpeech] = useState([""]);
  const [isRecording, setRecording] = useState(false);
  const [isTranscribing, setTranscribing] = useState(false);
  const [language, setLanguage] = useState("english");
  const [model, setModel] = useState("base");
  const [stopTranscribing, setStopTranscribing] = useState(false);

  const intervalReference = useRef(null);
  const stopTranscribingRef = useRef(stopTranscribing);
  stopTranscribingRef.current = stopTranscribing;

  useEffect(() => {
    return () => clearInterval(intervalReference.current)
  })

  const startRecording = () => {
    setRecording(true);
  }

  const stopRecording = () => {
    clearInterval(intervalReference.current);
    setRecording(false);
    setTranscribing(false);
    intervalReference.current = setInterval(transcribeInterval, 5000);
  }

  const transcribeInterval = () => {
    clearInterval(intervalReference.current);
    setRecording(false);
  }
  const startTranscribing = (recording:ReactMicStopEvent) => {
    const headers = {
      "content-type": "multipart/form-data"
    };

    const formData = new FormData();
    formData.append("language", language);
    formData.append("model_size", model);
    formData.append("audio_data", recording.blob, "temp_recording");
    axios.post("/transcribe/", formData, { headers })
      .then((response) => {
        let newTranscription = transcribedSpeech;
        newTranscription.push(response.data);
        setTranscribedSpeech(newTranscription);
        setTranscribing(false);
        intervalReference.current = setInterval(transcribeInterval, 5000);
      })

      if (!stopTranscribingRef.current) {
        setRecording(true);
      }
  }

  const stopHandler = (recording:ReactMicStopEvent) => {
    startTranscribing(recording);
    setTranscribing(true);
  }

  return (
    <Container>
      { (!isRecording && !isTranscribing) ? (<Button onClick={startRecording}>Start</Button>) : (<Button onClick={stopRecording} disabled={stopTranscribingRef.current}>Stop</Button>)}
      <ReactMic record={isRecording} onStop={stopHandler} strokeColor="lightblue" backgroundColor="transparent"/>

      <Transcribed transcribedSpeech={transcribedSpeech} currentTranscribing={currentTranscribing}/>
      { isTranscribing ? (<Spinner/>) : (<></>) }
    </Container>
  )
}