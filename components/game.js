import {useGameState} from "../hooks/useGameState";
import styles from "../styles/game.module.css";
import {GameInfo} from "./gameInfo";
import {GameCell} from "./gameCell";

export function Game() {
  const {
    cells,
    currentStep,
    handleCellClick,
    handleResetClick,
    isDraw,
    winnerSequence,
    winnerSymbol,
  } = useGameState();

  return (
    <div className={styles["game"]}>
      <GameInfo
        isDraw={isDraw}
        winnerSymbol={winnerSymbol}
        currentStep={currentStep}
      />
      <div className={styles["game-field"]}>
        {cells.map((symbol, index) => (
          <GameCell
            key={index}
            isWinner={winnerSequence?.includes(index)}
            onClick={() => handleCellClick(index)}
            symbol={symbol}
          />
        ))}
      </div>
      <button className={styles["reset"]} onClick={handleResetClick}>
        reset
      </button>
    </div>
  );
}