import { useState, useRef, useEffect } from 'react'
import DancingCat from './components/DancingCat'
import AnimationControls from './components/AnimationControls'
import './App.css'

function App() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [speed, setSpeed] = useState(1)
  const audioRef = useRef(null)

  useEffect(() => {
    if (isPlaying) {
      audioRef.current?.play()
    } else {
      audioRef.current?.pause()
    }
  }, [isPlaying])

  const handleSpeedChange = (newSpeed) => {
    setSpeed(newSpeed)
    if (audioRef.current) {
      audioRef.current.playbackRate = newSpeed
    }
  }

  return (
    <div className="app-container">
      <audio
        ref={audioRef}
        src="https://assets.mixkit.co/active_storage/sfx/2392/2392-preview.mp3"
        loop
      />
      <DancingCat isPlaying={isPlaying} speed={speed} />
      <AnimationControls
        isPlaying={isPlaying}
        speed={speed}
        onTogglePlay={() => setIsPlaying(!isPlaying)}
        onSpeedChange={handleSpeedChange}
      />
    </div>
  )
}

export default App
