import React, { useState } from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import ReactPlayer from 'react-player'

const VozOrdenes = () => {

  const [playing, setPlaying] = useState(false)
  const [mute, setMute] = useState(false)
  const [rate, setRate] = useState(1)

  const commands = [
    {
      command: 'Start.',
      callback: () => setPlaying(true)
    },
    {
      command: 'Stop.',
      callback: () => setPlaying(false)
    },
    {
      command: 'Mute.',
      callback: () => setMute(true)
    },
    {
      command: 'No mute.',
      callback: () => setMute(false)
    },
    {
      command: 'Next.',
      callback: () => setRate(rate + 1)
    },
    {
      command: 'Back.',
      callback: () => setRate(rate - 1)
    }
  ]

  const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition({ commands })
  if (!browserSupportsSpeechRecognition) {
    return null
  }

  return (
    <div>
      <button onClick={SpeechRecognition.startListening}>Start</button>
      <button onClick={SpeechRecognition.stopListening}>Stop</button>
      <p>{transcript}</p>
      <div className='App' style={{width: '100%', height: '100%', position: 'absolute'}}>
        <ReactPlayer
          url={require('../../video/Wiz Khalifa - See You Again ft. Charlie Puth [Official Video] Furious 7 Soundtrack.mp4')}
          width='100%'
          height='100%'
          playing={playing}
          muted={mute}
          playbackRate={rate}
        />
      </div>
    </div>
  )
}
export default VozOrdenes