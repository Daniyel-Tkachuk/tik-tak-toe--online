import s from './game.module.css';
import {GameCell} from "./GameCell";
import {GameInfo} from "./GameInfo"
import {useGameState} from "../hooks/useGameState";

export const Game = () => {
  const {
    cells,
    winnerSequence,
    currentSymbol,
    isDraw,
    winnerSymbol,
    handleResetClick,
    handleCellClick
  } = useGameState()

  return (
    <div className={s.game}>
      <GameInfo isDraw={isDraw} winnerSymbol={winnerSymbol} currentSymbol={currentSymbol}/>
      <div className={s.gameField}>
        {cells.map((symbol, index) => {
          return (
            <GameCell key={index}
                      symbol={symbol}
                      isWinner={winnerSequence?.includes(index)}
                      onClick={() => handleCellClick(index)}
            />
          )
        })}
      </div>
      <button className={s.reset} onClick={handleResetClick}>
        reset
      </button>
    </div>
  )
}