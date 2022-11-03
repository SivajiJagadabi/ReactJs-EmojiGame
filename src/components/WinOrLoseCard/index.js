// Write your code here.
import './index.css'

const wonImage = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
const loseImage = 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

const WinOrLoseCard = props => {
  const {isWon, onClickPlayAgain, score} = props

  const gameStatus = isWon ? 'You Won' : 'You Lose'
  const scoreStatus = isWon ? 'Best Score' : 'Score'
  const imgUrl = isWon ? wonImage : loseImage

  return (
    <div className="win-loss-container">
      <div className="win-loss-details">
        <h1 className="heading-status">{gameStatus}</h1>
        <p className="score-status">{scoreStatus}</p>
        <p className="play-score">{score}/12</p>
        <button
          type="button"
          onClick={onClickPlayAgain}
          className="play-button"
        >
          Play Again
        </button>
      </div>
      <div className="image-section">
        <img src={imgUrl} className="win-lose-img" alt="win or lose" />
      </div>
    </div>
  )
}

export default WinOrLoseCard
