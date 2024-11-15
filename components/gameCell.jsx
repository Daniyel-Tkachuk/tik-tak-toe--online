import styles from "../styles/game.module.css";
import {GameSymbol} from "./gameSymbol";

export const GameCell = ({ isWinner, onClick, symbol }) => {
  return (
    <button
      className={`${styles["cell"]} ${isWinner ? styles["cell--win"] : ""}`}
      onClick={onClick}
    >
      {symbol ? <GameSymbol symbol={symbol} /> : null}
    </button>
  );
};