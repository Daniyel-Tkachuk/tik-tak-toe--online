import styles from "../styles/game.module.css";
import {GameSymbol} from "./gameSymbol";

export const GameInfo = ({ isDraw, winnerSymbol, currentStep }) => {
  if (isDraw) {
    return <div className={styles["game-info"]}>Ничья</div>;
  }
  if (winnerSymbol) {
    return (
      <div className={styles["game-info"]}>
        Победитель: <GameSymbol symbol={winnerSymbol} />
      </div>
    );
  }
  return (
    <div className={styles["game-info"]}>
      Ход: <GameSymbol symbol={currentStep} />
    </div>
  );
};