import { useState } from 'react'
import catImage from '../assets/images/cat.svg'
import '../styles/DancingCat.css'

function DancingCat() {
  const [isAnimating, setIsAnimating] = useState(true)

  const toggleAnimation = () => {
    setIsAnimating(!isAnimating)
  }

  return (
    <div className="dancing-cat-container">
      <div className={`cat-wrapper ${isAnimating ? 'dancing' : ''}`}>
        <img src={catImage} alt="Dancing Cat" className="cat-image" />
      </div>

      <button
        className="control-button"
        onClick={toggleAnimation}
        aria-label={isAnimating ? 'Stop animation' : 'Start animation'}
      >
        {isAnimating ? '일시정지 ⏸' : '댄스 시작 ▶'}
      </button>

      <p className="instruction">
        {isAnimating ? '고양이가 춤추고 있어요!' : '버튼을 눌러 춤을 시작하세요!'}
      </p>
    </div>
  )
}

export default DancingCat
