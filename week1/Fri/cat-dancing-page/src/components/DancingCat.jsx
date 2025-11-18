import { useMemo } from 'react'
import catSvg from '../assets/images/cat.svg'
import './DancingCat.css'

export default function DancingCat({ isPlaying, speed }) {
  const animationDuration = useMemo(() => {
    const baseSpeed = 2
    return baseSpeed / speed
  }, [speed])

  return (
    <div className="dancing-cat-container">
      <img
        src={catSvg}
        alt="Dancing Cat"
        className={`dancing-cat ${isPlaying ? 'dancing' : 'stopped'}`}
        style={{
          '--animation-duration': `${animationDuration}s`,
        }}
      />
    </div>
  )
}
