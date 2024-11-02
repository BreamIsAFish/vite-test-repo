import { useRef, useState } from 'react'

function Vid() {
  console.log('eririr')
  console.log('eririr 2')

  const ref = useRef<HTMLAudioElement>(null)
  const [num, setNum] = useState(0)
  const [ready, setReady] = useState(false)
  // feature 1
  // feature 2
  return (
    <div>
      {/* <video
        src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        autoPlay
        controls
        playsInline
      /> */}
      {/* <video
        src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        autoPlay
        controls
        playsInline
      /> */}
      <h1>{num}</h1>
      <audio
        ref={ref}
        onEnded={() => setReady(true)}
      >
        <source
          src="./mock-avatar-audio.mp3"
          type="audio/mp3"
        />
        <track
          kind="captions"
          srcLang="th"
          label="Thai"
        />
      </audio>
      <button onClick={() => ref.current?.play()}>Play audio</button>
      <button
        disabled={!ready}
        onClick={() => {
          alert('Yay!')
          setNum(num + 1)
          setReady(false)
        }}
        style={{ backgroundColor: ready ? 'green' : 'red' }}
      >
        Go next
      </button>
    </div>
  )
}

export default Vid
