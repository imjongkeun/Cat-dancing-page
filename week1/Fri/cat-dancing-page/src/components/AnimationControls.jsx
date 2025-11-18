import './AnimationControls.css'

export default function AnimationControls({
  isPlaying,
  speed,
  onTogglePlay,
  onSpeedChange,
}) {
  return (
    <div className="controls-container">
      <h1 className="title">고양이 댄싱 파티! 🐱</h1>

      <button
        className={`play-button ${isPlaying ? 'playing' : ''}`}
        onClick={onTogglePlay}
        title={isPlaying ? '정지' : '시작'}
      >
        {isPlaying ? '⏸ 정지' : '▶ 시작'}
      </button>

      <div className="speed-control">
        <label>속도:</label>
        <div className="speed-buttons">
          <button
            className={`speed-button ${speed === 0.5 ? 'active' : ''}`}
            onClick={() => onSpeedChange(0.5)}
            disabled={!isPlaying}
          >
            🐢 느림
          </button>
          <button
            className={`speed-button ${speed === 1 ? 'active' : ''}`}
            onClick={() => onSpeedChange(1)}
            disabled={!isPlaying}
          >
            🚶 보통
          </button>
          <button
            className={`speed-button ${speed === 1.5 ? 'active' : ''}`}
            onClick={() => onSpeedChange(1.5)}
            disabled={!isPlaying}
          >
            🏃 빠름
          </button>
        </div>
      </div>

      <div className="info">
        상태: {isPlaying ? '춤 중...' : '정지 중'}
        <br />
        속도: {speed === 0.5 ? '느림' : speed === 1 ? '보통' : '빠름'}
      </div>
    </div>
  )
}
